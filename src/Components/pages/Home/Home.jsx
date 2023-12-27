import { Box, Button, HStack, Icon, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import { MdOutlineGppGood, MdOutlineKeyboardReturn } from 'react-icons/md';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { Link as RLink, useNavigate } from 'react-router-dom';
import SingleCartItem from './Components/SignleCartItem';
const Home = () => {
    
    const navigate = useNavigate(); 
    const brandArray = [
        {
            link: '/brands/amd',
            img: '/brand/amd.webp'
        },
        {
            link: '/brands/apple',
            img: '/brand/apple.webp'
        },
        {
            link: '/brands/corsair',
            img: '/brand/corsair.webp'
        },
        {
            link: '/brands/gigabyte',
            img: '/brand/gigabyte.webp'
        },
        {
            link: '/brands/hp',
            img: '/brand/hp.webp'
        },
        {
            link: '/brands/intel',
            img: '/brand/intel.webp'
        },
        {
            link: '/brands/lg',
            img: '/brand/lg.webp'
        },
        {
            link: '/brands/microsoft',
            img: '/brand/microsoft.webp'
        },
        {
            link: '/brands/msi',
            img: '/brand/msi.webp'
        },
        {
            link: '/brands/samsung',
            img: '/brand/samsung.webp'
        },
        {
            link: '/brands/thermaltake',
            img: '/brand/thermaltake.webp'
        },
    ]
    const categoryArray = [
        {   
            img: '/category/gaming.png',
            link: '/categories/gaming',
            name: 'Gaming'
        },
        {   
            img: '/category/camera.png',
            link: '/categories/camera',
            name: 'Camera'
        },
        {   
            img: '/category/processors.png',
            link: '/categories/processor',
            name: 'Processor'
        },
        {   
            img: '/category/apple.png',
            link: '/categories/watches',
            name: 'Watches'
        },
        {   
            img: '/category/graphics.png',
            link: '/categories/graphics-card',
            name: 'Graphics Card'
        },
        {   
            img: '/category/laptop.png',
            link: '/categories/laptop',
            name: 'Laptop'
        },
        {   
            img: '/category/headphone.png',
            link: '/categories/headphone',
            name: 'Headphone'
        },
        {   
            img: '/category/keyboard.png',
            link: '/categories/keyboard',
            name: 'Keyboard'
        },
        {   
            img: '/category/monitor.png',
            link: '/categories/monitor',
            name: 'Monitor'
        },
        {   
            img: '/category/mouse.png',
            link: '/categories/mouse',
            name: 'Mouse'
        },
        {   
            img: '/category/printer.png',
            link: '/categories/printer',
            name: 'Printer'
        },
    ]
    return (
        <Box className='home__upper__container'> 
            <Box className='brand__container'>
                <HStack justify={'space-between'} className='padding__x'>
                    <Text fontSize={'xl'}>Shop by Brand</Text> 
                </HStack> 
                <Box className='brand__main__container padding__home grid__home bg__success'> 
                    {
                        brandArray.map((info, index)=>{
                            return  <Box className='brand__item' key={index}>
                                        <Link as={RLink} to={{pathname: info.link, query:{limit: 20}}}>
                                            <Image src={info.img}/>
                                        </Link>
                                    </Box> 
                        })
                    }
                    <Box className='brand__item'>
                            <Button 
                            variant={'link'}
                            onClick={()=> navigate('/brands')}
                        >
                            View All Brands
                            </Button>
                    </Box> 
                </Box>  
            </Box>
            <Box className='brand__container'>
                <HStack justify={'space-between'} className='padding__x'>
                    <Text fontSize={'xl'}>Featured Categories</Text> 
                </HStack> 
                <Box className='brand__main__container padding__home grid__home'> 
                    {
                        categoryArray.map((info, index)=>{
                            return  <Box className='brand__item' key={index}>
                                        <Link as={RLink} to={info.link}>
                                            <Image src={info.img}/>
                                        </Link>
                                        <Link
                                            as={RLink} 
                                            to={info.link} className='category__intro__text'
                                        
                                        >
                                            {info.name}
                                        </Link>
                                    </Box> 
                        })
                    }
                    <Box className='brand__item'>
                            <Button 
                            variant={'link'}
                            onClick={()=> navigate('/categories')}
                        >
                            View All Categories
                            </Button>
                    </Box> 
                </Box>    
            </Box>
            <Box className='our__best__feature'>
                <Box className='signle__best__feature'>
                    <Box className='icon__box'>
                        <Icon fontSize={'50px'} as={FaShippingFast}/> 
                    </Box>
                    <Box className='intro__box'>
                        <Text fontSize={'2xl'}>Free Shipping</Text>
                        <Text fontSize={'medium'}>When ordering over $200</Text>
                    </Box>
                </Box> 
                <Box className='signle__best__feature'>
                    <Box className='icon__box'>
                        <Icon fontSize={'50px'} as={MdOutlineKeyboardReturn}/> 
                    </Box>
                    <Box className='intro__box'>
                        <Text fontSize={'2xl'}>Free Return</Text>
                        <Text fontSize={'medium'}>Get Return within 30 days</Text>
                    </Box>

                </Box> 
                <Box className='signle__best__feature'>
                    <Box className='icon__box'>
                        <Icon fontSize={'50px'} as={RiSecurePaymentLine}/> 
                    </Box>
                    <Box className='intro__box'>
                        <Text fontSize={'2xl'}>Secure Payment</Text>
                        <Text fontSize={'medium'}>100% Secure Online Payment</Text>
                    </Box>
                </Box> 
                <Box className='signle__best__feature'>
                    <Box className='icon__box'>
                        <Icon fontSize={'50px'} as={MdOutlineGppGood}/> 
                    </Box>
                    <Box className='intro__box'>
                        <Text fontSize={'2xl'}>Best Quality</Text>
                        <Text fontSize={'medium'}>Original Product Guarenteed</Text>
                    </Box>
                </Box> 
 
  




            </Box>
            <Box className='cart__view__upper__container'>
                <Box className='cart__view__container grid__home'> 
                    <SingleCartItem/>
                    <SingleCartItem/>
                    <SingleCartItem/>
                    <SingleCartItem/>
                    <SingleCartItem/>
                    <SingleCartItem/>
                    <SingleCartItem/>
                    <SingleCartItem/>
                    <SingleCartItem/>
                    <SingleCartItem/>
                    <SingleCartItem/>
                    <SingleCartItem/>
                    <SingleCartItem/>
                    <SingleCartItem/>
                </Box>
            </Box>
        </Box>
    );
};

export default Home;