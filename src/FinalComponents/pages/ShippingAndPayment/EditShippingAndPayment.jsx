import { Box, Button, FormControl, FormLabel, Input, Switch } from '@chakra-ui/react';
import { debounce } from 'lodash';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAddSingleSystemMutation, useGetSingleSystemInformationQuery } from '../../../features/ShippingAndSystem/shippingAndSystemApi';
import AdminPageSkeleton from '../AdminPageSkeletonComponents/AdminPageSkeleton';
const EditShippingAndPayment = () => {
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
            toast.success('Successfully updated!', {duration: 3000, position: 'top-right'})
        }
    },[data, isLoading, isSuccess, isError, error, navigate])
    return (
        <AdminPageSkeleton> 
            <Box> 
                <form onSubmit={handleDebounceSubmit}>
                    <Box className='data__view__form'>
                        <FormControl id="everyOrderShippingFee" mb={4}>
                            <FormLabel>Every Order Shipping Fee</FormLabel>
                            <Input size='sm' type="number" name="everyOrderShippingFee" value={formData.everyOrderShippingFee} onChange={handleChange} />
                        </FormControl>
                        <FormControl id="everyProductShippingFee" mb={4}>
                            <FormLabel>Every Product Shipping Fee</FormLabel>
                            <Input size='sm' type="number" name="everyProductShippingFee" value={formData.everyProductShippingFee} onChange={handleChange} />
                        </FormControl>
                        <FormControl id="vatPercent" mb={4}>
                            <FormLabel>VAT Percent</FormLabel>
                            <Input size='sm' type="number" name="vatPercent" value={formData.vatPercent} onChange={handleChange} />
                        </FormControl>
                        <FormControl id="taxPercent" mb={4}>
                            <FormLabel>Tax Percent</FormLabel>
                            <Input size='sm' type="number" name="taxPercent" value={formData.taxPercent} onChange={handleChange} />
                        </FormControl> 
                        <FormControl id="allProductShippingFeeInOn" mb={4}>
                            <FormLabel>All Product Shipping Fee in One</FormLabel>
                            <Switch size='sm' name="allProductShippingFeeInOn" isChecked={formData.allProductShippingFeeInOn === 'true'} onChange={(e) => handleChange({ target: { name: 'allProductShippingFeeInOn', value: e.target.checked ? 'true' : 'false' } })} />
                        </FormControl>
                        <FormControl id="onlinePayment" mb={4}>
                            <FormLabel>Online Payment</FormLabel>
                            <Switch size='sm' name="onlinePayment" isChecked={formData.onlinePayment === 'true'} onChange={(e) => handleChange({ target: { name: 'onlinePayment', value: e.target.checked ? 'true' : 'false' } })} />
                        </FormControl>
                        <FormControl id="cashOnDelivery" mb={4}>
                            <FormLabel>Cash on Delivery</FormLabel>
                            <Switch size='sm' name="cashOnDelivery" isChecked={formData.cashOnDelivery === 'true'} onChange={(e) => handleChange({ target: { name: 'cashOnDelivery', value: e.target.checked ? 'true' : 'false' } })} />
                        </FormControl>
                    </Box>
                    <Box className='data__form__submit__button'>
                        <Button 
                            colorScheme="blue" 
                            size='sm'
                            type="submit"
                            isLoading={debounceLoading || isLoading}
                        >Save</Button>
                    </Box>
                </form>
            </Box>
        </AdminPageSkeleton>
    );
};

export default EditShippingAndPayment;
