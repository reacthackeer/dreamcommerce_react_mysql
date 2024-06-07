import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React, { memo, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import { debounce } from 'lodash';
import { useSelector } from 'react-redux';
import { useUpdateAdminUserMutation } from '../../../../../features/auth/api';


const EditSubModeratorComponents = memo(({setSelected}) => {
    
    const [product, setProduct] = useState( JSON.parse(localStorage.getItem('admin__infos'))||{});
    const {auth} = useSelector((state)=> state.auth);
    const handleChange = (event) => { 
        const { name, value } = event.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    }; 
    
    const [provideBrandInfo,{data, isLoading, isError, isSuccess, error}] = useUpdateAdminUserMutation();

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
            if(data?.status__code === 200){
                console.log(data);
                document.querySelectorAll('input').forEach((info)=>{
                    info.value=''
                })
                setSelected(()=> false);
                toast.success('Successfully admin updated!',{duration: 3000, position: 'top-right'}); 
                setProduct({});
                
            }
        }
    },[data, isLoading, isError, isSuccess, error, setSelected])
    
    const [addDebounceLoading, setAddDebounceLoading] = useState(false);
    const handleSubmitDebounceFunction = debounce(handleSubmit, 1000);

    const handleStartSubmit = (e) => {
        e.preventDefault();
        setAddDebounceLoading(()=> true);
        handleSubmitDebounceFunction(e);
    }

    return (  
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
                        <FormControl id="user__id" isRequired>
                            <FormLabel>User ID</FormLabel>
                            <Input
                                size='sm'
                                type='text'
                                placeholder='Enter user__id id'
                                name="user__id"
                                value={product.user__id}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="block" isRequired>
                            <FormLabel>Block</FormLabel>
                            <Input
                                size='sm'
                                type='text'
                                placeholder='Enter block type true or false'
                                name="block"
                                value={product.block}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="role" isRequired>
                            <FormLabel>Role</FormLabel>
                            <Input
                                isDisabled={auth && auth?.designation === 'subAdmin' && auth?.role === 2}
                                size='sm'
                                type='number'
                                placeholder='Enter user role'
                                name="role"
                                value={product.role}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="designation" isRequired>
                            <FormLabel>Designation</FormLabel>
                            <Input
                                isDisabled={auth && auth?.designation === 'subAdmin' && auth?.role === 2}
                                size='sm'
                                type='text'
                                placeholder='Enter admin designation'
                                name="designation"
                                value={product.designation}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="store__id" isRequired>
                            <FormLabel>Store ID</FormLabel>
                            <Input
                                size='sm'
                                type='text'
                                isDisabled={auth && auth?.designation === 'subAdmin' && auth?.role === 2}
                                placeholder='Enter store id'
                                name="store__id"
                                value={product.store__id}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="store__email" isRequired>
                            <FormLabel>Store email</FormLabel>
                            <Input
                                size='sm'
                                isDisabled={auth && auth?.designation === 'subAdmin' && auth?.role === 2}
                                type='email'
                                placeholder='Enter store email'
                                name="store__email"
                                value={product.store__email}
                                onChange={handleChange}
                            />
                        </FormControl> 
                    </Box>

                    <div className='data__form__submit__button'>
                        <Button 
                            colorScheme="yellow" 
                            variant={'outline'}
                            type="button"
                            size='sm'  
                            mr='5px'
                            onClick={()=> setSelected(()=> false)}
                        >
                            Cancel
                        </Button>  
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
    );
});

export default EditSubModeratorComponents;