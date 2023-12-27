import { Box, Button, Checkbox, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import TopLinkHeader from '../../TopLinkHeader';
import CalculateTable from './Components/Calculate';

const CheckoutPage = () => {
    const [shipSameAddress, setShipSameAddress] = useState(true);
    const [saveAddress, setSaveAddress] = useState(false);
    const handleChangleChecked = ({target:{checked}}) => {
        setShipSameAddress(!checked);
    }
    return (        
        <Box py={5} px={2}>
            <TopLinkHeader
                showIntro={true} 
                linksArray={[
                    {name: 'Home', link: '/'}, 
                    {name: 'Checkout', link: '/checkout'}
                ]} 
                introText={'Checkout'}
            />
            {
                !saveAddress &&
        
            <Box>
                {/* billing details start*/}
                <Box>
                    <Text fontSize={'xl'}>
                        Billing Details
                    </Text>
                    <Box p={3}>

                        <FormControl mb='3'>
                            <FormLabel>Full Name</FormLabel>
                            <Input 
                                type='text' 
                                name='name' 
                                placeholder={'Enter your full name'}
                            ></Input>
                        </FormControl>  
                        
                        <FormControl mb='3'>
                            <FormLabel>Email</FormLabel>
                            <Input 
                                type='text' 
                                name='email' 
                                placeholder={'****@gmail.com'}
                            ></Input>
                        </FormControl> 

                        <FormControl mb='3'>
                            <FormLabel>Phone Number</FormLabel>
                            <Input 
                                type='text' 
                                name='phone' 
                                placeholder={'+88017*********'}
                            ></Input>
                        </FormControl> 
                        <FormControl mb='3'>
                            <FormLabel>Country</FormLabel>
                            <Input 
                                type='text' 
                                name='country' 
                                placeholder={'Bangladesh'}
                            ></Input>
                        </FormControl> 
                        <FormControl mb='3'>
                            <FormLabel>Division</FormLabel>
                            <Input 
                                type='text' 
                                name='division' 
                                placeholder={'Rajshahi'}
                            ></Input>
                        </FormControl> 
                        <FormControl mb='3'>
                            <FormLabel>District</FormLabel>
                            <Input 
                                type='text' 
                                name='district' 
                                placeholder={'Chapainawabganj'}
                            ></Input>
                        </FormControl> 
                        <FormControl mb='3'>
                            <FormLabel>Upazila / Pourashava</FormLabel>
                            <Input 
                                type='text' 
                                name='upozila' 
                                placeholder={'Gomostapur'}
                            ></Input>
                        </FormControl>
                        <FormControl mb='3'>
                            <FormLabel>Street Address</FormLabel>
                            <Input 
                                type='text' 
                                name='upozila' 
                                placeholder={'Gomostapur'}
                            ></Input>
                        </FormControl>
                        <FormControl mb='3'>
                            <FormLabel>Street Address</FormLabel>
                            <Input 
                                type='text' 
                                name='upozila' 
                                placeholder={'Gomostapur'}
                            ></Input>
                        </FormControl>
                    </Box>
                </Box>

                {/* shipping details start*/}
                
                <Box>
                    <Text 
                        fontSize={'xl'}
                    >
                        Shipping Details
                    </Text> 
                    <Checkbox 
                        mt='2' 
                        onChange={handleChangleChecked}
                    >Ship to a different address</Checkbox>
                </Box> 
                {
                    !shipSameAddress &&
            
                <Box> 
                    <Box p={3}>

                        <FormControl mb='3'>
                            <FormLabel>Full Name</FormLabel>
                            <Input 
                                type='text' 
                                name='name' 
                                placeholder={'Enter your full name'}
                            ></Input>
                        </FormControl>  
                        
                        <FormControl mb='3'>
                            <FormLabel>Email</FormLabel>
                            <Input 
                                type='text' 
                                name='email' 
                                placeholder={'****@gmail.com'}
                            ></Input>
                        </FormControl> 

                        <FormControl mb='3'>
                            <FormLabel>Phone Number</FormLabel>
                            <Input 
                                type='text' 
                                name='phone' 
                                placeholder={'+88017*********'}
                            ></Input>
                        </FormControl> 
                        <FormControl mb='3'>
                            <FormLabel>Country</FormLabel>
                            <Input 
                                type='text' 
                                name='country' 
                                placeholder={'Bangladesh'}
                            ></Input>
                        </FormControl> 
                        <FormControl mb='3'>
                            <FormLabel>Division</FormLabel>
                            <Input 
                                type='text' 
                                name='division' 
                                placeholder={'Rajshahi'}
                            ></Input>
                        </FormControl> 
                        <FormControl mb='3'>
                            <FormLabel>District</FormLabel>
                            <Input 
                                type='text' 
                                name='district' 
                                placeholder={'Chapainawabganj'}
                            ></Input>
                        </FormControl> 
                        <FormControl mb='3'>
                            <FormLabel>Upazila / Pourashava</FormLabel>
                            <Input 
                                type='text' 
                                name='upozila' 
                                placeholder={'Gomostapur'}
                            ></Input>
                        </FormControl>
                        <FormControl mb='3'>
                            <FormLabel>Street Address</FormLabel>
                            <Input 
                                type='text' 
                                name='upozila' 
                                placeholder={'Gomostapur'}
                            ></Input>
                        </FormControl>
                    </Box>
                </Box>
                
                }
                <Box 
                    p='4'
                    
                >
                    <Button onClick={()=> setSaveAddress(!saveAddress)} width={'100%'}>Save Address</Button>
                </Box>
            </Box>  }
            <CalculateTable/>
            <Box py={5} px={3}>
                <Box>  
                    <Box display={'flex'}>
                        <Checkbox colorScheme='red'/>
                        <Text fontSize={'large'} ml='3'>Direct Bank Transfer</Text>
                    </Box>
                    <Text pl='8' fontSize={'xs'}>Make your payment directly into our bank account. Please use your Order ID as the payment reference.</Text>
                </Box>  
                <Box mt='3'>  
                    <Box display={'flex'}>
                        <Checkbox colorScheme='red'/>
                        <Text fontSize={'large'} ml='3'>Cash on Delivery</Text>
                    </Box> 
                </Box> 
                <Box mt='3'>  
                    <Box display={'flex'}>
                        <Checkbox colorScheme='red'/>
                        <Text fontSize={'large'} ml='3'>Credit/Debit Cards or Paypal</Text>
                    </Box> 
                </Box> 
                <Box mt='3'>  
                    <Box display={'flex'}>
                        <Checkbox colorScheme='red'/>
                        <Text fontSize={'large'} ml='3'>Mobile Banking</Text>
                    </Box> 
                </Box>
                <Box mt='3'>  
                    <Box display={'flex'}>
                        <Checkbox colorScheme='red'/>
                        <Text fontSize={'large'} ml='3'>Direct Crypto Transfer</Text>
                    </Box> 
                </Box>
                <Button mt="5" onClick={()=>toast.success('Successfully order submitted')} width={'100%'}>Plase Order Now</Button>
            </Box>
        </Box>
    );
};

export default CheckoutPage;