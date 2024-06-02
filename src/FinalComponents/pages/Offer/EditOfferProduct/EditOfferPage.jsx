import { Box, Button } from '@chakra-ui/react';
import { debounce } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetAllOffersQuery } from '../../../../features/brand/brandApi';
import { useAddSingleOfferItemMutation, useDeleteSingleOfferItemMutation, useGetSingleOfferItemQuery } from '../../../../features/offer/offerApi';
import AdminPageSkeleton from '../../AdminPageSkeletonComponents/AdminPageSkeleton';
import { LoadingPage, NotFoundPage } from '../../LandingPage/Components/Loading';
const EditOfferPage = () => { 
    const productId = useParams().ID;
    let {data, isLoading, isError, isSuccess, error} = useGetAllOffersQuery(); 
    const {data: currentProductData, isSuccess: offerItemIsSuccess} = useGetSingleOfferItemQuery(productId|| '');
    const [provideOfferInfo,{isLoading: addIsLoading, isSuccess: removeIsSuccess}] = useAddSingleOfferItemMutation();
    const [provideProductIdAndOfferName, {isLoading: removeIsLoading, isSuccess: addIsSuccess}] = useDeleteSingleOfferItemMutation(); 

    
    
    const handleRemoveFromOffer = (name) => { 
        provideProductIdAndOfferName({product__id: productId, offer__name: name})
    }   

    const handleAddToOfferProduct = (name) => {
        let postData = {name, product__id: productId, active: 'true', img__src: '/empty.png'}
        provideOfferInfo(postData);
    }
    // decide what to render
    let content = null;
    if(isLoading && !isError && !isSuccess){
        content = <LoadingPage/>
    }
    if(!isLoading && isError && !isSuccess){
        content = <NotFoundPage message={error?.message}/>
    }
    // debounce function start
    const [addDebounceLoading, setAddDebounceLoading] = useState(false);
    const [removeDebounceLoading, setRemoveDebounceLoading] = useState(false);
    const addDebounceFunction = debounce(handleAddToOfferProduct, 1000);
    const removeDebounceFunction = debounce(handleRemoveFromOffer, 1000);

    const handleClickAddOffer = (name) => {
        setAddDebounceLoading(()=> true);
        addDebounceFunction(name);
    }
    const handleClickRemoveOffer = (name) => {
        setRemoveDebounceLoading(()=> true);
        removeDebounceFunction(name);
    }

    useEffect(()=>{
        if(addIsSuccess || removeIsSuccess){
            setRemoveDebounceLoading(()=> false);
            setAddDebounceLoading(()=> false);
        }
    },[addIsSuccess, removeIsSuccess])
    // debounce function end

    
    if(!isLoading && !isError && isSuccess && data?.length > 0){
        content = <AdminPageSkeleton> 
                    <Box className='data__view__form'>
                        {
                            data.map((info, index)=> <Button  
                                                        isLoading={ isLoading || removeIsLoading || removeDebounceLoading  || addDebounceLoading  || addIsLoading  }
                                                        bg={offerItemIsSuccess && currentProductData && currentProductData?.status__code === 200 && currentProductData?.array?.indexOf(info.name) !== -1 ? 'teal.500' : 'gray.300'}
                                                        key={index}
                                                        onClick={offerItemIsSuccess && currentProductData && currentProductData?.status__code === 200 && currentProductData?.array?.indexOf(info.name) !== -1 ? ()=> handleClickRemoveOffer(info.name) : ()=> handleClickAddOffer(info.name)}
                                                    >{info.name.split('__').join(' ').toUpperCase()}</Button>)
                        }
                    </Box>
                </AdminPageSkeleton>
    }
    return content; 
};

export default EditOfferPage;