import { Box, Button, FormControl, FormLabel, Image, Select } from '@chakra-ui/react';
import React, { memo, useState } from 'react';
import { server__image__host__url } from '../../../../app/store';
import { useDeleteSingleTopCategoryMutation, useGetAllParentFatherNavbarQuery, useGetAllUpNavbarQuery } from '../../../../features/brand/brandApi';
import AdminPageSkeleton from '../../AdminPageSkeletonComponents/AdminPageSkeleton';

const DeleteTopCategory = memo(() => {
    
        let { data : upNavbarData } = useGetAllUpNavbarQuery();
        const [upNavbar, setUpNavbar] = useState(''); 
        
        const handleUpNavbarChange = (value) => {
            setUpNavbar(value); 
        }
    
    
        // top category start
        let {data: topCategoryData, isSuccess: topCategoryDataIsSuccess} = useGetAllParentFatherNavbarQuery(upNavbar);
        
        const [provideId] = useDeleteSingleTopCategoryMutation();

        const handleDeleteTopCategory = (id) => {
            provideId(id);
        }
    return (
        <AdminPageSkeleton>   
            <div className='data__view__form'> 
                {   
                    upNavbarData && upNavbarData?.status__code === 200 && upNavbarData?.items?.length > 0 &&
                        <FormControl> 
                            <FormLabel>Select Section</FormLabel>
                            <Select
                                value={upNavbar}
                                size='sm'
                                onChange={(e) => handleUpNavbarChange(e.target.value)}
                                placeholder="Select section"
                                isRequired={true}
                            > 
                                {
                                    upNavbarData.items.map((info, index)=> <option key={index} value={info.name}>{info.name}</option>)
                                }
                            </Select>  
                        </FormControl>  
                } 
            </div>
            {               
                topCategoryDataIsSuccess  && topCategoryData && topCategoryData?.items?.length > 0 && 
                <div className='data__view__image__preview'>
                    {
                        topCategoryData?.items?.map((info, index)=> { 
                            return <Box key={index}> 
                                        <Image src={server__image__host__url+info?.src}/> 
                                        <Button width="100%" variant="ghost">{info?.name}</Button>
                                        <Button width="100%" variant='solid' colorScheme='red' onClick={()=> handleDeleteTopCategory(info.ID)}>DELETE</Button>
                                    </Box>
                        })
                    }
                </div>
            } 
        </AdminPageSkeleton>
    );
});

export default DeleteTopCategory;