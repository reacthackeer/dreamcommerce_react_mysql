import { Box, Button, Heading, Image, Input, Text } from '@chakra-ui/react';
import React, { memo, useState } from 'react';
// import { server__image__host__url } from '../../../app/store';
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
    const [provideBrandId] = useDeleteSingleBannerMutation();
    const handleDeleteBrand = (id) => {
        console.log(id);
        provideBrandId(id);
    }
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
                                                            <Image src={server__image__host__url+info?.img__src} title={info.title}/> 
                                                            <Text textAlign='center'>{info.type}</Text>
                                                            <Button width="100%" variant='solid' colorScheme='red' onClick={()=> handleDeleteBrand(info.id)}>DELETE</Button>
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