import { Box, Button, Image } from '@chakra-ui/react';
import React, { memo, useState } from 'react';
import { server__image__host__url } from '../../../../app/store';
import { useDeleteSingleSectionMutation, useGetAllUpNavbarQuery } from '../../../../features/brand/brandApi';
import AdminPageSkeleton from '../../AdminPageSkeletonComponents/AdminPageSkeleton';

const DeleteSection = memo(() => {
    
        let { data : upNavbarData , isSuccess: upNavbarIsSuccess} = useGetAllUpNavbarQuery();
        const [upNavbar, setUpNavbar] = useState(''); 
        
        const handleUpNavbarChange = (value) => {
            setUpNavbar(value);
        }
    
        const [provideId] = useDeleteSingleSectionMutation();
        const handleDeleteSection = (id) => {
            provideId(id);
        }
        
    return (
        <AdminPageSkeleton>   
            {               
                upNavbarIsSuccess  && upNavbarData && upNavbarData?.items?.length > 0 && 
                <div className='data__view__image__preview'>
                    {
                        upNavbarData?.items?.map((info, index)=> { 
                            return <Box key={index}> 
                                        <Image src={server__image__host__url+info?.src}/> 
                                        <Button width="100%" variant="ghost">{info?.name}</Button>
                                        <Button width="100%" variant='solid' colorScheme='red' onClick={()=> handleDeleteSection(info.ID)}>DELETE</Button>
                                    </Box>
                        })
                    }
                </div>
            } 
        </AdminPageSkeleton>
    );
});

export default DeleteSection;