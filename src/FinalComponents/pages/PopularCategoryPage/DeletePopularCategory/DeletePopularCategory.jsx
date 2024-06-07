import { Box, Button, Image, Input } from '@chakra-ui/react';
import { debounce } from 'lodash';
import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { server__image__host__url } from '../../../../app/store';
import { useDeleteSinglePopularCategoryMutation, useGetAllPopularCategoryQuery } from '../../../../features/popularCategory/popularCategoryApi';
import AdminPageSkeleton from '../../AdminPageSkeletonComponents/AdminPageSkeleton';

const DeletePopularCategory = memo(() => {
    let {data: allBrands, isSuccess: allBrandIsSuccess} = useGetAllPopularCategoryQuery();
    const [brandSearchText, setBrandSearchText] = useState('');

    const handleFilterBrandData = () => {
        if(brandSearchText){
            return allBrands.filter((info)=> info.name.toLowerCase().indexOf(brandSearchText.toLowerCase()) !== -1)
        }
        return allBrands;
    }
    const [provideBrandId,{isSuccess: deleteIsSuccess, isLoading: deleteIsLoading}] = useDeleteSinglePopularCategoryMutation();
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
                                        <Link 
                                            to={`${info?.link}`}
                                        >
                                            <Image 
                                                src={server__image__host__url+info?.img__src}
                                            />
                                        </Link>
                                        <Button 
                                            width="100%" 
                                            variant="ghost"
                                        >{info?.name}</Button>
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

export default DeletePopularCategory;