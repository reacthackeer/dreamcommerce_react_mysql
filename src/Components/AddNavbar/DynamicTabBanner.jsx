import { Box, Tab, TabList, Tabs } from '@chakra-ui/react';
import React, { memo, useEffect, useState } from 'react';
import { useHref, useNavigate } from 'react-router-dom';
    
const DynamicTabBanner = memo(() => { 
    let [nav] = useState('banner');
    let [typeIndex, setTypeIndex] = useState(0); 



    const navigate = useNavigate();

    const handleSetAdd = (index, type) => {
        setTypeIndex(index); 
        navigate(`/${type}/${nav}`);
    } 
    
    

    let href = useHref();  
    
    useEffect(()=>{ 
        let result = href.split('/');
        let type = result[1]; 
        if(type === 'add'){ 
            setTypeIndex(0)
        } else if(type === 'edit'){ 
            setTypeIndex(1)
        } else if(type === 'delete'){ 
            setTypeIndex(2)
        } 
    },[href]);

    return (
        <Box className='and__edit__delete__tabs__container main__category__product__view__upper__container'>
            <Tabs variant='solid-rounded' colorScheme='green' index={typeIndex}>
                <TabList mb='1em'>
                    <Tab onClick={()=> handleSetAdd(0, 'add')}>Add</Tab> 
                    <Tab onClick={()=> handleSetAdd(1, 'edit')}>Edit</Tab> 
                    <Tab onClick={()=> handleSetAdd(2, 'delete')}>Delete</Tab> 
                </TabList>
            </Tabs> 
        </Box>
    );
});

export default DynamicTabBanner;