import { Box, Button, FormControl, FormLabel, Image, Select } from '@chakra-ui/react';
import React, { memo, useState } from 'react';
import { toast } from 'react-hot-toast';
import { server__image__host__url } from '../../../../app/store';
import { useGetAllParentFatherNavbarQuery, useGetAllUpNavbarQuery } from '../../../../features/brand/brandApi';
import AdminPageSkeleton from '../../AdminPageSkeletonComponents/AdminPageSkeleton';
import EditTopCategoryComponents from './Components/EditTopCategory';

const EditTopCategory = memo(() => {
    
        let { data : upNavbarData } = useGetAllUpNavbarQuery();
        const [upNavbar, setUpNavbar] = useState(''); 
        
        const handleUpNavbarChange = (value) => {
            setUpNavbar(value); 
        }
    
    
        // top category start
        let {data: topCategoryData, isSuccess: topCategoryDataIsSuccess} = useGetAllParentFatherNavbarQuery(upNavbar);
        
        // category end
        const [selected, setSelected] = useState(false);

        
        const handleUpdateCollection = (info) => { 
            let {ID, name,  src, uid, up} = info;
            if(ID && name && src && uid && up){
                localStorage.setItem('edit__top__category__images', JSON.stringify([src]));
                localStorage.setItem('edit__top__category__name', name);
                localStorage.setItem('edit__top__category__id', ID);
                localStorage.setItem('edit__top__category__uid', uid);
                localStorage.setItem('edit__top__category__up', up); 
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
                    </div>
                            
                    {                
                        topCategoryData && topCategoryDataIsSuccess && topCategoryData?.status__code === 200 && topCategoryData?.items?.length > 0 && upNavbar &&
                            <div className='data__view__image__preview'>
                                {
                                    topCategoryData?.items?.map((info, index)=> { 
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
                selected && <AdminPageSkeleton> <EditTopCategoryComponents setSelected={setSelected}/> </AdminPageSkeleton>
            }
        </div>
    );
});

export default EditTopCategory;