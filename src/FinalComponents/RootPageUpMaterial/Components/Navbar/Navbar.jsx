import { Icon, SearchIcon } from '@chakra-ui/icons';
import {
    Accordion,
    Box,
    HStack,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    useColorMode
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { MdFavoriteBorder } from 'react-icons/md';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { SlClose } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import AllCategoryMainNavbar from './AllCategoryMainNavbar';
import PagesAccording from './PagesAccording';
import PopularCategoryAccording from './PopularCategoryAccording';
import { toggleItem } from './cssToggle/CssToggle';
const Navbar = () => {  
    const [isDarkMode, setIsDarkMode] = useState('');
    // toggle color mode
    const  navigate = useNavigate();
    const {toggleColorMode} = useColorMode(); 
    
    const handleFormSubmit = () => {
        alert('Form Submitted')
    }
    
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
    
    
    return (  
        <Box className='application__navbar' zIndex={'3'} p={2}>
            <HStack m='2' display={'flex'} justify={'space-between'}>
                <Box> 
                    <Icon 
                        fontSize={25}  
                        borderRadius={'2xl'} 
                        as={RiShoppingCart2Line} 
                        onClick={()=> navigate('/cart')}
                    />
                    <Icon 
                        fontSize={25} ml='3.5'  
                        borderRadius={'2xl'} 
                        as={MdFavoriteBorder} 
                        onClick={()=> navigate('/wishlist')}
                    />
                    <Icon 
                        fontSize={25} ml='3.5'  
                        borderRadius={'2xl'} 
                        as={CgProfile} 
                        onClick={()=> navigate('/profile')}
                    /> 
                </Box>
                <Box> 
                    <Icon onClick={()=> toggleItem('.application__navbar')} fontSize={25}  borderRadius={'2xl'} as={SlClose} /> 
                </Box> 
            </HStack>
            <Stack mb={3}>  
                <InputGroup> 
                    <InputRightElement 
                        onClick={handleFormSubmit}
                        cursor={'pointer'}
                        children={<SearchIcon/>}
                    /> 
                    <Input type='text' placeholder='Search Here...' />
                </InputGroup>  
            </Stack>
            <Accordion allowMultiple>  
                <AllCategoryMainNavbar/>
                <PopularCategoryAccording/>
                <PagesAccording/> 
            </Accordion>  
        </Box>
    );
};

export default Navbar;