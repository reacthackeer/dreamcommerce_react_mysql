import { Button, Image, Select, Td, Tr } from '@chakra-ui/react';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { server__image__host__url } from '../../../app/store';
import { useDecrementOrderMutation, useIncrementOrderMutation } from '../../../features/order/api';

const ProductRow = memo(({product}) => { 

    const [provideIncrementId, {isLoading: oIL}] = useIncrementOrderMutation();
    const [provideDecrementId, {isLoading: oDL}] = useDecrementOrderMutation();
    const handleSave = (productId) => { 
        console.log(`Save product ${productId}`);
    };

    const handleCancel = (productId) => {
        // Perform cancel operation for the product
        console.log(`Cancel product ${productId}`);
    };

    const handleIncrement = () => {
        provideIncrementId(product.CID)
    };

    const handleDecrement = () => {
        provideDecrementId(product.CID)
    };

    const handleStatusChange = (productId, event) => {
        // setProducts((prevProducts) =>
        // prevProducts.map((product) =>
        //     product.id === productId ? { ...product, status: event.target.value } : product
        // )
        // );
    };
    
    return (
        <Tr key={product.id} _hover={{ bg: 'gray.100' }}>
        <Td>
            <Image src={server__image__host__url+product.infos.images[0]} alt="Product Image" boxSize="50px" />
        </Td>
        <Td>
            <Link to={`/${product.visible__url}/${product.ID}`}>{product.infos.title.slice(0,30)+'...'}</Link>
        </Td>
        <Td>
            <Button   
                variant={'outline'} 
                size="sm" 
                colorScheme="blue" 
                onClick={() => handleDecrement(product.id)}
                isLoading={oDL}
                isDisabled={product.quantity === 1 || product.quantity < 2}
            >
            -
            </Button>
                <Button variant={'ghost'}>
                    {product.quantity}
                </Button>
            <Button  
                variant={'outline'} 
                size="sm" 
                colorScheme="blue" 
                onClick={() => handleIncrement(product.id)}
                isLoading={oIL}
            >
            +
            </Button>
        </Td>
        <Td>${product.price}</Td>
        <Td>${product.quantity * product.price}</Td>
        <Td>
            <Select
            value={product.status}
            onChange={(event) => handleStatusChange(product.id, event)}
            isDisabled
            >
            <option selected={product.status === 'pending'} value="pending">Pending</option>
            <option selected={product.status === 'accept'} value="accept">Accept</option>
            <option selected={product.status === 'reject'} value="reject">Reject</option>
            <option selected={product.status === 'packing'} value="packing">Packing</option>
            <option selected={product.status === 'way'} value="way">Way</option>
            <option selected={product.status === 'near'} value="near">Near</option>
            <option selected={product.status === 'completed'} value="completed">Completed</option>
            </Select>
        </Td>
        <Td>
            <Button
                size="sm"
                colorScheme="green"
                onClick={() => handleSave(product.id)} 
            >
                details
            </Button>
            <Button
            ml={2}
            size="sm"
            colorScheme="red"
            onClick={() => handleCancel(product.id)} 
            isDisabled={product.status !== 'pending'}
            >
                Cancel
            </Button>
        </Td>
        </Tr>
    );
});

export default ProductRow;