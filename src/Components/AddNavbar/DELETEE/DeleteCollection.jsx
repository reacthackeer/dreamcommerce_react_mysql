import { Box, Button, Image, Select } from '@chakra-ui/react';
import React, { memo, useState } from 'react';
import { server__image__host__url } from '../../../app/store';
import { useDeleteSingleCollectionMutation, useGetAllChildNavbarQuery, useGetAllParentFatherNavbarQuery, useGetAllParentNavbarQuery, useGetAllUpNavbarQuery } from '../../../features/brand/brandApi';
import DynamicHeader from '../DynamicHeader';
import DynamicTab from '../DynamicTab';

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
                    {   
                        topCategoryData && topCategoryDataIsSuccess && topCategoryData?.status__code === 200 && topCategoryData?.items?.length > 0 && upNavbar &&
                        <Box 

                        >   
                            <Box
                                display={'grid'}    
                            >
                                <Box> 
                                    <Select
                                        value={topCategory}
                                        onChange={(e) => handleTopCategoryChange(e.target.value)}
                                        placeholder="Select Top Category"
                                        isRequired
                                    > 
                                        {
                                            topCategoryData.items.map((info, index)=> <option key={index} value={info.name}>{info.name}</option>)
                                        }
                                    </Select>  
                                </Box> 
                            </Box>
                        </Box> 
                    }
                    {   
                        categoryData && isSuccess && categoryData?.status__code === 200 && categoryData?.items?.length > 0 && topCategory &&
                        <Box 

                        >   
                            <Box
                                display={'grid'}   
                            >
                                <Box> 
                                    <Select
                                        isRequired
                                        value={category}
                                        onChange={(e) => handleCategoryChange(e.target.value)}
                                        placeholder="Select Category"
                                    > 
                                        {
                                            categoryData.items.map((info, index)=> <option key={index} value={info.name}>{info.name}</option>)
                                        }
                                    </Select>  
                                </Box> 
                            </Box>
                        </Box> 
                    }
                </div>
                    
{               CollectionIsSuccess  && collectionData && collectionData?.items?.length > 0 && 
                <div className='delete__brand__view__main__container'>
                    {
                        collectionData?.items?.map((info, index)=> { 
                            return <Box key={index}> 
                                        <Image src={server__image__host__url+info?.src}/> 
                                        <Button width="100%" variant="ghost">{info?.name}</Button>
                                        <Button width="100%" variant='solid' colorScheme='red' onClick={()=> handleDeleteImage(info.ID)}>DELETE</Button>
                                    </Box>
                        })
                    }
                </div>}
            </Box>
        </div>
    );
});

export default DeleteCollection;