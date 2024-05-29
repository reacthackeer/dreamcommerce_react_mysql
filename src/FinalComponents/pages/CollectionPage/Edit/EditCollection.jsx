import { Box, Button, FormControl, FormLabel, Image, Select } from '@chakra-ui/react';
import React, { memo, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useGetAllChildNavbarQuery, useGetAllParentFatherNavbarQuery, useGetAllParentNavbarQuery, useGetAllUpNavbarQuery } from '../../../../features/brand/brandApi';

import { server__image__host__url } from '../../../../app/store';
import AdminPageSkeleton from '../../AdminPageSkeletonComponents/AdminPageSkeleton';
import EditCollectionComponents from './Components/EditCollection';

const EditCollection = memo(() => {
    
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
        const [selected, setSelected] = useState(false);
        
        let {data: collectionData, isSuccess: CollectionIsSuccess} = useGetAllChildNavbarQuery({parent: category, up: upNavbar}); 
        
        const handleUpdateCollection = (info) => {
            let {ID, name, parent, src, uid, up} = info;
            if(ID && name && parent && src && uid && up){
                localStorage.setItem('edit__collection__images', JSON.stringify([src]));
                localStorage.setItem('edit__collection__name', name);
                localStorage.setItem('edit__collection__id', ID);
                localStorage.setItem('edit__collection__uid', uid);
                localStorage.setItem('edit__collection__up', up);
                localStorage.setItem('edit__collection__parent', parent);
                setSelected(true);
            }else{
                toast.error('Invalid request',{duration: 3000})
            }
        }
    return (
        <div> 
            {
                !selected && 
                <AdminPageSkeleton>  
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
                                                <Button 
                                                    width="100%" 
                                                    variant='solid' 
                                                    colorScheme='teal'
                                                    onClick={()=> handleUpdateCollection(info)}
                                                >Edit</Button>
                                            </Box>
                                })
                            }
                        </div>
                    } 
            </AdminPageSkeleton>
            }
            {
                selected && <AdminPageSkeleton> <EditCollectionComponents setSelected={setSelected}/> </AdminPageSkeleton>
            }
        </div>
    );
});

export default EditCollection;