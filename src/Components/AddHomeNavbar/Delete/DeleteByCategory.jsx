import { Box, Button, Image, Input } from '@chakra-ui/react';
import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { server__image__host__url } from '../../../app/store';
import { useDeleteSingleShopByCategoryMutation, useGetAllShopByCategoryQuery } from '../../../features/shopByCategory/shopByCategoryApi';
import DynamicHeader from '../../AddNavbar/DynamicHeader';
import DynamicHeaderHome from '../DynamicHeaderHome';

const DeleteShopByCategory = memo(() => {
    let {data: allBrands, isSuccess: allBrandIsSuccess} = useGetAllShopByCategoryQuery();
    const [brandSearchText, setBrandSearchText] = useState('');

    const handleFilterBrandData = () => {
        if(brandSearchText){
            return allBrands.filter((info)=> info.name.toLowerCase().indexOf(brandSearchText.toLowerCase()) !== -1)
        }
        return allBrands;
    }
    const [provideBrandId] = useDeleteSingleShopByCategoryMutation();
    const handleDeleteBrand = (id) => {
        provideBrandId(id);
    }
    return (
        <div> 
            <DynamicHeader message={'Delete Popular Category'}/>
            <DynamicHeaderHome/>
            <div className='main__category__product__view__upper__container bg__1'>
                <div  className='filter__grid__for__delete'>
                    <Input my='5' placeholder='Search Here.....' onChange={(e)=> setBrandSearchText(e.target.value)}></Input>
                </div>

{               allBrandIsSuccess && allBrands && allBrands?.length > 0 && 
                <div className='delete__brand__view__main__container'>
                    {
                        handleFilterBrandData().map((info, index)=> { 
                            return <Box key={index}>
                                        <Link to={`/${info?.link}`}>
                                            <Image src={ info.img__src.indexOf('/images/check') === -1 ? info.img__src : server__image__host__url+info.img__src} alt={info.name}/>
                                        </Link>
                                        <Button width="100%" variant="ghost">{info?.name}</Button>
                                        <Button width="100%" variant='solid' colorScheme='red' onClick={()=> handleDeleteBrand(info.id)}>DELETE</Button>
                                    </Box>
                        })
                    }
                </div>}
            </div>
        </div>
    );
});

export default DeleteShopByCategory;