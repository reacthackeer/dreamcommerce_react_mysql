import { Box, Button, Image, Select } from '@chakra-ui/react';
import React, { memo, useState } from 'react';
import { server__image__host__url } from '../../../app/store';
import { useDeleteSingleSectionMutation, useGetAllUpNavbarQuery } from '../../../features/brand/brandApi';
import DynamicHeader from '../DynamicHeader';
import DynamicTab from '../DynamicTab';

const DeleteCollection = memo(() => {
    
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
        <div> 
            <DynamicHeader message={'Delete Brand'}/>
            <DynamicTab/>
            <Box className='main__category__product__view__upper__container bg__1' mb='10'>
                <div className='filter__grid__for__delete'> 
                    {   
                        upNavbarData && upNavbarData?.status__code === 200 && upNavbarData?.items?.length > 0 &&
                        <Box 
                        >   
                            <Box
                                display={'grid'}   
                            >
                                <Box> 
                                    <Select
                                        value={upNavbar}
                                        onChange={(e) => handleUpNavbarChange(e.target.value)}
                                        placeholder="Select section"
                                        isRequired={true}
                                    > 
                                        {
                                            upNavbarData.items.map((info, index)=> <option key={index} value={info.name}>{info.name}</option>)
                                        }
                                    </Select>  
                                </Box> 
                            </Box>
                        </Box> 
                    } 
                </div>
                    
{               upNavbarIsSuccess  && upNavbarData && upNavbarData?.items?.length > 0 && 
                <div className='delete__brand__view__main__container'>
                    {
                        upNavbarData?.items?.map((info, index)=> { 
                            return <Box key={index}> 
                                        <Image src={server__image__host__url+info?.src}/> 
                                        <Button width="100%" variant="ghost">{info?.name}</Button>
                                        <Button width="100%" variant='solid' colorScheme='red' onClick={()=> handleDeleteSection(info.ID)}>DELETE</Button>
                                    </Box>
                        })
                    }
                </div>}
            </Box>
        </div>
    );
});

export default DeleteCollection;