import { Button, FormControl, FormLabel, Image, Input, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { memo, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { server__image__host__url } from '../../app/store';
import { useUpdateUserMutation } from '../../features/auth/api';
import { userLoggedIn } from '../../features/auth/authSlice';
import HeaderLinkItem from '../pages/developViewSkeletonComponents/HeaderLinkItems';


const UploadSingleImage = memo(() => { 
    
    let linksArray = [
        {name: "Home", link: '/'},
        {name: '', link: `/upload/single/profile__image`}
    ]

        
    const [selectedImage, setSelectedImage] = useState([]);
    const handleMarkImage = (className, imgSrc) => {
        let imageItem = document.querySelector(`.${className}`);
        if(imageItem){
            imageItem.classList.toggle('active')
            let newSelectedImage = [...selectedImage]; 
            let imgSrcIndex = imgSrc.indexOf('/images');
            if(imgSrcIndex !== -1){
                let imageIndex = newSelectedImage.indexOf(imgSrc);
                if( imageIndex === -1){
                    newSelectedImage.push(imgSrc)
                    setSelectedImage(newSelectedImage);
                }else{
                newSelectedImage.splice(imageIndex,1);
                setSelectedImage(newSelectedImage);
                }
            }
        }
    }

    const handleDeleteMarkImages = () => {
            let images = selectedImage;
            if(images && images?.length){
                axios.delete('http://localhost:10000/api/v1/file/upload/multiple', {headers: {images}}).then((res)=>{
                if(res.status === 200 && res.data && res.data?.status__code === 200){
                    toast.success('Successfully image deleted',{duration: 3000})
                    let newImagesSrcInfo = previewImages.filter((info)=> images.indexOf(info) === -1);
                        setPreviewImages(newImagesSrcInfo);
                        setSelectedImage([]);
                        let previewItems = document.querySelectorAll('.preview__image');
                        if(previewItems){ 
                            previewItems.forEach((info)=>{
                                info.classList.remove('active');
                            })
                        }
                    localStorage.setItem('profile__images',JSON.stringify(newImagesSrcInfo)); 
                }else{
                    toast.error('There was a server side error!',{duration: 3000})
                }
                }).catch(err => {
                    // do something here
                })
            }else{
            toast.error('Invalid Server Request!',{duration: 3000})
            }
    }
    
    const handleUploadAllImages = () => {
        let formData = new FormData();
        for (let i = 0; i < images.length; i++) {
        formData.append('images', images[i]);
        }
        axios.post('http://localhost:10000/api/v1/file/upload/multiple',formData,{headers: {'Content-Type': 'multipart/form-data'}}).then((res)=>{
        if(res.status === 200 && res.data && res.data?.status__code === 200){
            toast.success('Successfully all images uploaded!',{duration: 3000})

            let images = res.data.images;
            let resetPreviewImages = previewImages.filter((info)=> info.indexOf('/images') !== -1);
            setImages([])
            localStorage.setItem('profile__images',JSON.stringify([...resetPreviewImages, ...images]));
            setPreviewImages([...resetPreviewImages, ...images]);
        }else{
            toast.error('There was a server side error!',{duration: 3000})
        }
        }).catch(err => {
            toast.error(err.message,{duration: 3000})
        })
    }

    const handleDeleteUploadedImages = () => {
        let images = JSON.parse(localStorage.getItem('profile__images'))||[];
        if(images && images?.length){
            axios.delete('http://localhost:10000/api/v1/file/upload/multiple', {headers: {images: previewImages}}).then((res)=>{
            if(res.status === 200 && res.data && res.data?.status__code === 200){
                toast.success('Successfully all images deleted!',{duration: 3000})
                
                localStorage.setItem('profile__images',JSON.stringify([]));
                setPreviewImages([]);
            }else{
                toast.error('There was a server side error!',{duration: 3000})
            }
            }).catch(err => { 
                // do something here
            })
        }else{
            toast.error('Invalid Server Request!',{duration: 3000})
        }
    } 

    const authInfo = useSelector((state)=> state.auth.auth);
    let [provideInfo, {data, isLoading, isError, error, isSuccess}] = useUpdateUserMutation();
    const handleSubmit = (e) => {
        e.preventDefault();    
        if( previewImages && previewImages[previewImages.length - 1] && previewImages[previewImages.length - 1].indexOf('/images/check') !== -1){
            if(previewImages.length > 1){
                toast.error('Only one image acceptable!',{duration: 3000})
            }else{
                let newAuthInfo = {...authInfo}; 
                    newAuthInfo.img__src = previewImages[previewImages.length - 1] 
                    provideInfo(newAuthInfo);
            }
        }else{
            toast.error('Please upload then save!',{duration: 3000})
        }
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [updated, setUpdated] = useState(false);
    useEffect(()=>{ 
        if(isError && !isLoading && !isSuccess){ 
            toast.error('There was a server side error!',{duration: 3000})
        }
        if(!isError && isSuccess && !isLoading){
            if(data && data?.status__code === 200){
                if(!updated){
                    toast.success('Successfully profile Image Updated',{duration: 500});
                    let images = JSON.parse(localStorage.getItem('profile__images'));
                    setImages([]);
                    setPreviewImages([]);
                    setUpdated(()=> true);
                    setTimeout(() => {
                        let newAuthInfo = {...authInfo};
                            newAuthInfo.img__src = images[images.length - 1];
                            dispatch(userLoggedIn(newAuthInfo));
                        let localAuthInfo = JSON.parse(localStorage.getItem('auth'));
                            localAuthInfo.img__src = images[images.length - 1];
                            localStorage.setItem('auth', JSON.stringify(localAuthInfo));
                        navigate('/profile')
                    }, 500);
                }
            }
        }
    },[data, isLoading, isError, error, isSuccess, navigate, authInfo, dispatch, updated])
    
    const [images, setImages] = useState([]);
    const [previewImages, setPreviewImages] = useState(JSON.parse(localStorage.getItem('profile__images')) || []);
    
    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        setImages(files);
        const previewURLs = files.map((file) => URL.createObjectURL(file));
        setPreviewImages([...previewImages, ...previewURLs]);
    };

    
    let newPreviewImages = [];
    previewImages.forEach((info)=>{
        if(info.indexOf('ryans') === -1){
            newPreviewImages.push(info)
        }
    })
    
    return (
        <React.Fragment> 
                <div className='main__category__product__view__upper__container'>
                    <div style={{paddingTop:'30px',paddingBottom:'30px'}}>
                        <HeaderLinkItem linksArray={linksArray}/>
                        <Text fontSize={'40px'} fontWeight={'bold'} letterSpacing={'.5px'} textAlign={'center'} paddingY={'30px'}>{'Upload Your Profile Image'}</Text>
                    </div>  
                </div> 
            <div className='main__category__product__view__upper__container bg__white'>
                <div className='padding__top padding__bottom'>
                    <form onSubmit={handleSubmit} className='form__item__view__main__container'> 
                        <FormControl id="image">
                            <FormLabel>Upload Profile Image</FormLabel>
                            <Input
                            type="file"
                            name="image" 
                            onChange={handleImageUpload}
                            />
                        </FormControl>
                        <div className='register__button'>
                            <Button 
                            colorScheme="green" 
                            variant={'outline'}
                            type="submit"
                            size='sm' 
                            isLoading={isLoading}
                            >
                                Save
                            </Button>      
                        </div>
                    </form>
                    {newPreviewImages.length > 0 && (
                        <div className='register__button padding__top padding__bottom'>
                        {
                            selectedImage.length !== 0 && 
                            <Button 
                                size='sm' 
                                onClick={handleDeleteMarkImages}
                                variant="outline"
                                colorScheme="orange"
                                mr='30px'
                                isDisabled={selectedImage.length === 0}
                            >
                                Delete Marked Images
                            </Button>
                            }
                            {
                                newPreviewImages[newPreviewImages.length-1].indexOf('/images') !== -1 &&
                            <Button 
                                size='sm' 
                                onClick={handleDeleteUploadedImages}
                                variant="outline"
                                colorScheme="orange"
                                mr='30px'
                                isDisabled={newPreviewImages[newPreviewImages.length-1].indexOf('/images') === -1}
                            >
                                Delete Uploaded Images
                            </Button>
                        }
                            { newPreviewImages[newPreviewImages.length-1].indexOf('/images') === -1 &&
                                <Button 
                                    size='sm'  
                                    onClick={handleUploadAllImages}
                                    variant={'outline'}
                                    colorScheme='green'
                                    isDisabled={newPreviewImages[newPreviewImages.length-1].indexOf('/images') !== -1}
                                >
                                    Upload Images
                                </Button>
                            }
                        </div>
                        )}
                    <div className='image__preview__main__container'>
                        {newPreviewImages.map((url, index) => (
                        <Image  className={`preview__image__${index} preview__image`} onClick={()=> handleMarkImage(`preview__image__${index}`, url)}  key={index} src={url.indexOf('/images') !== -1 ? server__image__host__url+url: url} alt={`Preview Image ${index + 1}`} />
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
});

export default UploadSingleImage;