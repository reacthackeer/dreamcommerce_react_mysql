import { Box, Button, HStack, Icon, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { BsArrowsFullscreen, BsStar } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { Link as RLink } from 'react-router-dom';
const SingleCartItem = ({infos}) => { 
    return ( 
        <Box className='card__item'>
            <Image src='/product.webp'/>
            <div className='link__text__item'>
                <Link 
                as={RLink} 
                to='/single-product-details'
                fontSize={'sm'}
                textAlign={'center'}
                display={'block'}
                overflow={'hidden'}
                textOverflow={'ellipsis'}
                className='link__over__text__item'
                py={'2'}
            >
                Xoggle aute et pariatur adipisicing nostrud et excepteur  adipisicing nostrud et excepteur 
            </Link> 
            </div>
            <HStack display='flex' justify={'center'}>
                <Icon color={'tomato'} as={BsStar}/>
                <Icon color={'tomato'} as={BsStar}/>
                <Icon color={'tomato'} as={BsStar}/>
                <Icon color={'tomato'} as={BsStar}/>
                <Icon color={'tomato'} as={BsStar}/>
            </HStack>
            <HStack className='price__section'> 
                <Text 
                    color={'red'} 
                    textDecoration={'line-through'}
                    fontSize={'small'}
                >120.00 TK</Text>
                <Text fontSize={'small'}>100.00 TK</Text>
            </HStack>
            <HStack className='button__section'>
                <Button padding={'0'}>
                    <Icon as={RiShoppingCart2Line}/>
                </Button> 
                <Button padding={'0'}>
                    <Icon as={MdFavoriteBorder}/>
                </Button> 
                <Button padding={'0'}>
                    <Icon as={BsArrowsFullscreen}/>
                </Button> 
            </HStack>
        </Box> 
    );
};

export default SingleCartItem;