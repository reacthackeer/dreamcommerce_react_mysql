import { Button, FormControl, FormLabel, Image, Input, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { memo, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { server__image__host__url } from '../../../../app/store';
import { useUpdateSingleShopByCategoryMutation } from '../../../../features/shopByCategory/shopByCategoryApi';
import DynamicHeader from '../../../AddNavbar/DynamicHeader';
import DynamicHeaderHome from '../../DynamicHeaderHome';

const EditShopByCategoryComponent = memo(({setSelected}) => {
    
    
    const [images, setImages] = useState([]);
    const [previewImages, setPreviewImages] = useState(JSON.parse(localStorage.getItem('edit__shop__by__category__images')) || []);

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
                    localStorage.setItem('edit__shop__by__category__images',JSON.stringify(newImagesSrcInfo)); 
                }else{
                    toast.error('There was a server side error!',{duration: 3000})
                }
                }).catch(err => {
                console.log(err.message);
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
            localStorage.setItem('edit__shop__by__category__images',JSON.stringify([...resetPreviewImages, ...images]));
            setPreviewImages([...resetPreviewImages, ...images]);
        }else{
            toast.error('There was a server side error!',{duration: 3000})
        }
        }).catch(err => {
            toast.error(err.message,{duration: 3000})
        })
    }

    const handleDeleteUploadedImages = () => {
        let images = JSON.parse(localStorage.getItem('edit__shop__by__category__images'))||[];
        if(images && images?.length){
            axios.delete('http://localhost:10000/api/v1/file/upload/multiple', {headers: {images: previewImages}}).then((res)=>{
            if(res.status === 200 && res.data && res.data?.status__code === 200){
                toast.success('Successfully all images deleted!',{duration: 3000})
                
                localStorage.setItem('edit__shop__by__category__images',JSON.stringify([]));
                setPreviewImages([]);
            }else{
                toast.error('There was a server side error!',{duration: 3000})
            }
            }).catch(err => {
                console.log(err.message);
            })
        }else{
            toast.error('Invalid Server Request!',{duration: 3000})
        }
    } 
    
    const [provideBrandInfo,{isLoading, isSuccess, isError, data}] = useUpdateSingleShopByCategoryMutation();
    const [popularCategoryName, setPopularCategoryName] = useState(localStorage.getItem('edit__shop__by__category__name') || ''); 
    const [popularCategoryLink, setPopularCategoryLink] = useState(localStorage.getItem('edit__shop__by__category__link') || ''); 
    const handleSubmit = (e) => {
        e.preventDefault(); 
        let images = JSON.parse(localStorage.getItem('edit__shop__by__category__images'));
        let name = popularCategoryName;
        let link = popularCategoryLink;
        let id = Number(localStorage.getItem('edit__shop__by__category__id')); 

        if(images  && images?.length > 0){
            if(images?.length > 1){
                toast.error('Only one image acceptable!',{duration: 3000});
            }else{
                if(name && link && id && images?.length === 1){
                    let postData = {img__src: images[0], name, link, id};
                    provideBrandInfo(postData);
                }else{
                    toast.error('Invalid request!',{duration: 3000});
                }
            }
        }else{
            toast.error('Please upload an image!',{duration: 3000});
        }
    }

    useEffect(()=>{
        if(isError && !isLoading && !isSuccess){
            toast.error('There was a server side error!',{duration: 3000})
        }
        if(!isError && isSuccess && !isLoading){
            setPopularCategoryLink('');
            setPopularCategoryName('');
            setImages([]);
            setPreviewImages([]); 
            localStorage.removeItem('edit__shop__by__category__images');
            localStorage.removeItem('edit__shop__by__category__name');
            localStorage.removeItem('edit__shop__by__category__id');
            localStorage.removeItem('edit__shop__by__category__link');
            setSelected(false);
        }
    },[isLoading, isSuccess, isError, data,setSelected])

    const handleCancelUpdate = () => {
        localStorage.removeItem('edit__shop__by__category__images');
        localStorage.removeItem('edit__shop__by__category__name');
        localStorage.removeItem('edit__shop__by__category__id');
        localStorage.removeItem('edit__shop__by__category__link');
        setSelected(false);
    }

    
    return (
        <React.Fragment>
            <DynamicHeader message={'Add Brand'}/>
            <DynamicHeaderHome/>
            <div className='main__category__product__view__upper__container bg__1'>  
            <div className='padding__top padding__bottom'>
            <Text fontSize={'2xl'} paddingBottom={'30px'}>Shop By Brand Basic Information</Text>
                <form onSubmit={handleSubmit} className='form__item__view__main__container'> 
                    <FormControl id="image">
                        <FormLabel>Name</FormLabel>
                        <Input
                        type="text"
                        value={popularCategoryName} 
                        placeholder='Shop by category name....'
                        onChange={(e)=> setPopularCategoryName(e.target.value)}
                        />
                    </FormControl>
                    <FormControl id="image">
                        <FormLabel>Link</FormLabel>
                        <Input
                        type="text"
                        value={popularCategoryLink} 
                        placeholder='Shop by category link....'
                        onChange={(e)=> setPopularCategoryLink(e.target.value)}
                        />
                    </FormControl>
                    <FormControl id="image">
                        <FormLabel>Upload Product Image</FormLabel>
                        <Input
                        type="file"
                        name="image" 
                        onChange={handleImageUpload}
                        />
                    </FormControl>
                    <div className='register__button'>
                        <Button 
                        colorScheme="red" 
                        variant={'outline'}
                        type="button"
                        size='sm'
                        isLoading={isLoading}
                        onClick={handleCancelUpdate}
                        mr='10'
                        >
                            Cancel
                        </Button>  
                        <Button 
                        colorScheme="green" 
                        variant={'outline'}
                        type="submit"
                        size='sm'
                        isLoading={isLoading}
                        >
                            Update
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

export default EditShopByCategoryComponent;