import { Box, Button, FormControl, FormLabel, Heading, Textarea } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAddSingleArrayProductMutation } from '../../../../../features/product/productApi';
import AdminPageSkeleton from '../../../AdminPageSkeletonComponents/AdminPageSkeleton';

const AddMultipleProduct = () => {
    const [productsArray, setProductsArray] = useState(''); 
    const [insertStarted, setInsertStarted] = useState(false);
    const [provideProductInfo,{data, isLoading, isError, isSuccess, error}] = useAddSingleArrayProductMutation();
    const handleSubmit = (e) => {
        e.preventDefault();
        let multipleProductsArray = JSON.parse(productsArray);
        if(multipleProductsArray && multipleProductsArray.length && multipleProductsArray.length > 1){
            let currentProduct = multipleProductsArray[0];
                currentProduct = {...currentProduct, ...currentProduct.infos}
            let resetProducts = multipleProductsArray.slice(1, multipleProductsArray.length);
            provideProductInfo({product: currentProduct, resetProducts})
            setInsertStarted(()=> true)
        }else{
            toast.error('Please paste here multiple products!',{position: 'top-right'})
        }
    } 
    const navigate = useNavigate();
    useEffect(()=>{
        if(isError && !isSuccess){
            toast.error('There was a server side error!',{duration: '3000'})
            console.log(error);
        }

        if(!isError && isSuccess && data && data?.status__code === 201){
            let resetProducts = data.resetProducts;
            document.getElementById('insertProductQuantity').innerText = resetProducts.length
            if(data.resetProducts.length){
                let currentProduct = resetProducts[0];
                    currentProduct = {...currentProduct, ...currentProduct.infos}
                let newResetProducts = resetProducts.slice(1, resetProducts.length);
                provideProductInfo({product: currentProduct, resetProducts: newResetProducts})
            }else{
                toast.success('Successfully all product added!',{position: 'top-right'})
            }
        }
    },[data, isLoading, isError, isSuccess, error, navigate, provideProductInfo])


    return (
        <AdminPageSkeleton>
            <form onSubmit={handleSubmit}>
                <Box className='data__view__form'>
                    <FormControl>
                        <FormLabel>Paste here products array</FormLabel>
                        <Textarea
                            placeholder='Paste here products array'
                            onChange={(e)=> setProductsArray(()=> e.target.value)}
                        ></Textarea>
                    </FormControl>
                    <Heading opacity={insertStarted ? '1' : '0'}>Wait for insert <span id='insertProductQuantity'></span></Heading>
                </Box>
                <Box className='data__form__submit__button'>
                    <Button type='submit'>Validate And Submit</Button>
                </Box>
            </form>
        </AdminPageSkeleton>
    );
};

export default AddMultipleProduct;
