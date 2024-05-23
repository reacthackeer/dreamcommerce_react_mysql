import { Box, Button, Heading, Image, Input, Text } from '@chakra-ui/react';
import React, { memo, useState } from 'react';
import { server__image__host__url } from '../../../app/store';
import { useDeleteSingleBannerMutation, useGetAllBannerQuery } from '../../../features/banner/bannerApi';
import DynamicHeader from '../DynamicHeader';
import DynamicTabBanner from '../DynamicTabBanner';

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
        <div> 
            <DynamicHeader message={'Delete Banner'}/>
            <DynamicTabBanner/>
            <div className='main__category__product__view__upper__container bg__1'>
                <div  className='filter__grid__for__delete'>
                    <Input my='5' placeholder='Search Here.....' onChange={(e)=> setBrandSearchText(e.target.value)}></Input>
                </div>

            {    
                allBrandIsSuccess && allBrands && allBrands?.length > 0 && 
                allBrands.map((info, index) => {
                    return  <Box key={index}>
                    <Heading size={'lg'} mb='3'>{info.title}</Heading>
                    <div className='delete__brand__view__main__container padding__bottom'>
                        
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
            </div>
        </div>
    );
});

export default DeleteBanner;