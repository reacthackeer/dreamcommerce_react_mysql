import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React, { memo, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import { debounce } from 'lodash';
import { useSelector } from 'react-redux';
import { uid } from 'uid';
import { useAdminRegisterUserMutation } from '../../../../features/auth/api';
import AdminPageSkeleton from '../../AdminPageSkeletonComponents/AdminPageSkeleton';
const AddSubModerator = memo(() => {
    const {auth} = useSelector((state)=> state.auth); 
    const [product, setProduct] = useState({store__id: auth && auth?.designation === 'admin' && auth?.role === 1 ? '' : auth.store__id, store__email: auth && auth?.designation === 'admin' && auth?.role === 1 ? '' : auth.store__email});
    
    const handleChange = (event) => { 
        const { name, value } = event.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    }; 
    
    const [provideBrandInfo,{data, isLoading, isError, isSuccess, error}] = useAdminRegisterUserMutation();

    const handleSubmit = (e) => {
        e.preventDefault();  
        if(product.password === product.confirm__password){
            let userInfo = {...product, user__id: uid(13), role: 6, designation: 'subModerator'};
            provideBrandInfo(userInfo);
        }else{
            toast.error('Password and confirm password not matched!',{position: 'top-right'})
        }
        setAddDebounceLoading(()=> false);
    } 

    useEffect(()=>{
        if(!isLoading && isError && !isSuccess){ 
            setAddDebounceLoading(()=> false);
            toast.error(error?.data?.error?.message ? error?.data?.error?.message : 'There was a server side error!',{duration: 3000, position: 'top-right'})
        }
        if(!isError && !isLoading && isSuccess){
            setAddDebounceLoading(()=> false); 
            if(data?.status__code === 201){
                document.querySelectorAll('input').forEach((info)=>{
                    info.value=''
                })

                toast.success('Successfully user admin created',{duration: 3000, position: 'top-right'}); 
                setProduct({store__id: auth && auth?.designation === 'admin' && auth?.role === 1 ? '' : auth.store__id, store__email: auth && auth?.designation === 'admin' && auth?.role === 1 ? '' : auth.store__email});
                
            }
        }
    },[data, isLoading, isError, isSuccess, error, auth])
    
    const [addDebounceLoading, setAddDebounceLoading] = useState(false);
    const handleSubmitDebounceFunction = debounce(handleSubmit, 1000);

    const handleStartSubmit = (e) => {
        e.preventDefault();
        setAddDebounceLoading(()=> true);
        handleSubmitDebounceFunction(e);
    }

    return ( 
        <AdminPageSkeleton> 
            <div> 
                <form onSubmit={handleStartSubmit}> 
                    <Box className='data__view__form'> 
                        <FormControl id="name" isRequired>
                            <FormLabel>Name</FormLabel>
                            <Input
                                size='sm'
                                type='text'
                                placeholder='Enter admin name'
                                name="name"
                                value={product.name}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input
                                size='sm'
                                type='email'
                                placeholder='Enter admin email'
                                name="email"
                                value={product.email}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="phone" isRequired>
                            <FormLabel>Phone</FormLabel>
                            <Input
                                size='sm'
                                type='tel'
                                placeholder='Enter admin phone'
                                name="phone"
                                value={product.phone}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="store__id" isRequired>
                            <FormLabel>Store ID</FormLabel>
                            <Input
                                isDisabled={auth && auth?.designation === 'subAdmin' && auth?.role === 2}
                                size='sm'
                                type='text'
                                placeholder='Enter store id'
                                name="store__id"
                                value={product.store__id}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="store__email" isRequired>
                            <FormLabel>Store email</FormLabel>
                            <Input
                                isDisabled={auth && auth?.designation === 'subAdmin' && auth?.role === 2}
                                size='sm'
                                type='email'
                                placeholder='Enter store email'
                                name="store__email"
                                value={product.store__email}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input
                                size='sm'
                                type='password'
                                placeholder='Enter password'
                                name="password"
                                value={product.password}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="confirm__password" isRequired>
                            <FormLabel>Confirm password</FormLabel>
                            <Input
                                size='sm'
                                type='password'
                                placeholder='Enter confirm password'
                                name="confirm__password"
                                value={product.confirm__password}
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

export default AddSubModerator;