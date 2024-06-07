import { Box, Button, FormControl, FormLabel, Image, Input } from '@chakra-ui/react';
import axios from 'axios';
import React, { memo, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { server__image__host__url } from '../../../../app/store';

import { debounce } from 'lodash';
import { useAddSingleStoreInformationMutation, useGetSingleStoreInformationQuery } from '../../../../features/ShippingAndSystem/shippingAndSystemApi';
import AdminPageSkeleton from '../../AdminPageSkeletonComponents/AdminPageSkeleton';
const EditStoreInformation = memo(() => {

    const [product, setProduct] = useState({});
    
    const handleChange = (event) => { 
        const { name, value } = event.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };
    
    
    
    const [images, setImages] = useState([]);
    const [previewImages, setPreviewImages] = useState(JSON.parse(localStorage.getItem('store__images')) || []);
  
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
                setDeleteMarkImageIsLoading(()=> true);
                axios.delete('http://localhost:10000/api/v1/file/upload/multiple', {headers: {images}}).then((res)=>{
                    setDeleteMarkImageIsLoading(()=> false);
                    setDeleteMarkImageDebounceLoading(()=> false);
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
                    localStorage.setItem('store__images',JSON.stringify(newImagesSrcInfo)); 
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
        setUploadIsLoading(()=> true);
        axios.post('http://localhost:10000/api/v1/file/upload/multiple',formData,{headers: {'Content-Type': 'multipart/form-data'}}).then((res)=>{
            setUploadIsLoading(()=> false);
            setUploadImageDebounceLoading(()=> false);
        if(res.status === 200 && res.data && res.data?.status__code === 200){
            toast.success('Successfully all images uploaded!',{duration: 3000})

            let images = res.data.images;
            let resetPreviewImages = previewImages.filter((info)=> info.indexOf('/images') !== -1);
            setImages([])
            localStorage.setItem('store__images',JSON.stringify([...resetPreviewImages, ...images]));
            setPreviewImages([...resetPreviewImages, ...images]);
        }else{
            toast.error('There was a server side error!',{duration: 3000})
        }
        }).catch(err => {
            toast.error(err.message,{duration: 3000})
        })
    }

    const handleDeleteUploadedImages = () => {
        let images = JSON.parse(localStorage.getItem('store__images'))||[];
        if(images && images?.length){
            setDeleteUploadedIsLoading(()=> true)
            axios.delete('http://localhost:10000/api/v1/file/upload/multiple', {headers: {images: previewImages}}).then((res)=>{
                setDeleteUploadedIsLoading(()=> false);
                setDeleteUploadedImageDebounceLoading(()=> false);
            if(res.status === 200 && res.data && res.data?.status__code === 200){
                toast.success('Successfully all images deleted!',{duration: 3000})
                
                localStorage.setItem('store__images',JSON.stringify([]));
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
    const {data, isLoading, isSuccess, isError,error} = useGetSingleStoreInformationQuery();
    const  [provideStoreInfo, {isSuccess: storeAddIsSuccess, isLoading: storeAddIsLoading, isError: storeAddIsError}]= useAddSingleStoreInformationMutation();


    useEffect(()=> {
        if(!storeAddIsError && !storeAddIsLoading && storeAddIsSuccess){
            document.querySelectorAll('input').forEach((info)=> {
                info.value=''
            })
            setAddDebounceLoading(()=> false);
        }else{
            setAddDebounceLoading(()=> false);
        }
    },[storeAddIsError, storeAddIsLoading, storeAddIsSuccess])
    const handleSubmit = (e) => {
        e.preventDefault();  
        const img__src__array = JSON.parse(localStorage.getItem('store__images')) || []; 
        if(img__src__array && img__src__array[0] && img__src__array.length > 1){
            toast.error('Only one image acceptable!',{position: 'top-right'})
            setAddDebounceLoading(()=> false);
        }else{
            let postInfo = {...product, img__src: img__src__array[0]};
            let {store__name, store__email, store__id, img__src} = postInfo;
            if(store__name && store__email && store__id && img__src){
                provideStoreInfo(postInfo);
            }else{
                toast.error('Invalid post requested!',{position: 'top-right'})
                setAddDebounceLoading(()=> false);
            }
        }

    } 

    useEffect(()=>{
        if(!isError && !isLoading && isSuccess){
            if(data && data?.store__name){
                setProduct(()=> data);
            }
        }
    },[data, isLoading, isError, isSuccess, error])
    
    const [uploadImageDebounceLoading, setUploadImageDebounceLoading] = useState(false);
    const [uploadIsLoading, setUploadIsLoading] = useState(false);
    const uploadImageDebounceFunction = debounce(handleUploadAllImages, 1000);
    const handleStartUploadAllImages = () => {
        setUploadImageDebounceLoading(()=> true);
        uploadImageDebounceFunction();
    }

    const [deleteUploadedImageDebounceLoading, setDeleteUploadedImageDebounceLoading] = useState(false);
    const [deleteUploadedIsLoading, setDeleteUploadedIsLoading] = useState(false);
    const deleteUploadedImageDebounceFunction = debounce(handleDeleteUploadedImages, 1000);
    const handleStartDeleteUploadedImages = () => {
        setDeleteUploadedImageDebounceLoading(()=> true);
        deleteUploadedImageDebounceFunction();
    }

    const [deleteMarkImageDebounceLoading, setDeleteMarkImageDebounceLoading] = useState(false);
    const [deleteMarkImageIsLoading, setDeleteMarkImageIsLoading] = useState(false);
    const deleteMarkImageDebounceFunction = debounce(handleDeleteMarkImages, 1000);
    const handleStartDeleteMarkImages = () => {
        setDeleteMarkImageDebounceLoading(()=> true);
        deleteMarkImageDebounceFunction();
    }

    const [addDebounceLoading, setAddDebounceLoading] = useState(false);
    const handleSubmitDebounceFunction = debounce(handleSubmit, 1000);

    const handleStartSubmit = (e) => {
        e.preventDefault();
        setAddDebounceLoading(()=> true);
        handleSubmitDebounceFunction(e); 
    }


    
    return ( 
        <AdminPageSkeleton>  
            <div> 
                <form onSubmit={handleStartSubmit}> 
                    <Box className='data__view__form'>
                        <FormControl id="store__name" isRequired>
                            <FormLabel>Store Name</FormLabel>
                            <Input
                                size='sm'
                                type="text"
                                placeholder='Enter store name'
                                name="store__name"
                                value={product.store__name}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="store__email" isRequired>
                            <FormLabel>Store Email</FormLabel>
                            <Input
                                size='sm'
                                type='email'
                                placeholder='Enter store email'
                                name="store__email"
                                value={product.store__email}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="store__id" isRequired>
                            <FormLabel>Store ID</FormLabel>
                            <Input
                                size='sm'
                                type='text'
                                placeholder='Enter store id'
                                name="store__id"
                                value={product.store__id}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="image">
                            <FormLabel>Upload Store Logo</FormLabel>
                            <Input
                                size='sm'
                                type="file"
                                name="img__src__array" 
                                onChange={handleImageUpload}
                            />
                        </FormControl> 
                    </Box>

                    <div className='data__form__submit__button'>
                        <Button 
                        colorScheme="green" 
                        variant={'outline'}
                        type="submit"
                        size='sm'
                        isLoading={isLoading || addDebounceLoading}
                        >
                            Save
                        </Button>  
                    </div>
                </form>
                {newPreviewImages.length > 0 && (
                    <div className='padding__bottom data__view__image__action__button'>
                        <Box className='action__button__container'>
                            {
                                selectedImage.length !== 0 && 
                                <Button 
                                    size='sm' 
                                    onClick={handleStartDeleteMarkImages}
                                    variant="outline"
                                    colorScheme="orange" 
                                    isLoading={deleteMarkImageIsLoading || deleteMarkImageDebounceLoading}
                                    mr='20px'
                                    isDisabled={selectedImage.length === 0}
                                >
                                    Delete Marked Images
                                </Button>
                            }
                            {
                                newPreviewImages[newPreviewImages.length-1].indexOf('/images') !== -1 &&
                                <Button 
                                    size='sm' 
                                    onClick={handleStartDeleteUploadedImages}
                                    variant="outline"
                                    colorScheme="orange" 
                                    isLoading={deleteUploadedImageDebounceLoading || deleteUploadedIsLoading}
                                    mr={'20px'}
                                    isDisabled={newPreviewImages[newPreviewImages.length-1].indexOf('/images') === -1}
                                >
                                    Delete Uploaded Images
                                </Button>
                            }
                            {   
                                newPreviewImages[newPreviewImages.length-1].indexOf('/images') === -1 &&
                                    <Button 
                                        size='sm'  
                                        onClick={handleStartUploadAllImages}
                                        isLoading={uploadImageDebounceLoading || uploadIsLoading}
                                        variant={'outline'}
                                        colorScheme='green'
                                        isDisabled={newPreviewImages[newPreviewImages.length-1].indexOf('/images') !== -1}
                                    >
                                        Upload Images
                                    </Button>
                            }
                        </Box>
                    </div>
                )}
                <div className='data__view__image__preview'>
                    {newPreviewImages.map((url, index) => (
                        <Image  className={`preview__image__${index} preview__image`} onClick={()=> handleMarkImage(`preview__image__${index}`, url)}  key={index} src={url.indexOf('/images') !== -1 ? server__image__host__url+url: url} alt={`Preview Image ${index + 1}`} />
                    ))}
                </div> 
            </div> 
        </AdminPageSkeleton>
    );
});

export default EditStoreInformation;