import { Box, Button, Image, Select } from '@chakra-ui/react';
import React, { memo, useState } from 'react';
import { toast } from 'react-hot-toast';
import { server__image__host__url } from '../../../app/store';
import { useGetAllChildNavbarQuery, useGetAllParentFatherNavbarQuery, useGetAllParentNavbarQuery, useGetAllUpNavbarQuery } from '../../../features/brand/brandApi';
import DynamicHeader from '../DynamicHeader';
import DynamicTab from '../DynamicTab';
import EditCollectionComponents from './Components/EditCollection';

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
                <React.Fragment>
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
                                            <Button 
                                                width="100%" 
                                                variant='solid' 
                                                colorScheme='teal'
                                                onClick={()=> handleUpdateCollection(info)}
                                            >Edit</Button>
                                        </Box>
                            })
                        }
                    </div>}
                </Box>
            </React.Fragment>
            }
            {
                selected && <EditCollectionComponents setSelected={setSelected}/>
            }
        </div>
    );
});

export default DeleteCollection;