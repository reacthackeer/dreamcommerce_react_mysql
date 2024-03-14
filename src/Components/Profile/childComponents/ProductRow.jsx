import { Button, Image, Select, Td, Tr } from '@chakra-ui/react';
import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { server__image__host__url } from '../../../app/store';
import { useDecrementOrderMutation, useIncrementOrderMutation, useStatusUpdateMutation } from '../../../features/order/api';

const ProductRow = memo(({product}) => {   
    const navigate = useNavigate();
    const [provideIdAndStatus, {data, isLoading, isSuccess, isError, error}] = useStatusUpdateMutation();
    const [provideIncrementId, {isLoading: oIL}] = useIncrementOrderMutation();
    const [provideDecrementId, {isLoading: oDL}] = useDecrementOrderMutation();
    const userInfo = useSelector((state)=> state.auth.auth); 
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
        let data = {id: productId, status:  event}; 
        provideIdAndStatus(data);
    };
    
    const handleCheckVisibility = () => {
        let visible = 'none';
        if(product.pay__type === 'Cash on' && userInfo.role < 4){
            visible = 'inline'
        }
        return visible;
    }
    useEffect(()=>{
        console.log({data, isLoading, isSuccess, isError, error});
    },[data, isLoading, isSuccess, isError, error])
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
                display={handleCheckVisibility()}
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
                display={handleCheckVisibility()}
            >
            +
            </Button>
        </Td>
        <Td>${product.price}</Td>
        <Td>${product.quantity * product.price}</Td>
        <Td>
            <Select
            value={product.status}
            onChange={(event) => handleStatusChange(product.CID, event.target.value)}
            isDisabled={userInfo.role > 3 ? true : false}
            >
            <option selected={product.status === 'pending'} value="pending">Pending</option>
            <option selected={product.status === 'reject'} value="reject">Reject</option>
            <option selected={product.status === 'cancel'} value="cancel">Cancel</option>
            <option selected={product.status === 'accept'} value="accept">Accept</option>
            <option selected={product.status === 'packing'} value="packing">Packing</option>
            <option selected={product.status === 'way'} value="way">Way</option>
            <option selected={product.status === 'near'} value="near">Near</option>
            <option selected={product.status === 'completed'} value="completed">Completed</option>
            </Select>
        </Td>
        <Td>
            <Button
                width={'100%'}
                mb='1'
                size="xs"
                colorScheme="green"
                onClick={() => navigate(`/order-management/print/${product.user__id}`)} 
                display={userInfo.role > 3 ? 'none' : 'block'}
            >
                details
            </Button>
            <Button
            width={'100%'} 
            size="xs"
            colorScheme="red"
            onClick={() => handleStatusChange(product.CID, 'cancel')} 
            isDisabled={product.status !== 'pending'}
            >
                Cancel
            </Button>
        </Td>
        </Tr>
    );
});

export default ProductRow;