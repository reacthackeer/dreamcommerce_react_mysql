import { Box, Button, Heading, Image, Input, Text } from '@chakra-ui/react';
import React, { memo, useEffect, useState } from 'react';
// import { server__image__host__url } from '../../../app/store';
import { debounce } from 'lodash';
import { server__image__host__url } from '../../../../app/store';
import { useDeleteSingleBannerMutation, useGetAllBannerQuery } from '../../../../features/banner/bannerApi';
import AdminPageSkeleton from '../../AdminPageSkeletonComponents/AdminPageSkeleton';

const DeleteBanner = memo(() => {
    let {data: allBrands, isSuccess: allBrandIsSuccess} = useGetAllBannerQuery();
    const [brandSearchText, setBrandSearchText] = useState('');

    const handleFilterBrandData = (allBanners = []) => {
        if(brandSearchText){
            return allBanners.filter((info)=> info.title.toLowerCase().indexOf(brandSearchText.toLowerCase()) !== -1)
        }
        return allBanners;
    }
    const [provideBrandId, {isLoading: deleteIsLoading, isSuccess: deleteIsSuccess}] = useDeleteSingleBannerMutation();
    const handleDeleteBrand = (id) => { 
        provideBrandId(id);
        setDeleteDebounceLoading(()=> false);
    }

    // debounce facility start  {isLoading: deleteIsLoading, isSuccess: deleteIsSuccess}

    const [currentId, setCurrentId] = useState('');
    const [deleteDebounceLoading, setDeleteDebounceLoading] = useState(false);
    const deleteDebounceFunction = debounce(handleDeleteBrand, 1000);
    const handleStartDeleteDebounce = (id) => {
        setCurrentId(()=> id);
        setDeleteDebounceLoading(()=> true);
        deleteDebounceFunction(id);
    }

    useEffect(()=>{
        if(deleteIsSuccess){
            setCurrentId(()=> '');
            setDeleteDebounceLoading(()=> false);
        }
    }, [deleteIsSuccess])

    // debounce facility end

    return (
        <AdminPageSkeleton>   
                <div>
                    <Input my='3' size='sm' placeholder='Search Here.....' onChange={(e)=> setBrandSearchText(e.target.value)}></Input>
                </div>

                {    
                    allBrandIsSuccess && allBrands && allBrands?.length > 0 && 
                    allBrands.map((info, index) => {
                        return  <Box key={index}>
                                    <Heading size={'lg'} mb='3'>{info.title}</Heading>
                                    <div className='data__view__image__preview'>
                                        
                                        {
                                            handleFilterBrandData(info.banners).map((info, index)=> { 
                                                return <Box key={index}> 
                                                            <Image 
                                                                src={server__image__host__url+info?.img__src} 
                                                                title={info.title}
                                                            /> 
                                                            <Text 
                                                                textAlign='center'
                                                            >{info.type}</Text>
                                                            <Button 
                                                                isLoading={(deleteDebounceLoading || deleteIsLoading) && currentId === info.id} 
                                                                width="100%" 
                                                                variant='solid' 
                                                                colorScheme='red' 
                                                                onClick={()=> handleStartDeleteDebounce(info.id)}
                                                            >DELETE</Button>
                                                        </Box>
                                            })
                                        }
                                    </div>
                                </Box>
                    })
                    
                } 
        </AdminPageSkeleton>
    );
});

export default DeleteBanner;