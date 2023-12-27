import { Box, Tab, TabList, Tabs } from '@chakra-ui/react';
import React, { memo, useEffect, useState } from 'react';
import { useHref, useNavigate } from 'react-router-dom';
    
const DynamicTab = memo(() => {
    let [firstType, setFirstType] = useState('add');
    let [nav, setNav] = useState('collection');
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
        if(nav === 'collection'){
            setNav(nav);
            setNavIndex(3)
        } else if(nav === 'category'){
            setNav(nav);
            setNavIndex(2)
        } else if(nav === 'top-category'){
            setNav(nav);
            setNavIndex(1)
        } else if(nav === 'section'){
            setNav(nav);
            setNavIndex(0)
        } else if(nav === 'brand'){
            setNav(nav);
            setNavIndex(4)
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
                    <Tab onClick={()=> handlePushRouter('section', 0)}>Section</Tab>
                    <Tab onClick={()=> handlePushRouter('top-category', 1)}>Top Category</Tab>
                    <Tab onClick={()=> handlePushRouter('category', 2)}>Category</Tab>
                    <Tab onClick={()=> handlePushRouter('collection', 3)}>Collection</Tab>
                    <Tab onClick={()=> handlePushRouter('brand', 4)}>Brand</Tab>
                </TabList>
            </Tabs>
        </Box>
    );
});

export default DynamicTab;