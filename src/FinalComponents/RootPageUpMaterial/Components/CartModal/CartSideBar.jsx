import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { toggleItem } from '../Navbar/cssToggle/CssToggle';
import SingleCartProduct from './childComponents/SingleCartProductItem';
const CartSideBar = () => {
    const navigate = useNavigate();

    
    
    return (
        <Box className='card__modal__upper__container' p={3}> 
        
            <VStack 

                    position={'sticky'} 
                    width={'100%'}  
                    left={'0'}   
                    py='2' 

                    top={'-12px'}
                    display={'grid'}
            > 
                <HStack justify={'space-between'}>    
                    <Button 
                        colorScheme='teal' 
                        borderRadius={'full'} 
                        size='xs'
                        leftIcon={<BsArrowLeft/>}
                        onClick={()=> navigate({pathname: '/cart'})}
                    >
                        Cart Page
                    </Button>
                    <Button 
                        onClick={()=> toggleItem('.card__modal__upper__container')}
                        colorScheme='teal' 
                        borderRadius={'full'} 
                        size='xs'
                        rightIcon={<BsArrowRight/>}
                    >
                        Close 
                    </Button>
                </HStack>

            </VStack>
            <VStack> 
                <SingleCartProduct/>
                <SingleCartProduct/>
                <SingleCartProduct/>
                <SingleCartProduct/>
                <SingleCartProduct/>
                <SingleCartProduct/>
                <SingleCartProduct/> 
                <SingleCartProduct/> 
                <SingleCartProduct/> 
                <SingleCartProduct/> 
                
                <SingleCartProduct/> 
                <SingleCartProduct/> 
                <SingleCartProduct/> 
                <SingleCartProduct/> 
                <SingleCartProduct/> 
                <SingleCartProduct/> 
                <SingleCartProduct/>   
            </VStack>
            <VStack 
                position={'sticky'} 
                width={'100%'} 
                borderRadius={'md'} 
                left={'0'} 
                className='system__bg'
                py='3' 
                bottom={'-12px'}
                display={'grid'}
            >
                <HStack justify={'space-between'}>
                    <Text fontSize={'xl'}>Subtotal:</Text>
                    <Text fontSize={'xl'}>1200.00 TK</Text>
                </HStack>
                <HStack justify={'space-between'} mt='4'>  
                    <Button 
                        variant={'outline'}
                        fontSize={'sm'}
                        onClick={()=> navigate('/cart')}
                    >
                        Manage Cart
                    </Button>
                    <Button
                        variant={'outline'}
                        fontSize={'sm'}
                        onClick={()=> navigate('/checkout')}
                    >
                        Check Out
                    </Button>
                </HStack>

            </VStack>
        </Box>
    );
};

export default CartSideBar;