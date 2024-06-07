import { Box, Button, Image, Input } from '@chakra-ui/react';
import { debounce } from 'lodash';
import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { server__image__host__url } from '../../../../app/store';
import { useGetAllBrandQuery } from '../../../../features/brand/brandApi';
import { useDeleteBrandMutation } from '../../../../features/getAll/api';
import AdminPageSkeleton from '../../AdminPageSkeletonComponents/AdminPageSkeleton';


const DeleteBrand = memo(() => {
    let {data: allBrands, isSuccess: allBrandIsSuccess} = useGetAllBrandQuery();
    const [brandSearchText, setBrandSearchText] = useState('');

    const handleFilterBrandData = () => {
        if(brandSearchText){
            return allBrands.filter((info)=> info.brand.toLowerCase().indexOf(brandSearchText.toLowerCase()) !== -1)
        }
        return allBrands;
    }
    const [provideBrandId, {isLoading: deleteIsLoading, isSuccess: deleteIsSuccess}] = useDeleteBrandMutation();
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
                                        <Link to={`/brands/${info?.brand}`}>
                                            <Image src={server__image__host__url+info?.src}/>
                                        </Link>
                                        <Button width="100%" variant="ghost">{info?.brand}</Button>
                                        <Button 
                                            isLoading={(deleteDebounceLoading || deleteIsLoading) && currentId === info.ID} 
                                            width="100%" 
                                            variant='solid' 
                                            colorScheme='red' 
                                            onClick={()=> handleStartDeleteDebounce(info.ID)}
                                        >DELETE</Button>
                                    </Box>
                        })
                    }
                </div>
            }
        </AdminPageSkeleton> 
    );
});

export default DeleteBrand;