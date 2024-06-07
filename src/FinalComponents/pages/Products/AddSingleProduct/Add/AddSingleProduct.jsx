import { Box, Button, FormControl, FormLabel, Textarea } from '@chakra-ui/react';
import { debounce } from 'lodash';
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
            try {
                let objectProductResult = JSON.parse(productsArray); 
                if(objectProductResult && objectProductResult.visible__url){
                    delete objectProductResult.ID;
                    let product = {...objectProductResult, ...objectProductResult.infos}
                    localStorage.setItem('visible__url', product.visible__url);
                    provideProductInfo(product);
                }else{
                    setAddDebounceLoading(()=> false);
                } 
            } catch (error) {
                setAddDebounceLoading(()=> false);
            }

    }
    useEffect(()=>{
        if(isError && !isSuccess){
            setAddDebounceLoading(()=> false);
            toast.error('There was a server side error!',{duration: '3000'})
        }

        if(!isError && isSuccess && data && data?.status__code === 201){
            setAddDebounceLoading(()=> false);
                toast.success('Successfully new product added'); 
                setTimeout(() => {
                    navigate(`/${localStorage.getItem('visible__url')}/${data.result.insertId}`)
                    localStorage.removeItem('visible__url');
                },1000); 
        }
    },[data, isLoading, isError, isSuccess, error, navigate])

    const [addDebounceLoading, setAddDebounceLoading] = useState(false);
    const handleSubmitDebounceFunction = debounce(handleSubmit, 1000);

    const handleStartSubmit = (e) => {
        e.preventDefault();
        setAddDebounceLoading(()=> true);
        handleSubmitDebounceFunction(e);
    }


    return (
        <AdminPageSkeleton>
            <form onSubmit={handleStartSubmit}>
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
                    <Button 
                        type='submit'
                        isLoading={isLoading || addDebounceLoading}
                    >Validate And Submit</Button>
                </Box>
            </form>
        </AdminPageSkeleton>
    );
};

export default AddSingleObjectProduct;