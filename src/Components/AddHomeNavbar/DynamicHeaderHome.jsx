import { Box, Tab, TabList, Tabs } from '@chakra-ui/react';
import React, { memo, useEffect, useState } from 'react';
import { useHref, useNavigate } from 'react-router-dom';
    
const DynamicHeaderHome = memo(() => {
    let [firstType, setFirstType] = useState('add');
    let [nav, setNav] = useState('popular-category');
    let [typeIndex, setTypeIndex] = useState(0);
    let [navIndex, setNavIndex] = useState(0);



    const navigate = useNavigate();

    const handleSetAdd = (index, type) => {
        setTypeIndex(index);
        setFirstType(type);
        navigate(`/${type}/${nav}`);
    } 
    
    const handlePushRouter = (name, index) => {
        setNav(name);
        setNavIndex(index);
        navigate(`/${firstType}/${name}`);
    }

    let href = useHref();  
    
    useEffect(()=>{ 
        let result = href.split('/');
        let type = result[1];
        let nav = result[2];
        if(type === 'add'){
            setFirstType(type);
            setTypeIndex(0)
        } else if(type === 'edit'){
            setFirstType(type);
            setTypeIndex(1)
        } else if(type === 'delete'){
            setFirstType(type);
            setTypeIndex(2)
        }
        if(nav === 'popular-category'){
            setNav(nav);
            setNavIndex(0)
        } else if(nav === 'by-brand'){
            setNav(nav);
            setNavIndex(2)
        } else if(nav === 'by-category'){
            setNav(nav);
            setNavIndex(1)
        } else if(nav === 'banner'){
            setNav(nav);
            setNavIndex(3)
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
            <Tabs isFitted variant='solid-rounded' colorScheme='green' index={navIndex}>
                <TabList mb='1em'>
                    <Tab onClick={()=> handlePushRouter('popular-category', 0)}>Popular Category</Tab>
                    <Tab onClick={()=> handlePushRouter('by-category', 1)}>By Category</Tab>
                    <Tab onClick={()=> handlePushRouter('by-brand', 2)}>By Brand</Tab> 
                    <Tab onClick={()=> handlePushRouter('banner', 2)}>Banner</Tab> 
                </TabList>
            </Tabs>
        </Box>
    );
});

export default DynamicHeaderHome;