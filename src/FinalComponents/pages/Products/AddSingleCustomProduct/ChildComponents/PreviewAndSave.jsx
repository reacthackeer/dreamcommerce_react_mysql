import { Box, Button } from '@chakra-ui/react';
import React, { memo, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAddSingleProductMutation } from '../../../../../features/product/productApi';

const PreviewAndSave = memo(() => {
    const navigate = useNavigate();
    const [provideProductInfo,{data, isLoading, isError, isSuccess, error}] = useAddSingleProductMutation();
    
    const handlePostProduct = () => { 
        let product = JSON.parse(localStorage.getItem('product'))||{};
        let images = JSON.parse(localStorage.getItem('images'))||[];
        let overviews = JSON.parse(localStorage.getItem('overviews'))||[];
        let details = JSON.parse(localStorage.getItem('details'))||[];
        let specifications = JSON.parse(localStorage.getItem('specifications'))||[];  
        if(product && product && images && overviews &&  details && specifications){  

            if(images?.length > 0 ){
                if(overviews?.length > 0 ){
                    if(details?.length > 0){
                        if( specifications?.length > 0  ){
                            product.title= product.brand+' '+product.title;
                            product.visible__url= product.title.replace(/ /g, '-').toLowerCase();
                            product.visible__url= product.visible__url.replace(/\//g, '-');
                            localStorage.setItem('visible__url', product.visible__url);
                            let productProductInfo = {...product, images, overviews, details, specifications}; 
                            provideProductInfo(productProductInfo); 
                        }else{  
                            toast.error('Details array empty!')
                        }
                    }else{  
                        toast.error('Details array empty!')
                    }
                }else{
                    toast.error('Overviews array empty!')
                }
            }else{
                toast.error('Image array empty!')
            }
        }
    }

    useEffect(()=>{
        if(isError && !isSuccess){
            toast.error('There was a server side error!',{duration: '3000'})
        }

        if(!isError && isSuccess && data && data?.status__code === 201){
            
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
    
    return (
        <div>
            <Box className='data__form__submit__button'>
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
                    isLoading={isLoading}
                >Post Product</Button>
            </Box> 
        </div>
    );
});

export default PreviewAndSave;