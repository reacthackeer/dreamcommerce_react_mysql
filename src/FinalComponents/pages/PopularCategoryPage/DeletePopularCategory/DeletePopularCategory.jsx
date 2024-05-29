import { Box, Button, Image, Input } from '@chakra-ui/react';
import React, { memo, useState } from 'react';
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
    const [provideBrandId] = useDeleteSinglePopularCategoryMutation();
    const handleDeleteBrand = (id) => {
        provideBrandId(id);
    }
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
                                            <Image src={server__image__host__url+info?.img__src}/>
                                        </Link>
                                        <Button width="100%" variant="ghost">{info?.name}</Button>
                                        <Button width="100%" variant='solid' colorScheme='red' onClick={()=> handleDeleteBrand(info.id)}>DELETE</Button>
                                    </Box>
                        })
                    }
                </div>
            } 
        </AdminPageSkeleton>
    );
});

export default DeletePopularCategory;