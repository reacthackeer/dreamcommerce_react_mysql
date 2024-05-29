import { Box, HStack, Icon, Image } from '@chakra-ui/react';
import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { SlMenu } from 'react-icons/sl';
import { Link } from 'react-router-dom';

const VisibleNavbar = () => {

    const toggleItem =  (itemSelector) => {
        const homePage = document.querySelector('.mobile__view__container');
        if(homePage){
            homePage.classList.toggle('active');
        }

        let selectedItem = document.querySelector(itemSelector);
        if(selectedItem){
            selectedItem.classList.toggle('active')
        }
    }
    
    
    return (
        <HStack className='visible__navbar__hidden__container main__category__product__view__upper__container'>  
            <Box 
                display='flex' 
                alignItems={'center'}
            >
                <Icon 
                    className='custom__color'  
                    fontSize={30} 
                    onClick={()=> toggleItem('.application__navbar')} 
                    as={SlMenu}
                />
            </Box> 
            <Box>
                <Link to='/'>
                    <Image 
                        h='45px' 
                        src='/logo.png' 
                        alt='logo'
                    />
                </Link>
            </Box>
            <Box>
                <Icon 
                    onClick={()=> toggleItem('.card__modal__upper__container')} 
                    fontSize={30} 
                    as={RiShoppingCart2Line} 
                />

                <Icon 
                    fontSize={30} 
                    ml='2' as={IoIosSearch} 
                    onClick={()=> toggleItem('.search__modal__upper__container')}
                />
            </Box> 
        </HStack>
    );
};

export default VisibleNavbar;