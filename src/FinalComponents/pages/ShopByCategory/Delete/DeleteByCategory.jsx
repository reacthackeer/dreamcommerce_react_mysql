import { Box, Button, Image, Input } from '@chakra-ui/react';
import { debounce } from 'lodash';
import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { server__image__host__url } from '../../../../app/store';
import { useDeleteSingleShopByCategoryMutation, useGetAllShopByCategoryQuery } from '../../../../features/shopByCategory/shopByCategoryApi';
import AdminPageSkeleton from '../../AdminPageSkeletonComponents/AdminPageSkeleton';

const DeleteShopByCategory = memo(() => {
    let {data: allBrands, isSuccess: allBrandIsSuccess} = useGetAllShopByCategoryQuery();
    const [brandSearchText, setBrandSearchText] = useState('');

    const handleFilterBrandData = () => {
        if(brandSearchText){
            return allBrands.filter((info)=> info.name.toLowerCase().indexOf(brandSearchText.toLowerCase()) !== -1)
        }
        return allBrands;
    }
    const [provideBrandId, {isLoading: deleteIsLoading, isSuccess: deleteIsSuccess}] = useDeleteSingleShopByCategoryMutation();
    const handleDeleteBrand = (id) => {
        provideBrandId(id);
    }

    // debounce facility start

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
                <div className='data__view__image__preview'>
                    {
                        handleFilterBrandData().map((info, index)=> { 
                            return <Box key={index}>
                                        <Link to={`/${info?.link}`}>
                                            <Image src={ info.img__src.indexOf('/images/check') === -1 ? info.img__src : server__image__host__url+info.img__src} alt={info.name}/>
                                        </Link>
                                        <Button width="100%" variant="ghost">{info?.name}</Button>
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
            } 
        </AdminPageSkeleton>
    );
});

export default DeleteShopByCategory;