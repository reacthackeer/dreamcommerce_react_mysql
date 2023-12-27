import {
    Table,
    TableContainer,
    Tbody,
    Td,
    Tfoot,
    Th, Thead, Tr
} from '@chakra-ui/react';
import React from 'react';

const CalculateTable = ({products}) => {
        
    const totalPrice = products.reduce( ( sum, { quantity, infos:{current__price} } ) => sum + (quantity*current__price) , 0);
    const totalQuantity = products.reduce( ( sum, { quantity } ) => sum + quantity , 0);
    

    
    return (
        <TableContainer>
            <Table variant='simple'> 
                <Thead>
                    <Tr>
                        <Th fontSize={'medium'}>Subtotal</Th>
                        <Th textAlign={'end'}  fontSize={'medium'}>{totalPrice} TK</Th> 
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
                        <Td>Product ({totalQuantity})</Td> 
                        <Td textAlign={'end'}>{totalPrice} TK</Td> 
                    </Tr>
                </Tbody> 
                <Tfoot> 
                    <Tr>
                        <Th fontSize={'medium'}>Total</Th>
                        <Th textAlign={'end'}  fontSize={'medium'}>{totalPrice} TK</Th> 
                    </Tr> 
                </Tfoot>
            </Table>
        </TableContainer>
    );
};

export default CalculateTable;