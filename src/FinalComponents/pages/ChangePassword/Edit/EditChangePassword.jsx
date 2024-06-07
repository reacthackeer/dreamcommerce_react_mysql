import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React, { memo, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import { debounce } from 'lodash';
import { useSelector } from 'react-redux';
import { useUpdatePasswordByAdminMutation } from '../../../../features/auth/api';
import AdminPageSkeleton from '../../AdminPageSkeletonComponents/AdminPageSkeleton';
const EditChangePassword = memo(() => {
    const {auth} = useSelector((state)=> state.auth);
    const [product, setProduct] = useState({phone: auth?.role !== 1 ? auth?.phone : ''});
    const handleChange = (event) => { 
        const { name, value } = event.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    }; 
    
    const [provideBrandInfo,{data, isLoading, isError, isSuccess, error}] = useUpdatePasswordByAdminMutation();

    const handleSubmit = (e) => {
        e.preventDefault();  
        if(product && product?.phone && product?.new__password && product?.confirm__new__password){
            if(product?.new__password === product?.confirm__new__password){
                provideBrandInfo({phone: product.phone, password: product.new__password})
            }else{ 
                setAddDebounceLoading(()=> false);
                toast.error('Password not same!',{position: 'top-right', duration: 3000})
            }
        }else{
            setAddDebounceLoading(()=> false);
            toast.error('Invalid put request!',{position: 'top-right', duration: 3000})
        }
    } 

    useEffect(()=>{
        if(!isLoading && isError && !isSuccess){ 
            setAddDebounceLoading(()=> false);
            toast.error(error?.data?.error?.message ? error?.data?.error?.message : 'There was a server side error!',{duration: 3000, position: 'top-right'})
        }
        if(!isError && !isLoading && isSuccess){
            setAddDebounceLoading(()=> false);
            if(data?.status__code === 200){
                document.querySelectorAll('input').forEach((info)=>{
                    info.value=''
                })
                toast.success(data?.message,{duration: 3000, position: 'top-right'}); 
                setProduct({});
                
            }
        }
    },[data, isLoading, isError, isSuccess, error])
    
    const [addDebounceLoading, setAddDebounceLoading] = useState(false);
    const handleSubmitDebounceFunction = debounce(handleSubmit, 1000);

    const handleStartSubmit = (e) => {
        e.preventDefault();
        setAddDebounceLoading(()=> true);
        handleSubmitDebounceFunction(e);
    }

    console.log(auth);

    return ( 
        <AdminPageSkeleton> 
            <div> 
                <form onSubmit={handleStartSubmit}> 
                    <Box className='data__view__form'>
                        <FormControl id="phone" isRequired>
                            <FormLabel>Phone Number</FormLabel>
                            <Input
                                size='sm'
                                type="tel"
                                isDisabled={auth?.role !== 1}
                                placeholder='Enter user phone number'
                                name="phone"
                                value={product.phone}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="new__password" isRequired>
                            <FormLabel>New password</FormLabel>
                            <Input
                                size='sm'
                                type='password'
                                placeholder='Enter new password'
                                name="new__password"
                                value={product.new__password}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="confirm__new__password" isRequired>
                            <FormLabel>Confirm new password</FormLabel>
                            <Input
                                size='sm'
                                type='password'
                                placeholder='Enter confirm new password'
                                name="confirm__new__password"
                                value={product.confirm__new__password}
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

export default EditChangePassword;