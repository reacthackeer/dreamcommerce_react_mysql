import { Box, Button, FormControl, FormLabel, Image, Select } from '@chakra-ui/react';
import React, { memo, useState } from 'react';
import { server__image__host__url } from '../../../../app/store';
import { useDeleteSingleCollectionMutation, useGetAllChildNavbarQuery, useGetAllParentFatherNavbarQuery, useGetAllParentNavbarQuery, useGetAllUpNavbarQuery } from '../../../../features/brand/brandApi';
import AdminPageSkeleton from '../../AdminPageSkeletonComponents/AdminPageSkeleton';


const DeleteCollection = memo(() => {
    
        let { data : upNavbarData } = useGetAllUpNavbarQuery();
        const [upNavbar, setUpNavbar] = useState(''); 
        
        const handleUpNavbarChange = (value) => {
            setUpNavbar(value);
            setTopCategory('');
            setCategory('')
        }
    
    
        // top category start
        let {data: topCategoryData, isSuccess: topCategoryDataIsSuccess} = useGetAllParentFatherNavbarQuery(upNavbar);

        const [topCategory, setTopCategory] = useState(''); 
        
        const handleTopCategoryChange = (value) => {
            setTopCategory(value);
        } 
        // top category end
        // category start
        let {data: categoryData, isSuccess} = useGetAllParentNavbarQuery({parent__father: topCategory, up: upNavbar});
        const [category, setCategory] = useState('');
        
        
        const handleCategoryChange = (value) => {
            setCategory(value);
        }
        
    
        // category end
    
        let {data: collectionData, isSuccess: CollectionIsSuccess} = useGetAllChildNavbarQuery({parent: category, up: upNavbar}); 
        const [provideChildId] = useDeleteSingleCollectionMutation();
        const handleDeleteImage = (id) => {
            provideChildId(id);
        }
    return (
        <AdminPageSkeleton>  
            <Box>
                <div className='data__view__form'> 
                    {   
                        upNavbarData && upNavbarData?.status__code === 200 && upNavbarData?.items?.length > 0 &&
                            <FormControl> 
                                <FormLabel>Select section</FormLabel>
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
                    {   
                        topCategoryData && topCategoryDataIsSuccess && topCategoryData?.status__code === 200 && topCategoryData?.items?.length > 0 && upNavbar &&
                            <FormControl> 
                                <FormLabel>Select top category</FormLabel>
                                <Select
                                    value={topCategory}
                                    size='sm'
                                    onChange={(e) => handleTopCategoryChange(e.target.value)}
                                    placeholder="Select Top Category"
                                    isRequired
                                > 
                                    {
                                        topCategoryData.items.map((info, index)=> <option key={index} value={info.name}>{info.name}</option>)
                                    }
                                </Select>  
                            </FormControl>  
                    }
                    {   
                        categoryData && isSuccess && categoryData?.status__code === 200 && categoryData?.items?.length > 0 && topCategory &&
                            <FormControl> 
                                <FormLabel>Select category</FormLabel>
                                <Select
                                    isRequired
                                    size='sm'
                                    value={category}
                                    onChange={(e) => handleCategoryChange(e.target.value)}
                                    placeholder="Select Category"
                                > 
                                    {
                                        categoryData.items.map((info, index)=> <option key={index} value={info.name}>{info.name}</option>)
                                    }
                                </Select>  
                            </FormControl>  
                    }
                </div>
                    
                {               
                    CollectionIsSuccess  && collectionData && collectionData?.items?.length > 0 && 
                    <div className='data__view__image__preview'>
                        {
                            collectionData?.items?.map((info, index)=> { 
                                return <Box key={index}> 
                                            <Image src={server__image__host__url+info?.src}/> 
                                            <Button width="100%" variant="ghost">{info?.name}</Button>
                                            <Button width="100%" variant='solid' colorScheme='red' onClick={()=> handleDeleteImage(info.ID)}>DELETE</Button>
                                        </Box>
                            })
                        }
                    </div>
                }
            </Box>
        </AdminPageSkeleton>
    );
});

export default DeleteCollection;