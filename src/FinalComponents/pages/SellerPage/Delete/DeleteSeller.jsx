import { DeleteIcon } from '@chakra-ui/icons';
import { Box, Button, Table, Tbody, Td, Thead, Tr } from '@chakra-ui/react';
import { debounce } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDeleteAdminUserMutation, useGetAllAdminInfoQuery } from '../../../../features/auth/api';
import '../../../../styles/AdminEdit.scss';
import AdminPageSkeleton from '../../AdminPageSkeletonComponents/AdminPageSkeleton';

const DeleteSeller = () => { 
    const {auth} = useSelector((state)=> state.auth);
    const {role, designation, isLoggedIn, store__email, store__id} = auth;
    let queryData = {role: '3', designation: 'seller', store__id: (isLoggedIn && role === 1 && designation === 'admin') ? '*' : store__id, store__email: (isLoggedIn && role === 1 && designation === 'admin') ? '*' : store__email};

    const {data, isSuccess} = useGetAllAdminInfoQuery(queryData);  
        const [provideDeleteId, {isLoading: deleteIsLoading, isError, isSuccess: deleteIsSuccess}] = useDeleteAdminUserMutation()
    const [startDelete, setStartDelete] = useState(false); 
    const [deletedId, setDeletedId] = useState('');
    const handleApplyForDelete = (id) => {
        if(id){
            provideDeleteId(id);
        }else{
            setDeleteDebounceLoading(()=> false);
        }
    }

    useEffect(()=>{
        setDeleteDebounceLoading(()=> false);

    },[isError , deleteIsSuccess])

    const [deleteDebounceLoading, setDeleteDebounceLoading] = useState(false);
    const deleteDebounceFunction = debounce(handleApplyForDelete, 1000);
    const handleStartApplyForDelete = (id) => {
        setStartDelete(()=> false);
        setDeleteDebounceLoading(()=> true);
        deleteDebounceFunction(id);
    } 

    const handleDeleteInitiated = (id) => {
        setStartDelete(()=>  true);
        setDeletedId(()=> id);
    }
    return (
        <AdminPageSkeleton> 
            <Box> 
                { isSuccess && data && data?.length > 0 &&
                    
                    <Box className='table__data__admin__view__container'> 
                        <Table>
                            <Thead>
                                <Tr>
                                    <Td>Name</Td>
                                    <Td>Email</Td>
                                    <Td>Phone</Td>
                                    <Td>Designation</Td>
                                    <Td>Role</Td>
                                    <Td>User ID</Td>
                                    <Td>Store ID</Td>
                                    <Td>Store Email</Td>
                                    <Td>Actions</Td>
                                </Tr> 
                            </Thead>
                            <Tbody>
                                {
                                    data.map((info, index) => {
                                        return <Tr key={index}>
                                                    <Td>{info.name}</Td>
                                                    <Td>{info.email}</Td>
                                                    <Td>{info.phone}</Td>
                                                    <Td>{info.designation}</Td>
                                                    <Td>{info.role}</Td>
                                                    <Td>{info.user__id}</Td>
                                                    <Td>{info.store__id}</Td>
                                                    <Td>{info.store__email}</Td>
                                                    <Td>
                                                        <Button 
                                                            size='xs'
                                                            display={startDelete && deletedId === info.id ? 'none' : 'inline-flex'}
                                                            isLoading={(deleteDebounceLoading || deleteIsLoading) && deletedId === info.id}
                                                            onClick={() => handleDeleteInitiated(info.id)}
                                                        >
                                                            <DeleteIcon/>
                                                        </Button>
                                                        <Button 
                                                            display={startDelete && deletedId === info.id ? 'inline-flex' : 'none'}
                                                            size='xs'
                                                            colorScheme='yellow'
                                                            mr='5px'
                                                            mb='5px'
                                                            onClick={() => setStartDelete(()=> false)}
                                                        > 
                                                            Cancel
                                                        </Button> 
                                                        <Button 
                                                            display={startDelete && deletedId === info.id ? 'inline-flex' : 'none'}
                                                            size='xs'
                                                            colorScheme='red'
                                                            mr='5px' 
                                                            mb='5px'
                                                            onClick={() => handleStartApplyForDelete(info.id)}
                                                        > 
                                                            Confirm
                                                        </Button> 
                                                    </Td>
                                                </Tr> 
                                    })
                                }
                            </Tbody>
                        </Table>
                    </Box>
                }
            </Box> 
        </AdminPageSkeleton>
    );
};

export default DeleteSeller;