import { Box, Button, FormControl, FormLabel, Image, Input } from '@chakra-ui/react';
import axios from 'axios';
import numberUid from 'number-uid';
import React, { memo, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { server__image__host__url } from '../../../../app/store';
import { useAddSingleBrandMutation, useGetAllBrandQuery } from '../../../../features/brand/brandApi';
import AdminPageSkeleton from '../../AdminPageSkeletonComponents/AdminPageSkeleton';
const AddBrand = memo(() => {
    const [product, setProduct] = useState({});

    const handleChange = (event) => { 
        const { name, value } = event.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };
    
    let {data: allBrands, isSuccess: allBrandIsSuccess} = useGetAllBrandQuery();
    
    const [images, setImages] = useState([]);
    const [previewImages, setPreviewImages] = useState(JSON.parse(localStorage.getItem('brand__images')) || []);
  
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
                    localStorage.setItem('brand__images',JSON.stringify(newImagesSrcInfo)); 
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
            localStorage.setItem('brand__images',JSON.stringify([...resetPreviewImages, ...images]));
            setPreviewImages([...resetPreviewImages, ...images]);
        }else{
            toast.error('There was a server side error!',{duration: 3000})
        }
        }).catch(err => {
            toast.error(err.message,{duration: 3000})
        })
    }

    const handleDeleteUploadedImages = () => {
        let images = JSON.parse(localStorage.getItem('brand__images'))||[];
        if(images && images?.length){
            axios.delete('http://localhost:10000/api/v1/file/upload/multiple', {headers: {images: previewImages}}).then((res)=>{
            if(res.status === 200 && res.data && res.data?.status__code === 200){
                toast.success('Successfully all images deleted!',{duration: 3000})
                
                localStorage.setItem('brand__images',JSON.stringify([]));
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

    const [provideBrandInfo,{data, isLoading, isError, isSuccess, error}] = useAddSingleBrandMutation();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        let {brand} = product;
        let images = JSON.parse(localStorage.getItem('brand__images'));
        if(images?.length > 0){
            if(brand && images?.length === 1){
                let uid = numberUid(8);
                let src = images[0];
                let brandInfo = {
                    brand, src, uid
                }; 
                if(allBrandIsSuccess && allBrands && allBrands?.length > 0){
                    let currentItem = allBrands.filter((info)=> info.brand.toLowerCase() === brandInfo.brand.toLowerCase());
                    if(currentItem.length === 0){
                        provideBrandInfo(brandInfo);
                    }else{
                        toast.error('This brand already existed!',{duration: 3000})
                    }
                }else{
                    toast.error('There was a server side error!',{duration: 3000})
                }
            }else{
                toast.error('Only one image acceptable',{duration: 3000})
            }
        }else{
            toast.error('Please upload an image!',{duration: 3000})
        }
    }
    const navigate = useNavigate();
    useEffect(()=>{
        if(!isLoading && isError && !isSuccess){
            toast.error('There was a server side error!',{duration: 3000, position: 'top-right'})
        }
        if(!isError && !isLoading && isSuccess){
            if(data?.status__code === 200){
                toast.success(data?.message,{duration: 3000, position: 'top-right'});
                localStorage.setItem('brand__images',JSON.stringify([]));
                setProduct({});
                setPreviewImages([]);
                setImages([]); 
            }
        }
    },[data, isLoading, isError, isSuccess, error, navigate])

    return ( 
        <AdminPageSkeleton>
            <div> 
                <form onSubmit={handleSubmit}> 
                    <Box className='data__view__form'>
                        <FormControl id="brand" isRequired>
                            <FormLabel>Brand Name</FormLabel>
                            <Input
                                size={'sm'}
                                type="text"
                                name="brand"
                                placeholder='Enter brand name...'
                                value={product.brand}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="image">
                            <FormLabel>Upload Brand Image</FormLabel>
                            <Input
                                size={'sm'} 
                                type="file"
                                name="image" 
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
                        isLoading={isLoading}
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
                                    onClick={handleDeleteMarkImages}
                                    variant="outline"
                                    colorScheme="orange" 
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
                                    onClick={handleDeleteUploadedImages}
                                    variant="outline"
                                    colorScheme="orange" 
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
                                        onClick={handleUploadAllImages}
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

export default AddBrand;