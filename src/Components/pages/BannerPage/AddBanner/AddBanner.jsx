import { Button, FormControl, FormLabel, Image, Input } from '@chakra-ui/react';
import axios from 'axios';
import React, { memo, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { server__image__host__url } from '../../../../app/store';

import {
    Box,
    Select
} from '@chakra-ui/react';
import AdminPageSkeleton from '../../../../FinalComponents/pages/AdminPageSkeletonComponents/AdminPageSkeleton';
import { useAddSingleBannerMutation } from '../../../../features/banner/bannerApi';
import '../../../../styles/addProduct.scss';

const AddBanner = memo(() => {
    const [product, setProduct] = useState({});

    const handleChange = (event) => { 
        const { name, value } = event.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };
    
    
    const [images, setImages] = useState([]);
    const [previewImages, setPreviewImages] = useState(JSON.parse(localStorage.getItem('banner__images')) || []);
  
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
                    localStorage.setItem('banner__images',JSON.stringify(newImagesSrcInfo)); 
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
            localStorage.setItem('banner__images',JSON.stringify([...resetPreviewImages, ...images]));
            setPreviewImages([...resetPreviewImages, ...images]);
        }else{
            toast.error('There was a server side error!',{duration: 3000})
        }
        }).catch(err => {
            toast.error(err.message,{duration: 3000})
        })
    }

    const handleDeleteUploadedImages = () => {
        let images = JSON.parse(localStorage.getItem('banner__images'))||[];
        if(images && images?.length){
            axios.delete('http://localhost:10000/api/v1/file/upload/multiple', {headers: {images: previewImages}}).then((res)=>{
            if(res.status === 200 && res.data && res.data?.status__code === 200){
                toast.success('Successfully all images deleted!',{duration: 3000})
                
                localStorage.setItem('banner__images',JSON.stringify([]));
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

    const bannerData = [
        {type: 'carousel'},
        {type: 'small'},
        {type: 'store'},
        {type: 'poster'},
        {type: 'homeBanner'},
    ]
    let [bannerType] = useState(bannerData);
    let [bannerShow] = useState([{type: 'visible'}, {type: 'invisible'}]);
    const [upNavbar, setUpNavbar] = useState(sessionStorage.getItem('up__navbar') || ''); 
    const [bannerVisibility, setBannerVisibility] = useState(sessionStorage.getItem('banner__visibility') || ''); 
    
    const handleUpNavbarChange = (value) => {
        setUpNavbar(value);
    }

    
    
    let [provideParentData,{data, isLoading, isSuccess, isError, error}] = useAddSingleBannerMutation();

    useEffect(()=>{
        if(!isLoading && !isSuccess && isError){
            toast.error('There was a server side error!',{duration: 3000, position: 'top-right'})
        }
        if(!isLoading && isSuccess && !isError){
            if(data && data?.id){
                toast.success('Successfully data inserted!',{duration: 3000, position: 'top-right'});
                localStorage.removeItem('banner__images');
                // navigate('/');
                setPreviewImages([]);
                setUpNavbar('');
                setBannerVisibility('')
                setImages([]);
                setProduct({});

                document.querySelectorAll('input').forEach((info)=>{
                    info.value='';
                })
                
            }
        }
    },[data, isLoading, isSuccess, isError, error])
    
    const handleSubmit = (e) => {
        e.preventDefault();  
        let {banner__title, banner__link, store__id:InputStoreId} = product;
        let images = JSON.parse(localStorage.getItem('banner__images')) || []; 
        let postData = {type: upNavbar, title: banner__title, link: banner__link, img__src: images[0], store__id: InputStoreId, visible: bannerVisibility};
        let {type, title, link, img__src,store__id, visible} = postData;

        if(postData && type && title && link && store__id && visible){
            if(images?.length === 0){
                toast.error('Please upload image!',{duration: 3000, position: 'top-right'})
            }else{
                if(images.length === 1 && img__src){ 
                    provideParentData(postData); 
                }else{
                    toast.error('Only one image acceptable!',{duration: 3000, position: 'top-right'})
                }
            }
        }else{
            console.log(postData);
            toast.error('Please fill up all the fields!',{duration: 3000, position: 'top-right'})
        }
    }
    
    return (
        <React.Fragment> 
            <AdminPageSkeleton>
                <h1>Hello world</h1>
            </AdminPageSkeleton>
            <div>  
                <div> 
                    <form onSubmit={handleSubmit}> 
                        {   
                            bannerType && bannerType.length &&
                            <Box 
                            >   
                                <Box
                                    
                                >
                                    <Box>
                                        <FormLabel>Select banner category</FormLabel>
                                        <Select
                                            value={upNavbar}
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
                            bannerType && bannerType.length && upNavbar &&
                            <Box 
                            >   
                                <Box
                                    
                                >
                                    <Box>
                                        <FormLabel>Select banner visibility</FormLabel>
                                        <Select
                                            value={bannerVisibility}
                                            onChange={(e) => setBannerVisibility(()=> e.target.value)}
                                            placeholder="Select section"
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
                        {product && upNavbar && 
                            <FormControl id="banner__title" isRequired>
                                <FormLabel>Enter banner title</FormLabel>
                                <Input
                                type="text"
                                name="banner__title"
                                placeholder='Enter banner title'
                                value={product.banner__title}
                                onChange={handleChange}
                                />
                            </FormControl>
                        } 
                        {product && upNavbar && product?.banner__title &&
                            <FormControl id="banner__link" isRequired>
                                <FormLabel>Enter banner link</FormLabel>
                                <Input
                                type="text"
                                name="banner__link"
                                placeholder='Paste here banner link'
                                value={product.banner__link}
                                onChange={handleChange}
                                />
                            </FormControl>
                        }
                        {product && upNavbar && product?.banner__title && product.banner__link &&
                            <FormControl id="store__id" isRequired>
                                <FormLabel>Enter store ID</FormLabel>
                                <Input
                                type="text"
                                name="store__id"
                                placeholder='Enter store id'
                                value={product.store__id}
                                onChange={handleChange}
                                />
                            </FormControl>
                        }
                        {
                            product &&  upNavbar && bannerVisibility && product.banner__title && product.banner__link && product.store__id &&
                            <FormControl id="image">
                                <FormLabel>Upload Product Image</FormLabel>
                                <Input
                                type="file"
                                name="image" 
                                onChange={handleImageUpload}
                                />
                            </FormControl>
                        }
                        <div className='register__button'>
                            <Button 
                                colorScheme="green" 
                                variant={'outline'}
                                type="submit"
                                size='sm'
                                isLoading={isLoading}
                                isDisabled={!upNavbar || !bannerVisibility || !product?.banner__title || !product?.banner__link ||!product?.store__id ||!product?.banner__title || previewImages?.length === 0 || previewImages?.length > 1}
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

export default AddBanner;


