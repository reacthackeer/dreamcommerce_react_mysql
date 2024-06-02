import {
    Link,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th, Thead, Tr
} from '@chakra-ui/react';
import React from 'react';
import { Link as RLink } from 'react-router-dom';

const CalculateTable = ({priceData}) => {
    return (
        <TableContainer mt='3'>
            <Table variant='simple'> 
                <Thead>
                    <Tr>
                        <Th fontSize={'medium'}>Total</Th>
                        <Th textAlign={'end'}  fontSize={'medium'}>{priceData.allTotal} TK</Th> 
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td textAlign={'start'}>Order Summary</Td> 
                        <Td textAlign={'end'}>
                            <Link as={RLink} to='/cart'>
                                Here
                            </Link>
                        </Td> 
                    </Tr>  
                </Tbody> 
            </Table>
        </TableContainer>
    );
};

export default CalculateTable;