import { Box, Button, FormControl, FormLabel, Textarea } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAddSingleProductMutation } from '../../../../../features/product/productApi';
import AdminPageSkeleton from '../../../AdminPageSkeletonComponents/AdminPageSkeleton';

const AddSingleObjectProduct = () => {
    const navigate = useNavigate();
    const [productsArray, setProductsArray] = useState('');
    const [provideProductInfo,{data, isLoading, isError, isSuccess, error}] = useAddSingleProductMutation();
    const handleSubmit = (e) => {
        e.preventDefault();
        let objectProductResult = JSON.parse(productsArray);

        if(objectProductResult && objectProductResult.visible__url){
            delete objectProductResult.ID;
            let product = {...objectProductResult, ...objectProductResult.infos}
            localStorage.setItem('visible__url', product.visible__url);
            provideProductInfo(product);
        }
    }
    useEffect(()=>{
        if(isError && !isSuccess){
            toast.error('There was a server side error!',{duration: '3000'})
        }

        if(!isError && isSuccess && data && data?.status__code === 201){
                toast.success('Successfully new product added'); 
                setTimeout(() => {
                    navigate(`/${localStorage.getItem('visible__url')}/${data.result.insertId}`)
                    localStorage.removeItem('visible__url');
                },1000); 
        }
    },[data, isLoading, isError, isSuccess, error, navigate])
    return (
        <AdminPageSkeleton>
            <form onSubmit={handleSubmit}>
                <Box className='data__view__form'>
                    <FormControl>
                        <FormLabel>Paste here products object</FormLabel>
                        <Textarea
                            placeholder='Paste here products array'
                            onChange={(e)=> setProductsArray(()=> e.target.value)}
                        ></Textarea>
                    </FormControl>
                </Box>
                <Box className='data__form__submit__button'>
                    <Button type='submit'>Validate And Submit</Button>
                </Box>
            </form>
        </AdminPageSkeleton>
    );
};

export default AddSingleObjectProduct;