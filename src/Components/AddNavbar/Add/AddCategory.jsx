import { Button, FormControl, FormLabel, Image, Input, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { memo, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { server__image__host__url } from '../../../app/store';
 
import {
    Box,
    Select
} from '@chakra-ui/react';
import numberUid from 'number-uid';
import { useGetAllParentFatherNavbarQuery, useGetAllParentNavbarQuery, useGetAllUpNavbarQuery } from '../../../features/brand/brandApi';
import { useAddParentMutation } from '../../../features/getAll/api';
import '../../../styles/addProduct.scss';
import DynamicHeader from '../DynamicHeader';
import DynamicTab from '../DynamicTab';
const AddCategory = memo(() => {
    const [product, setProduct] = useState({});

    const handleChange = (event) => { 
        const { name, value } = event.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };
    
    
    const [images, setImages] = useState([]);
    const [previewImages, setPreviewImages] = useState(JSON.parse(localStorage.getItem('category__images')) || []);
  
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
                    localStorage.setItem('category__images',JSON.stringify(newImagesSrcInfo)); 
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
            localStorage.setItem('category__images',JSON.stringify([...resetPreviewImages, ...images]));
            setPreviewImages([...resetPreviewImages, ...images]);
        }else{
            toast.error('There was a server side error!',{duration: 3000})
        }
        }).catch(err => {
            toast.error(err.message,{duration: 3000})
        })
    }

    const handleDeleteUploadedImages = () => {
        let images = JSON.parse(localStorage.getItem('category__images'))||[];
        if(images && images?.length){
            axios.delete('http://localhost:10000/api/v1/file/upload/multiple', {headers: {images: previewImages}}).then((res)=>{
            if(res.status === 200 && res.data && res.data?.status__code === 200){
                toast.success('Successfully all images deleted!',{duration: 3000})
                
                localStorage.setItem('category__images',JSON.stringify([]));
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
    
    const [topCategory, setTopCategory] = useState(sessionStorage.getItem('top__category') || ''); 
    
    const handleTopCategoryChange = (value) => {
        setTopCategory(value);
    } 
    // top category end
    // category start
    let {data: categoryData} = useGetAllParentNavbarQuery({parent__father: topCategory, up: upNavbar});
    
    let [provideParentData,{data, isLoading, isSuccess, isError, error}] = useAddParentMutation();

    useEffect(()=>{
        if(!isLoading && !isSuccess && isError){
            toast.error('There was a server side error!',{duration: 3000, position: 'top-right'})
        }
        if(!isLoading && isSuccess && !isError){
            if(data && data?.status__code === 201){
                toast.success(data.message,{duration: 3000, position: 'top-right'});
                localStorage.removeItem('category__images');
                setPreviewImages([]);
                setImages([]);
                setUpNavbar('');
                setTopCategory('');
                document.querySelectorAll('input').forEach((info)=>{
                    info.value=''
                })
            }
        }
    },[data, isLoading, isSuccess, isError, error, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();  
        let {category} = product;
        let images = JSON.parse(localStorage.getItem('category__images')) || [];
        let uid = numberUid(8);
        let postData = {name: category, up: upNavbar, parent__father: topCategory, src: images[images.length - 1], uid}
        
        if(postData && postData.name && postData.up && postData.parent__father && postData.uid){
            if(images?.length === 0){
                toast.error('Please upload image!',{duration: 3000, position: 'top-right'})
            }else{
                if(images.length === 1){ 
                    let items = categoryData?.items?.filter((info)=> info.name.toLowerCase() === postData.name.toLowerCase()) || [];
                        if(items.length > 0){
                            toast.error('This category already existed!',{duration: 3000, position: 'top-right'})
                        }else{ 
                            provideParentData(postData);
                        }
                }else{
                    toast.error('Only one image acceptable!',{duration: 3000, position: 'top-right'})
                }
            }
        }else{
            toast.error('Please fill up all the fields!',{duration: 3000, position: 'top-right'})
        }
    }
    
    return (
        <React.Fragment>
            <DynamicHeader message={'Add Category'}/>
            <DynamicTab/>
            <div className='main__category__product__view__upper__container bg__1'>  
                <div className='padding__top padding__bottom'>
                <Text fontSize={'2xl'} paddingBottom={'30px'}>Category Basic Information</Text>
                    <form onSubmit={handleSubmit} className='form__item__view__main__container'> 
                        {   
                            upNavbarData && upNavbarData?.status__code === 200 && upNavbarData?.items?.length > 0 &&
                            <Box 
                            >   
                                <Box
                                       
                                >
                                    <Box>
                                        <FormLabel>Section</FormLabel>
                                        <Select
                                            value={upNavbar}
                                            onChange={(e) => handleUpNavbarChange(e.target.value)}
                                            placeholder="Select section"
                                            isRequired={true}
                                        > 
                                            {
                                                upNavbarData.items.map((info, index)=> <option key={index} value={info.name}>{info.name}</option>)
                                            }
                                        </Select>  
                                    </Box> 
                                </Box>
                            </Box> 
                        }
                        {   
                            topCategoryData && upNavbar && topCategoryData?.status__code === 200 && topCategoryData?.items?.length > 0 &&
                            <Box 

                            >   
                                <Box
                                       
                                >
                                    <Box>
                                        <FormLabel>Top Category</FormLabel>
                                        <Select
                                            value={topCategory}
                                            onChange={(e) => handleTopCategoryChange(e.target.value)}
                                            placeholder="Select section"
                                            isRequired
                                        > 
                                            {
                                                topCategoryData.items.map((info, index)=> <option key={index} value={info.name}>{info.name}</option>)
                                            }
                                        </Select>  
                                    </Box> 
                                </Box>
                            </Box> 
                        } 
                        {product && topCategory && 
                            <FormControl id="category" isRequired>
                                <FormLabel>Category Name</FormLabel>
                                <Input
                                type="text"
                                name="category"
                                value={product.category}
                                onChange={handleChange}
                                />
                            </FormControl>
                        }
                        {
                            product &&  topCategory &&
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
                                isDisabled={!product?.category || previewImages?.length === 0 || previewImages?.length > 1}
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

export default AddCategory;