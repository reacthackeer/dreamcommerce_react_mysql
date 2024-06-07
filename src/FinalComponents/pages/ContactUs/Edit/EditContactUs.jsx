import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React, { memo, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import { debounce } from 'lodash';
import { useAddSingleContactUsMutation, useGetSingleContactUsQuery } from '../../../../features/ShippingAndSystem/shippingAndSystemApi';
import AdminPageSkeleton from '../../AdminPageSkeletonComponents/AdminPageSkeleton';
const EditContactUs = memo(() => {

    const [product, setProduct] = useState({});
    
    const handleChange = (event) => { 
        const { name, value } = event.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    }; 
    
    const [provideBrandInfo,{data, isLoading, isError, isSuccess, error}] = useAddSingleContactUsMutation();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        provideBrandInfo(product);
    } 

    useEffect(()=>{
        if(!isLoading && isError && !isSuccess){ 
            setAddDebounceLoading(()=> false);
            toast.error(error?.data?.error?.message ? error?.data?.error?.message : 'There was a server side error!',{duration: 3000, position: 'top-right'})
        }
        if(!isError && !isLoading && isSuccess){
            setAddDebounceLoading(()=> false);
            toast.success('Successfully updated!',{position: 'top-right', duration: 3000})
        }
    },[data, isLoading, isError, isSuccess, error])
    
    const [addDebounceLoading, setAddDebounceLoading] = useState(false);
    const handleSubmitDebounceFunction = debounce(handleSubmit, 1000);

    const handleStartSubmit = (e) => {
        e.preventDefault();
        setAddDebounceLoading(()=> true);
        handleSubmitDebounceFunction(e);
    }
    
    const {data:cData, isLoading: cIsLoading, isSuccess: cIsSuccess, isError: cIsError} = useGetSingleContactUsQuery();
    
    useEffect(()=> {
        if(cIsSuccess && cData && cData?.name){
            setProduct(()=> cData)
        }
    },[cData, cIsError, cIsLoading, cIsSuccess])
    return ( 
        <AdminPageSkeleton> 
            
            <div> 
                <form onSubmit={handleStartSubmit}> 
                    <Box className='data__view__form'>
                        <FormControl id="name" isRequired>
                            <FormLabel>Store Name</FormLabel>
                            <Input
                                size='sm'
                                type="text"
                                placeholder='Enter store name'
                                name="name"
                                value={product.name}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="address" isRequired>
                            <FormLabel>Store Address</FormLabel>
                            <Input
                                size='sm'
                                type='text'
                                placeholder='Enter store address'
                                name="address"
                                value={product.address}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="phone" isRequired>
                            <FormLabel>Store Phone Number</FormLabel>
                            <Input
                                size='sm'
                                type='text'
                                placeholder='Enter store phone'
                                name="phone"
                                value={product.phone}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="website" isRequired>
                            <FormLabel>store website</FormLabel>
                            <Input
                                size='sm'
                                type='text'
                                placeholder='Enter store website address'
                                name="website"
                                value={product.website}
                                onChange={handleChange}
                            />
                        </FormControl> 
                        <FormControl id="facebook" isRequired>
                            <FormLabel>Facebook Link</FormLabel>
                            <Input
                                size='sm'
                                type='text'
                                placeholder='Enter facebook link'
                                name="facebook"
                                value={product.facebook}
                                onChange={handleChange}
                            />
                        </FormControl>  
                        <FormControl id="youtube" isRequired>
                            <FormLabel>Youtube link</FormLabel>
                            <Input
                                size='sm'
                                type='text'
                                placeholder='Enter youtube link'
                                name="youtube"
                                value={product.youtube}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="twitter" isRequired>
                            <FormLabel>Twitter OR X Link</FormLabel>
                            <Input
                                size='sm'
                                type='text'
                                placeholder='Enter twitter or x link'
                                name="twitter"
                                value={product.twitter}
                                onChange={handleChange}
                            />
                        </FormControl> 
                        <FormControl id="linkedin" isRequired>
                            <FormLabel>Linkedin Link</FormLabel>
                            <Input
                                size='sm'
                                type='text'
                                placeholder='Enter linkedin link'
                                name="linkedin"
                                value={product.linkedin}
                                onChange={handleChange}
                            />
                        </FormControl>  
                        <FormControl id="email" isRequired>
                            <FormLabel>Email Address</FormLabel>
                            <Input
                                size='sm'
                                type='email'
                                placeholder='Enter email link'
                                name="email"
                                value={product.email}
                                onChange={handleChange}
                            />
                        </FormControl> 
                        <FormControl id="instagram" isRequired>
                            <FormLabel>Instagram Address</FormLabel>
                            <Input
                                size='sm'
                                type='text'
                                placeholder='Enter instagram link'
                                name="instagram"
                                value={product.instagram}
                                onChange={handleChange}
                            />
                        </FormControl> 
                    </Box>

                    <div className='data__form__submit__button'>
                        <Button 
                        colorScheme="green" 
                        variant={'outline'}
                        type="submit"
                        size='sm'
                        isLoading={isLoading || addDebounceLoading}
                        >
                            Save
                        </Button>  
                    </div>
                </form>  
            </div> 
        </AdminPageSkeleton>
    );
});

export default EditContactUs;