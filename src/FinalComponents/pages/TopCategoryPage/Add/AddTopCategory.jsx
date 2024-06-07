import { Button, FormControl, FormLabel, Image, Input } from '@chakra-ui/react';
import axios from 'axios';
import React, { memo, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { server__image__host__url } from '../../../../app/store';
 
import {
    Box,
    Select
} from '@chakra-ui/react';
import { debounce } from 'lodash';
import numberUid from 'number-uid';
import { useGetAllParentFatherNavbarQuery, useGetAllUpNavbarQuery } from '../../../../features/brand/brandApi';
import { useAddParentFatherMutation } from '../../../../features/getAll/api';
import '../../../../styles/addProduct.scss';
import AdminPageSkeleton from '../../AdminPageSkeletonComponents/AdminPageSkeleton';

const AddTopCategory = memo(() => {
    const [product, setProduct] = useState({});

    const handleChange = (event) => { 
        const { name, value } = event.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };
    
    const [images, setImages] = useState([]);
    const [previewImages, setPreviewImages] = useState(JSON.parse(localStorage.getItem('top__category__images')) || []);

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
                    localStorage.setItem('top__category__images',JSON.stringify(newImagesSrcInfo)); 
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
            localStorage.setItem('top__category__images',JSON.stringify([...resetPreviewImages, ...images]));
            setPreviewImages([...resetPreviewImages, ...images]);
        }else{
            toast.error('There was a server side error!',{duration: 3000})
        }
        }).catch(err => {
            toast.error(err.message,{duration: 3000})
        })
    }

    const handleDeleteUploadedImages = () => {
        let images = JSON.parse(localStorage.getItem('top__category__images'))||[];
        if(images && images?.length){
            setDeleteUploadedIsLoading(()=> true)
            axios.delete('http://localhost:10000/api/v1/file/upload/multiple', {headers: {images: previewImages}}).then((res)=>{
                setDeleteUploadedIsLoading(()=> false);
                setDeleteUploadedImageDebounceLoading(()=> false);
            if(res.status === 200 && res.data && res.data?.status__code === 200){
                toast.success('Successfully all images deleted!',{duration: 3000})
                
                localStorage.setItem('top__category__images',JSON.stringify([]));
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

    const navigate = useNavigate();
    
    // section navbar start
    let { data : upNavbarData } = useGetAllUpNavbarQuery();
    const [upNavbar, setUpNavbar] = useState(sessionStorage.getItem('up__navbar') || ''); 
    
    const handleUpNavbarChange = (value) => {
        setUpNavbar(value);
    }

    // top category start
    let {data: topCategoryData} = useGetAllParentFatherNavbarQuery(upNavbar);

    let [provideParentData,{data, isLoading, isSuccess, isError, error}] = useAddParentFatherMutation();

    useEffect(()=>{
        if(!isLoading && !isSuccess && isError){
            setAddDebounceLoading(()=> false);
            toast.error('There was a server side error!',{duration: 3000, position: 'top-right'})
        }
        if(!isLoading && isSuccess && !isError){
            setAddDebounceLoading(()=> false);
            if(data && data?.status__code === 201){
                toast.success(data.message,{duration: 3000, position: 'top-right'});
                localStorage.removeItem('top__category__images');
                // navigate('/');
                setPreviewImages([]);
                setUpNavbar('');
                setImages([]);
                document.querySelectorAll('input').forEach((info)=>{
                    info.value='';
                })
                
            }
        }
    },[data, isLoading, isSuccess, isError, error, navigate])
    
    const handleSubmit = (e) => {
        e.preventDefault();  
        let {top__category} = product;
        let images = JSON.parse(localStorage.getItem('top__category__images')) || [];
        let uid = numberUid(8);
        let postData = {name: top__category, up: upNavbar, src: images[images.length - 1], uid}
        
        if(postData && postData.name && postData.up  && postData.uid){
            if(images?.length === 0){
                toast.error('Please upload image!',{duration: 3000, position: 'top-right'})
            }else{
                if(images.length === 1){ 
                    let items = topCategoryData?.items?.filter((info)=> info.name.toLowerCase() === postData.name.toLowerCase()) || [];
                        if(items?.length > 0){
                            setAddDebounceLoading(()=> false);
                            toast.error('This category already existed!',{duration: 3000, position: 'top-right'})
                        }else{ 
                            provideParentData(postData); 
                        }
                }else{
                    setAddDebounceLoading(()=> false);
                    toast.error('Only one image acceptable!',{duration: 3000, position: 'top-right'})
                }
            }
        }else{
            setAddDebounceLoading(()=> false);
            toast.error('Please fill up all the fields!',{duration: 3000, position: 'top-right'})
        }
    }

    
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
                        {   
                            upNavbarData && upNavbarData?.status__code === 200 && upNavbarData?.items?.length > 0 &&
                                <FormControl>
                                    <FormLabel>Section</FormLabel>
                                    <Select
                                        value={upNavbar}
                                        size='sm'
                                        onChange={(e) => handleUpNavbarChange(e.target.value)}
                                        placeholder="Select section"
                                        isRequired={true}
                                    > 
                                        {
                                            upNavbarData.items.map((info, index)=> <option key={index} value={info.name}>{info.name}</option>)
                                        }
                                    </Select>  
                                </FormControl>  
                        } 
                        {product && upNavbar && 
                            <FormControl id="top__category" isRequired>
                                <FormLabel>Top Category Name</FormLabel>
                                <Input
                                type="text"
                                size='sm'
                                name="top__category"
                                value={product.top__category}
                                onChange={handleChange}
                                />
                            </FormControl>
                        }
                        {
                            product &&  upNavbar &&
                            <FormControl id="image">
                                <FormLabel>Upload Product Image</FormLabel>
                                <Input
                                type="file"
                                size='sm'
                                name="image" 
                                onChange={handleImageUpload}
                                />
                            </FormControl>
                        }
                    </Box>
                    <div className='data__form__submit__button'>
                        <Button 
                            colorScheme="green" 
                            variant={'outline'}
                            type="submit"
                            size='sm'
                            isLoading={isLoading || addDebounceLoading}
                            isDisabled={!product?.top__category || previewImages?.length === 0 || previewImages?.length > 1}
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

export default AddTopCategory;