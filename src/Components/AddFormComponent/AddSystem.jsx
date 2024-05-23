import { Box, Button, FormControl, FormLabel, Input, Switch, Text } from '@chakra-ui/react';
import { debounce } from 'lodash';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddSingleSystemMutation, useGetSingleSystemInformationQuery } from '../../features/ShippingAndSystem/shippingAndSystemApi';
const ShippingAndPaymentForm = () => {
    const [debounceLoading, setDebounceLoading] = useState(false);
    const [provideSystemData,{data, isLoading, isSuccess, isError, error}] = useAddSingleSystemMutation();
    const {data: systemData, isSuccess: systemIsSuccess} = useGetSingleSystemInformationQuery();
    const [formData, setFormData] = useState({
        everyOrderShippingFee: 100,
        everyProductShippingFee: 100,
        vatPercent: 10,
        taxPercent: 10,
        allProductShippingFeeInOn: 'true',
        onlinePayment: 'true',
        cashOnDelivery: 'false'
    });

    useEffect(()=>{ 
        if(systemData && systemIsSuccess && systemData?.id ){
            setFormData(()=> systemData);
        }
    },[systemData, systemIsSuccess])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setDebounceLoading(()=> false) 
        provideSystemData(formData);
    };

    const handleDebounceFunc = debounce(handleSubmit, 1000);
    const handleDebounceSubmit = (e) => {
        e.preventDefault(); 
        setDebounceLoading(()=> true);
        handleDebounceFunc(e);
    }
    const navigate = useNavigate();

    useEffect(()=>{ 
        if(isSuccess && data?.id){
            navigate('/profile');
        }
    },[data, isLoading, isSuccess, isError, error, navigate])
    return (
        <Box>
            <div className='main__category__product__view__upper__container' style={{paddingTop:'30px',paddingBottom:'30px'}}>
                <Text fontSize={'40px'} fontWeight={'bold'} letterSpacing={'.5px'} textAlign={'center'} paddingY={'30px'}>System And Shipping</Text>
            </div>
            <Box className='main__category__product__view__upper__container checkout__upper__pay__container'> 
                <form onSubmit={handleDebounceSubmit} className='form__item__view__main__container'>
                    <FormControl id="everyOrderShippingFee" mb={4}>
                        <FormLabel>Every Order Shipping Fee</FormLabel>
                        <Input type="number" name="everyOrderShippingFee" value={formData.everyOrderShippingFee} onChange={handleChange} />
                    </FormControl>
                    <FormControl id="everyProductShippingFee" mb={4}>
                        <FormLabel>Every Product Shipping Fee</FormLabel>
                        <Input type="number" name="everyProductShippingFee" value={formData.everyProductShippingFee} onChange={handleChange} />
                    </FormControl>
                    <FormControl id="vatPercent" mb={4}>
                        <FormLabel>VAT Percent</FormLabel>
                        <Input type="number" name="vatPercent" value={formData.vatPercent} onChange={handleChange} />
                    </FormControl>
                    <FormControl id="taxPercent" mb={4}>
                        <FormLabel>Tax Percent</FormLabel>
                        <Input type="number" name="taxPercent" value={formData.taxPercent} onChange={handleChange} />
                    </FormControl> 
                    <FormControl id="allProductShippingFeeInOn" mb={4}>
                        <FormLabel>All Product Shipping Fee in One</FormLabel>
                        <Switch name="allProductShippingFeeInOn" isChecked={formData.allProductShippingFeeInOn === 'true'} onChange={(e) => handleChange({ target: { name: 'allProductShippingFeeInOn', value: e.target.checked ? 'true' : 'false' } })} />
                    </FormControl>
                    <FormControl id="onlinePayment" mb={4}>
                        <FormLabel>Online Payment</FormLabel>
                        <Switch name="onlinePayment" isChecked={formData.onlinePayment === 'true'} onChange={(e) => handleChange({ target: { name: 'onlinePayment', value: e.target.checked ? 'true' : 'false' } })} />
                    </FormControl>
                    <FormControl id="cashOnDelivery" mb={4}>
                        <FormLabel>Cash on Delivery</FormLabel>
                        <Switch name="cashOnDelivery" isChecked={formData.cashOnDelivery === 'true'} onChange={(e) => handleChange({ target: { name: 'cashOnDelivery', value: e.target.checked ? 'true' : 'false' } })} />
                    </FormControl>
                    <Box display={'flex'} justifyContent={'flex-end'} alignItems={'flex-end'}>
                        <Button 
                            colorScheme="blue" 
                            type="submit"
                            isLoading={debounceLoading || isLoading}
                        >Save</Button>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default ShippingAndPaymentForm;
