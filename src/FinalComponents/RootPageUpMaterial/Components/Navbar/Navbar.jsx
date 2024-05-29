import { Icon, SearchIcon } from '@chakra-ui/icons';
import {
    Accordion,
    AccordionItem,
    AccordionPanel,
    Box,
    HStack,
    Input,
    InputGroup,
    InputRightElement,
    Link,
    Stack,
    useColorMode
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { MdFavoriteBorder } from 'react-icons/md';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { SlClose } from 'react-icons/sl';
import { Link as RLink, useNavigate } from 'react-router-dom';
import AdminAccording from './AdminAccording';
import AllCategory from './AllCategory';
import PagesAccording from './PagesAccording';
import AccordingButtonGroup from './childComponents/AccordingButtonGroup';
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
    

    const handlePushSpecificLocation = (path) => {
        navigate({pathname: path})   
    }
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
                    <Icon onClick={()=> toggleColorMode(isDarkMode ? 'light' : 'dark')} fontSize={25} ml='3.5'  borderRadius={'2xl'} as={!isDarkMode ? BsMoonStars : BsSun} />
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
                <AllCategory/>
                <AccordionItem>
                    {({ isExpanded }) => (
                        <> 
                            <AccordingButtonGroup title={'Popular Category'} isExpanded={isExpanded}/>
                            <AccordionPanel pb={4}>   
                                <Link className='row__link__item' as={RLink} to='/categories/Keyboard'>Keyboard</Link>
                                <Link className='row__link__item' as={RLink} to='/categories/Mouse'>Mouse</Link>
                                <Link className='row__link__item' as={RLink} to='/categories/Headphone'>Headphone</Link>
                                <Link className='row__link__item' as={RLink} to='/categories/Laptop'>Laptop</Link>
                                <Link className='row__link__item' as={RLink} to='/categories/Desktop'>Desktop</Link> 
                                <Link className='row__link__item' as={RLink} to='/categories/Earphone'>Earphone</Link> 
                                <Link className='row__link__item' as={RLink} to='/categories/Speaker'>Speaker</Link> 
                                <Link className='row__link__item' as={RLink} to='/categories/Gaming'>Gaming</Link> 
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem> 
                <PagesAccording/>
                <AdminAccording/>
            </Accordion>  
        </Box>
    );
};

export default Navbar;