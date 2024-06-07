import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGetSingleUserPriceCalculatorQuery } from '../../../../features/ShippingAndSystem/shippingAndSystemApi';
import { setCartProduct } from '../../../../features/auth/authSlice';
import { useGetAllSingleUserCartProductQuery } from '../../../../features/cart/api';
import { toggleItem } from '../Navbar/cssToggle/CssToggle';
import SingleCartProduct from './childComponents/SingleCartProductItem';
const CartSideBar = () => {

    const {cartProduct} = useSelector((state)=> state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let {data, isLoading, isError, error, isSuccess} = useGetAllSingleUserCartProductQuery(localStorage?.getItem('user__id') || ''); 
    const {data:PriceData, isSuccess:PriceDataIsSuccess} = useGetSingleUserPriceCalculatorQuery(localStorage?.getItem('user__id') || '');

    useEffect(()=>{
        if(!isError && !isLoading && isSuccess && data && data?.products?.length){ 
            dispatch(setCartProduct(data.products))
        }
    },[data, isLoading, isError, error, isSuccess, dispatch])
    
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
            {
                cartProduct && cartProduct.length &&
            <VStack> 
                {
                    cartProduct.map((info, index) => <SingleCartProduct key={index} infos={info}/>)
                }
            </VStack>
        }
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
            {
                PriceData && PriceDataIsSuccess &&
                <HStack justify={'space-between'}>
                    <Text fontSize={'xl'}>Total:</Text>
                    <Text fontSize={'xl'}>{PriceData.allTotal} TK</Text>
                </HStack>
            }
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