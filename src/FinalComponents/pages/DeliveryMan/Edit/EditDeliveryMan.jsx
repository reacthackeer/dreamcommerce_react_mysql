import { EditIcon } from '@chakra-ui/icons';
import { Box, Button, Table, Tbody, Td, Thead, Tr } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetAllAdminInfoQuery } from '../../../../features/auth/api';
import '../../../../styles/AdminEdit.scss';
import AdminPageSkeleton from '../../AdminPageSkeletonComponents/AdminPageSkeleton';
import EditDeliveryManComponent from './Components/EditDeliveryManComponent';
const EditDeliveryMan = () => { 
    const {auth} = useSelector((state)=> state.auth);
    const {isLoggedIn, role, store__email, store__id, designation} = auth;
    let queryData = {role: '8', designation: 'deliveryMan', store__id: (isLoggedIn && role === 1 && designation === 'admin') ? '*' : store__id, store__email: (isLoggedIn && role === 1 && designation === 'admin') ? '*' : store__email};

    const {data, isSuccess} = useGetAllAdminInfoQuery(queryData); 
    const [selected, setSelected] = useState(false);
    const handleApplyForEdit = (infos) => {
        localStorage.setItem('admin__infos', JSON.stringify(infos))
        setSelected(()=> true);
    };
    
    return (
        <AdminPageSkeleton>
        {
            !selected ?
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
                                                            onClick={() => handleApplyForEdit(info)}
                                                        >
                                                            <EditIcon/> 
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
        : 
                <EditDeliveryManComponent setSelected={setSelected}/>
        }
        </AdminPageSkeleton>
    );
};

export default EditDeliveryMan;