import { Box, Button, Image } from '@chakra-ui/react';
import { debounce } from 'lodash';
import React, { memo, useEffect, useState } from 'react';
import { server__image__host__url } from '../../../../app/store';
import { useDeleteSingleSectionMutation, useGetAllUpNavbarQuery } from '../../../../features/brand/brandApi';
import AdminPageSkeleton from '../../AdminPageSkeletonComponents/AdminPageSkeleton';

const DeleteSection = memo(() => {
    
        let { data : upNavbarData , isSuccess: upNavbarIsSuccess} = useGetAllUpNavbarQuery();
        const [provideId, {isLoading: deleteIsLoading, isSuccess: deleteIsSuccess}] = useDeleteSingleSectionMutation();
        const handleDeleteSection = (id) => {
            provideId(id);
        }
    // debounce facility start

    const [currentId, setCurrentId] = useState('');
    const [deleteDebounceLoading, setDeleteDebounceLoading] = useState(false);
    const deleteDebounceFunction = debounce(handleDeleteSection, 1000);
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
            {               
                upNavbarIsSuccess  && upNavbarData && upNavbarData?.items?.length > 0 && 
                <div className='data__view__image__preview'>
                    {
                        upNavbarData?.items?.map((info, index)=> { 
                            return <Box key={index}> 
                                        <Image src={server__image__host__url+info?.src}/> 
                                        <Button width="100%" variant="ghost">{info?.name}</Button>
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

export default DeleteSection;