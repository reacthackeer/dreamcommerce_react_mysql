import { Box, Button } from '@chakra-ui/react';
import React, { memo, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useUpdateSingleProductMutation } from '../../../features/product/productApi';

const PreviewAndSave = memo(() => {
    const navigate = useNavigate();
    const [provideProductInfo, {data, isLoading, isError, isSuccess, error}] = useUpdateSingleProductMutation();
    const handlePostProduct = () => { 
        let product = JSON.parse(sessionStorage.getItem('product'))||{};
        let images = JSON.parse(sessionStorage.getItem('images'))||[];
        let overviews = JSON.parse(sessionStorage.getItem('overviews'))||[];
        let details = JSON.parse(sessionStorage.getItem('details'))||[];
        let specifications = JSON.parse(sessionStorage.getItem('specifications'))||[]; 
        
        if(product && product && images && images?.length > 0 && overviews && overviews?.length > 0  && details && details?.length > 0  && specifications && specifications?.length > 0  ){   
            product.title= product.brand+' '+product.title;
            product.visible__url= product.title.replace(/ /g, '-').toLowerCase();
            product.visible__url= product.visible__url.replace(/\//g, '-');
            let productProductInfo = {...product, images, overviews, details, specifications};
            sessionStorage.setItem('redirect__url',`/${productProductInfo.visible__url}/${productProductInfo.ID}`)
            provideProductInfo(productProductInfo); 
        }
    }

    
    useEffect(()=>{
        if(isError && !isSuccess){
            toast.error('There was a server side error!',{duration: '3000'})
        }
        
        if(!isError && isSuccess && data && data?.status__code === 200){
            toast.success('Successfully updated');
            setTimeout(() => {
                navigate(sessionStorage.getItem('redirect__url'));
            }, 3000);
        }
    },[data, isLoading, isError, isSuccess, error, navigate]);

    return (
        <div>
            <Box className='review__and__post__product__container padding__top' display={'flex'} justifyContent={'flex-end'}>
                <Button
                    colorScheme="green" 
                    variant={'outline'}
                    type="submit"
                    size='sm'
                    mr='30px'
                >Preview Product</Button>
                <Button
                    colorScheme="green" 
                    variant={'outline'}
                    type="button"
                    size='sm'
                    onClick={()=> handlePostProduct()}
                >Post Product</Button>
            </Box> 
        </div>
    );
});

export default PreviewAndSave;