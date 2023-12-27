import {
    Table,
    TableContainer,
    Tbody,
    Td,
    Tfoot,
    Th, Thead, Tr
} from '@chakra-ui/react';
import React from 'react';

const CalculateTable = () => {
    return (
        <TableContainer mt='3'>
            <Table variant='simple'> 
                <Thead>
                    <Tr>
                        <Th fontSize={'medium'}>Subtotal</Th>
                        <Th textAlign={'end'}  fontSize={'medium'}>2400.00 TK</Th> 
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td textAlign={'start'}>Shipping Fee</Td> 
                        <Td textAlign={'end'}>0.00 TK</Td> 
                    </Tr> 
                    <Tr> 
                        <Td>Extra (Vat + Tax)</Td> 
                        <Td textAlign={'end'}>0.00 TK</Td> 
                    </Tr>
                    <Tr> 
                        <Td>Product (12)</Td> 
                        <Td textAlign={'end'}>12400.00 TK</Td> 
                    </Tr>
                </Tbody> 
                <Tfoot> 
                    <Tr>
                        <Th fontSize={'medium'}>Total</Th>
                        <Th textAlign={'end'}  fontSize={'medium'}>2400.00 TK</Th> 
                    </Tr> 
                </Tfoot>
            </Table>
        </TableContainer>
    );
};

export default CalculateTable;