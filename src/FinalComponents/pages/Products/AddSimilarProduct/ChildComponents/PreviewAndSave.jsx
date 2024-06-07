import { Box, Button } from '@chakra-ui/react';
import { debounce } from 'lodash';
import React, { memo, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAddSingleProductMutation } from '../../../../../features/product/productApi';

const PreviewAndSave = memo(() => {
    const navigate = useNavigate();
    const [provideProductInfo, {data, isLoading, isError, isSuccess, error}] = useAddSingleProductMutation();

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
            delete product.ID;
            
            let productProductInfo = {...product, images, overviews, details, specifications};  
            localStorage.setItem('visible__url', product.visible__url);
            provideProductInfo(productProductInfo); 
        }else{
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
                localStorage.removeItem('product');
                localStorage.removeItem('images');
                localStorage.removeItem('overviews');
                localStorage.removeItem('details');
                localStorage.removeItem('specifications');
                
                setTimeout(() => {
                    navigate(`/${localStorage.getItem('visible__url')}/${data.result.insertId}`)
                    localStorage.removeItem('visible__url');
                },1000);

        }
    },[data, isLoading, isError, isSuccess, error, navigate])

    const [addDebounceLoading, setAddDebounceLoading] = useState(false);
    const handleSubmitDebounceFunction = debounce(handlePostProduct, 1000);

    const handleStartSubmit = () => { 
        setAddDebounceLoading(()=> true);
        handleSubmitDebounceFunction();
    }

    return (
        <div>
            <Box className='data__form__submit__button'> 
                <Button
                    colorScheme="green" 
                    variant={'outline'}
                    type="button"
                    size='sm'
                    isLoading={isLoading || addDebounceLoading}
                    onClick={()=> handleStartSubmit()}
                >Post Product</Button>
            </Box> 
        </div>
    );
});

export default PreviewAndSave;