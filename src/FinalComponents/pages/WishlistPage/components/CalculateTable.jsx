import {
    Table,
    TableContainer,
    Tbody,
    Td,
    Tfoot,
    Th,
    Tr
} from '@chakra-ui/react';
import React from 'react';

const CalculateTable = ({priceData}) => {
    let {totalPrice, totalShippingFee, totalTax, totalVat, totalQuantity, allTotal, system} = priceData; 
    return (
        <TableContainer>
            <Table variant='simple'>  
                <Tbody>
                    <Tr> 
                        <Td>Product ({totalQuantity})</Td> 
                        <Td textAlign={'end'}>{totalPrice} TK</Td> 
                    </Tr>
                    <Tr>
                        <Td textAlign={'start'}>Shipping Fee</Td> 
                        <Td textAlign={'end'}>{totalShippingFee} TK</Td> 
                    </Tr> 
                    <Tr> 
                        <Td>Vat ({system.vatPercent}%)</Td> 
                        <Td textAlign={'end'}>{totalVat} TK</Td> 
                    </Tr>
                    <Tr> 
                        <Td>Tax ({system.taxPercent}%)</Td> 
                        <Td textAlign={'end'}>{totalTax} TK</Td> 
                    </Tr>
                </Tbody> 
                <Tfoot> 
                    <Tr>
                        <Th fontSize={'medium'}>Total</Th>
                        <Th textAlign={'end'}  fontSize={'medium'}>{allTotal} TK</Th> 
                    </Tr> 
                </Tfoot>
            </Table>
        </TableContainer>
    );
};

export default CalculateTable;