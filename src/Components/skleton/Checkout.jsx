import { Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import numberUid from 'number-uid';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGetAllSingleUserCartProductQuery } from '../../features/cart/api';
import { useApplyCashOnMutation } from '../../features/order/api';
import CalculateTable from '../pages/Checkout/Components/Calculate';

const Checkout = () => {
    const [orderId] = useState(numberUid(10))
    let authInfo = useSelector((state) => state?.auth?.auth);
    let {address, name, email, phone, user__id} = authInfo;
    let {division, district, upazilla, union, street} = address;
    let {data, isSuccess} = useGetAllSingleUserCartProductQuery(localStorage?.getItem('user__id') || ''); 
    const [provideUserId, {data: dataA, isLoading: isLoadingA, isError: isErrorA, isSuccess: isSuccessA, error: errorA}] = useApplyCashOnMutation();

    const navigate = useNavigate(); 
     useEffect(()=>{ 
        if(isSuccessA && dataA && dataA?.length){
            navigate('/profile')
        }
     },[dataA, isLoadingA, isErrorA, isSuccessA, errorA, navigate])
    
    const handlePayConfirm = () => { 
        if(isSuccess && data && data?.products?.length > 0){
            // ID, quantity, price, status, order__id, user__id
            data?.products?.forEach((info)=>{
                let {ID, quantity, infos} = info;
                let {current__price} = infos;
                let postData = {ID, quantity, price: current__price, status: 'pending', order__id: orderId, pay__type: 'online', user__id};
                console.log(postData);
            })
        }
    }

    const handleApplyForCashOneDelivery = () => {
        provideUserId({user__id, order__id: orderId});
    }
    return (
        <React.Fragment> 
                <div className='main__category__product__view__upper__container' style={{paddingTop:'30px',paddingBottom:'30px'}}>
                    <Text fontSize={'40px'} fontWeight={'bold'} letterSpacing={'.5px'} textAlign={'center'} paddingY={'30px'}>Checkout</Text>
                </div>
                <div className='main__category__product__view__upper__container checkout__upper__pay__container'>
                    <div className='checkout__form__main__container'>
                        <div className='details__main__container'>
                            <Box>
                                {/* billing details start*/}
                                <Box>
                                    <Text 
                                        fontSize={'3xl'}
                                        mb={'5'}
                                    >
                                        Shipping Address
                                    </Text>
                                    <Box>
                
                                        <FormControl mb='3'>
                                            <FormLabel>Full Name</FormLabel>
                                            <Input 
                                                isDisabled
                                                value={name}
                                                type='text' 
                                                name='name' 
                                                placeholder={'Enter your full name'}
                                            ></Input>
                                        </FormControl>  
                                        <div className='form__prayer'>
                                            <FormControl mb='3'>
                                                <FormLabel>Email</FormLabel>
                                                <Input 
                                                    isDisabled
                                                    value={email}
                                                    type='text' 
                                                    name='email' 
                                                    placeholder={'****@gmail.com'}
                                                ></Input>
                                            </FormControl>  
                                            
                                            <FormControl mb='3'>
                                                <FormLabel>Phone Number</FormLabel>
                                                <Input 
                                                    isDisabled
                                                    value={phone}
                                                    type='text' 
                                                    name='phone' 
                                                    placeholder={'+88017*********'}
                                                ></Input>
                                            </FormControl> 
                                        </div>
                                        
                                        <div className='form__prayer'>
                                            <FormControl mb='3'>
                                                <FormLabel>Country</FormLabel>
                                                <Input 
                                                    isDisabled
                                                    value={'Bangladesh'}
                                                    type='text' 
                                                    name='country' 
                                                    placeholder={'Bangladesh'}
                                                ></Input>
                                            </FormControl> 
                                            <FormControl mb='3'>
                                                <FormLabel>Division</FormLabel>
                                                <Input 
                                                    isDisabled
                                                    value={division?.name}
                                                    type='text' 
                                                    name='division' 
                                                    placeholder={'Rajshahi'}
                                                ></Input>
                                            </FormControl> 
                                        </div>

                                        <div className='form__prayer'> 
                                            <FormControl mb='3'>
                                                <FormLabel>District</FormLabel>
                                                <Input 
                                                    isDisabled
                                                    value={district?.name}
                                                    type='text' 
                                                    name='district' 
                                                    placeholder={'Chapainawabganj'}
                                                ></Input>
                                            </FormControl> 
                                            <FormControl mb='3'>
                                                <FormLabel>Upazila / Pourashava</FormLabel>
                                                <Input 
                                                    isDisabled
                                                    value={upazilla?.name}
                                                    type='text' 
                                                    name='upozila' 
                                                    placeholder={'Gomostapur'}
                                                ></Input>
                                            </FormControl>
                                        </div>

                                        <div className='form__prayer'> 
                                            <FormControl mb='3'>
                                                <FormLabel>Union</FormLabel>
                                                <Input 
                                                    isDisabled
                                                    value={union?.name}
                                                    type='text' 
                                                    name='union' 
                                                    placeholder={'Chapainawabganj'}
                                                ></Input>
                                            </FormControl> 
                                            <FormControl mb='3'>
                                                <FormLabel>Street Address</FormLabel>
                                                <Input 
                                                    isDisabled
                                                    value={street?.street}
                                                    type='text' 
                                                    name='upozila' 
                                                    placeholder={'Gomostapur'}
                                                ></Input>
                                            </FormControl>
                                        </div> 
                                    </Box>
                                </Box>
                
                                
                            </Box>
                        </div>
                        <div className='payment__container'>
                            <CalculateTable/>
                            <Box mt='3'>  
                                <Button isDisabled={!data?.products?.length > 0} mt="5" onClick={handlePayConfirm} width={'100%'}>Pay Now</Button>
                                <Button isLoading={isLoadingA} isDisabled={!data?.products?.length > 0} mt="5" onClick={handleApplyForCashOneDelivery} width={'100%'}>Apply for Cash on Delivery</Button>
                            </Box>
                        </div>
                    </div>
                </div> 
        </React.Fragment>
    );
};

export default Checkout;