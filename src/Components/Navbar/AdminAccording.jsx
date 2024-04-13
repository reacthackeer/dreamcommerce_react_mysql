import {
    Accordion,
    AccordionItem,
    AccordionPanel,
    Text,
    useColorMode
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccordingButtonGroup from './childComponents/AccordingButtonGroup';
const AdminAccording = () => { 
    
    const [isDarkMode, setIsDarkMode] = useState('');
    // toggle color mode
    const  navigate = useNavigate();
    const {toggleColorMode} = useColorMode(); 

    
    useEffect(()=>{
        let colorMode = localStorage.getItem('chakra-ui-color-mode');
            if(colorMode){
                if(colorMode === 'light'){
                    setIsDarkMode(false)
                }else{
                    setIsDarkMode(true)
                }
            }
    }, [isDarkMode, setIsDarkMode, toggleColorMode])
    

    const handlePushSpecificLocation = (path) => {
        navigate({pathname: path})   
    }

    const pages = [
        {
            "name": "Add banner",
            "link": "/add/banner"
        },
        {
            "name": "Add brand",
            "link": "/add/brand"
        },
        {
            "name": "Add by brand",
            "link": "/add/by-brand"
        },
        {
            "name": "Add by category",
            "link": "/add/by-category"
        },
        {
            "name": "Add category",
            "link": "/add/category"
        },
        {
            "name": "Add collection",
            "link": "/add/collection"
        },
        {
            "name": "Add popular category",
            "link": "/add/popular-category"
        },
        {
            "name": "Add product",
            "link": "/add/product"
        },
        {
            "name": "Add section",
            "link": "/add/section"
        },
        {
            "name": "Add shipping address",
            "link": "/add/address/shipping-address"
        },
        {
            "name": "Add top category",
            "link": "/add/top-category"
        },
        {
            "name": "Delete banner",
            "link": "/delete/banner"
        },
        {
            "name": "Delete brand",
            "link": "/delete/brand"
        },
        {
            "name": "Delete by brand",
            "link": "/delete/by-brand"
        },
        {
            "name": "Delete by category",
            "link": "/delete/by-category"
        },
        {
            "name": "Delete category",
            "link": "/delete/category"
        },
        {
            "name": "Delete collection",
            "link": "/delete/collection"
        },
        {
            "name": "Delete popular category",
            "link": "/delete/popular-category"
        },
        {
            "name": "Delete section",
            "link": "/delete/section"
        },
        {
            "name": "Delete top category",
            "link": "/delete/top-category"
        },
        {
            "name": "Edit banner",
            "link": "/edit/banner"
        },
        {
            "name": "Edit brand",
            "link": "/edit/brand"
        },
        {
            "name": "Edit by brand",
            "link": "/edit/by-brand"
        },
        {
            "name": "Edit by category",
            "link": "/edit/by-category"
        },
        {
            "name": "Edit category",
            "link": "/edit/category"
        },
        {
            "name": "Edit collection",
            "link": "/edit/collection"
        },
        {
            "name": "Edit popular category",
            "link": "/edit/popular-category"
        },
        {
            "name": "Edit section",
            "link": "/edit/section"
        },
        {
            "name": "Edit top category",
            "link": "/edit/top-category"
        },
        {
            "name": "Manage order",
            "link": "/order-management/all"
        },
        {
            "name": "Upload profile image",
            "link": "/upload/profile-image"
        }
    ]
    return (   
            <Accordion allowMultiple className='border__custom__color'>   
                <AccordionItem>
                    {({ isExpanded }) => (
                        <> 
                            <AccordingButtonGroup title={'Admin'} isExpanded={isExpanded}/>
                            <AccordionPanel pb={4} className='pages__panel'>
                                {
                                    pages.map((info, index)=> {
                                        return <Text 
                                                    key={index}
                                                    className='link__hover__item' 
                                                    onClick={()=> handlePushSpecificLocation(info.link)} 
                                                    fontSize={'sm'}
                                                >{info.name}</Text>
                                    })
                                } 
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
            </Accordion>   
    );
};

export default AdminAccording;