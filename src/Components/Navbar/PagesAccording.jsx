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
const PagesAccording = () => { 
    
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
    return (   
            <Accordion allowMultiple className='border__custom__color'>   
                <AccordionItem>
                    {({ isExpanded }) => (
                        <> 
                            <AccordingButtonGroup title={'Pages'} isExpanded={isExpanded}/>
                            <AccordionPanel pb={4} className='pages__panel'>     
                                <Text className='link__hover__item' onClick={()=> handlePushSpecificLocation('/profile')} fontSize={'sm'}>Profile</Text>
                                <Text className='link__hover__item' onClick={()=> handlePushSpecificLocation('/wishlist')} fontSize={'sm'}>Wishlist</Text>
                                <Text className='link__hover__item' onClick={()=> handlePushSpecificLocation('/cart')} fontSize={'sm'}>Cart</Text>
                                <Text className='link__hover__item' onClick={()=> handlePushSpecificLocation('/blog')} fontSize={'sm'}>Blog</Text> 
                                <Text className='link__hover__item' onClick={()=> handlePushSpecificLocation('/contact-us')} fontSize={'sm'}>Contact Us</Text> 
                                <Text className='link__hover__item' onClick={()=> handlePushSpecificLocation('/faq')} fontSize={'sm'}>FAQ</Text> 
                                <Text className='link__hover__item' onClick={()=> handlePushSpecificLocation('/about-us')} fontSize={'sm'}>About Us</Text>
                                <Text className='link__hover__item' onClick={()=> handlePushSpecificLocation('/privacy-policy')} fontSize={'sm'}>Privacy Policy</Text>
                                <Text className='link__hover__item' onClick={()=> handlePushSpecificLocation('/terms-and-condition')} fontSize={'sm'}>Terms and Conditions</Text> 
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
            </Accordion>   
    );
};

export default PagesAccording;