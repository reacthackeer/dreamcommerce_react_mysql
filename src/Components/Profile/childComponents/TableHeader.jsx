import { Th, Thead, Tr } from '@chakra-ui/react';
import React, { memo } from 'react';

const TableHeader = memo(() => {
    return (
        <Thead>
            <Tr>
                <Th>Product Image</Th>
                <Th>Product Name</Th>
                <Th>Quantity</Th>
                <Th>Price</Th>
                <Th>Subtotal</Th>
                <Th>Status</Th>
                <Th>Action</Th>
            </Tr>
        </Thead>
    );
});

export default TableHeader;