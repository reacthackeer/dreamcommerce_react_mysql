import { Box, Button, HStack, Input } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopLinkHeader from '../../TopLinkHeader';
import CalculateTable from './components/CalculateTable';
import ProductTable from './components/productTable';

const CartPage = () => {
    const navigate = useNavigate();
    return ( 
        <Box py={5} px={2}>
            <TopLinkHeader
                showIntro={true} 
                linksArray={[
                    {name: 'Home', link: '/'}, 
                    {name: 'Cart', link: '/cart'}
                ]} 
                introText={'Your Cart'}
            />
            <Box className='cart__container__wrapper'>
                <Box className='cart__container'>
                    <ProductTable/>
                </Box>
            </Box>
            
            <Box mt='4'>
                <HStack>
                    <Input placeholder='Discount code'></Input>
                    <Button>Apply</Button>
                </HStack>   
            </Box>
            <CalculateTable/>
            <HStack mt='3'>
                <Button onClick={()=> navigate('/')}>Continue Shopping</Button>
                <Button onClick={()=> navigate('/checkout')}>Proceed to Checkout</Button>
            </HStack>
            <Box>
            <CalculateTable/>
            </Box>
        </Box>
    );
};

export default CartPage;