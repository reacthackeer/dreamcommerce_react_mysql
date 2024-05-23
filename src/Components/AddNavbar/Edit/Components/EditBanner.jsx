import { Box, Button, FormControl, FormLabel, Image, Input, Select, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { memo, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { server__image__host__url } from '../../../../app/store';
import { useUpdateSingleBannerMutation } from '../../../../features/banner/bannerApi';
import DynamicHeader from '../../DynamicHeader';
import DynamicTabBanner from '../../DynamicTabBanner';

const EditBannerComponent = memo(({setSelected}) => {
    
    
    const [images, setImages] = useState([]);
    const [previewImages, setPreviewImages] = useState(JSON.parse(localStorage.getItem('edit__banner__images')) || []);
  
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
                    localStorage.setItem('edit__banner__images',JSON.stringify(newImagesSrcInfo)); 
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
            localStorage.setItem('edit__banner__images',JSON.stringify([...resetPreviewImages, ...images]));
            setPreviewImages([...resetPreviewImages, ...images]);
        }else{
            toast.error('There was a server side error!',{duration: 3000})
        }
        }).catch(err => {
            toast.error(err.message,{duration: 3000})
        })
    }

    const handleDeleteUploadedImages = () => {
        let images = JSON.parse(localStorage.getItem('edit__banner__images'))||[];
        if(images && images?.length){
            axios.delete('http://localhost:10000/api/v1/file/upload/multiple', {headers: {images: previewImages}}).then((res)=>{
            if(res.status === 200 && res.data && res.data?.status__code === 200){
                toast.success('Successfully all images deleted!',{duration: 3000})
                
                localStorage.setItem('edit__banner__images',JSON.stringify([]));
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
    
    const [provideBrandInfo,{isLoading, isSuccess, isError, data}] = useUpdateSingleBannerMutation();

    const [title, setTitle] = useState(localStorage.getItem('edit__banner__title') || ''); 
    const [link, setLink] = useState(localStorage.getItem('edit__banner__link') || '');
    const [storeId, setStoreId] = useState(localStorage.getItem('edit__banner__store__id') || '');
    const [type, setType] = useState(localStorage.getItem('edit__banner__type') || '');
    const [visible, setVisible] = useState(localStorage.getItem('edit__banner__visible') || '');


    const handleSubmit = (e) => {
        e.preventDefault(); 
        let images = JSON.parse(localStorage.getItem('edit__banner__images'));
        let ID = Number(localStorage.getItem('edit__banner__id')); 
        if(images && images?.length > 0){
            if(images?.length > 1){
                toast.error('Only one image acceptable!',{duration: 3000});
            }else{
                if(title && ID && link && storeId && type && visible && images?.length === 1){
                    let postData = {id: ID, img__src: images[0], title, link, store__id: storeId, type, visible};
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
            setTitle('');
            setLink("")
            setStoreId("")
            setType("")
            setVisible("")
            setImages([]);
            setPreviewImages([]); 
            localStorage.removeItem('edit__banner__images');
            localStorage.removeItem('edit__banner__title');
            localStorage.removeItem('edit__banner__id');
            localStorage.removeItem('edit__banner__link');
            localStorage.removeItem('edit__banner__store__id');
            localStorage.removeItem('edit__banner__type');
            localStorage.removeItem('edit__banner__visible');
            setSelected(false);
        }
    },[isLoading, isSuccess, isError, data,setSelected])

    const handleCancelUpdate = () => {
        localStorage.removeItem('edit__banner__images');
        localStorage.removeItem('edit__banner__title');
        localStorage.removeItem('edit__banner__id');
        localStorage.removeItem('edit__banner__link');
        localStorage.removeItem('edit__banner__store__id');
        localStorage.removeItem('edit__banner__type');
        localStorage.removeItem('edit__banner__visible');
        setSelected(false);
    }

    const bannerData = [
        {type: 'carousel'},
        {type: 'small'},
        {type: 'store'},
        {type: 'poster'},
        {type: 'homeBanner'},
    ] 
    let [bannerType] = useState(bannerData);
    let [bannerShow] = useState([{type: 'visible'}, {type: 'invisible'}]);

    const handleUpNavbarChange = (value) => {
        setType(value);
    }
    
    return (
        <React.Fragment>
            <DynamicHeader message={'Edit Banner'}/>
            <DynamicTabBanner/>
            <div className='main__category__product__view__upper__container bg__1'>  
            <div className='padding__top padding__bottom'>
            <Text fontSize={'2xl'} paddingBottom={'30px'}>Banner Basic Information</Text>
                <form onSubmit={handleSubmit} className='form__item__view__main__container'> 
                {   
                    bannerType && bannerType.length &&
                    <Box 
                    >   
                        <Box
                            
                        >
                            <Box>
                                <FormLabel>Select banner category</FormLabel>
                                <Select
                                    value={type}
                                    onChange={(e) => handleUpNavbarChange(e.target.value)}
                                    placeholder="Select section"
                                    isRequired={true}
                                > 
                                    {
                                        bannerType.map((info, index)=> <option key={index} value={info.type}>{info.type}</option>)
                                    }
                                </Select>  
                            </Box> 
                        </Box>
                    </Box> 
                }                         {   
                    bannerType && bannerType.length && type &&
                    <Box 
                    >   
                        <Box
                            
                        >
                            <Box>
                                <FormLabel>Select banner visibility</FormLabel>
                                <Select
                                    value={visible}
                                    onChange={(e) => setVisible(()=> e.target.value)}
                                    placeholder="Select visible"
                                    isRequired={true}
                                > 
                                    {
                                        bannerShow.map((info, index)=> <option key={index} value={info.type}>{info.type}</option>)
                                    }
                                </Select>  
                            </Box> 
                        </Box>
                    </Box> 
                } 
                {type && visible && 
                    <FormControl id="banner__title" isRequired>
                        <FormLabel>Enter banner title</FormLabel>
                        <Input
                        type="text"
                        name="banner__title"
                        placeholder='Enter banner title'
                        value={title}
                        onChange={(e)=> setTitle(()=> e.target.value)}
                        />
                    </FormControl>
                } 
                {type && visible && title &&
                    <FormControl id="banner__link" isRequired>
                        <FormLabel>Enter banner link</FormLabel>
                        <Input
                        type="text"
                        name="banner__link"
                        placeholder='Paste here banner link'
                        value={link}
                        onChange={(e)=> setLink(()=> e.target.value)}
                        />
                    </FormControl>
                }
                { type && visible && title && link &&
                    <FormControl id="store__id" isRequired>
                        <FormLabel>Enter store ID</FormLabel>
                        <Input
                            type="text"
                            name="store__id"
                            placeholder='Enter store id'
                            value={storeId}
                            onChange={(e)=> setStoreId(()=> e.target.value)}
                        />
                    </FormControl>
                }
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

export default EditBannerComponent;