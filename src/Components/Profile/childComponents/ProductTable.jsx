    import { Box, Button, Heading, Table, Tbody } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProductRow from './ProductRow';
import TableHeader from './TableHeader';

    const ProductOrderTable = () => {
    const {products, isFilled} = useSelector(state => state.order);
        
    const navigate = useNavigate();
    
    
    return (
        <Box borderWidth={1} borderRadius="md" p={4}>
            
        {isFilled ?     
            <Table variant="striped"> 
                <TableHeader/>
                <Tbody>
                {products.map((product, index) => (
                    <ProductRow product={product} key={index}/>
                ))}
                </Tbody>
            </Table>:
            <Box 
                textAlign={'center'}
                minHeight={400}
                display={'flex'}
                flexDir={'column'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Heading fontSize={'x-large'}>You have not ordered any products yet</Heading>
                <Heading mt='5' fontSize={'large'}>But you can order</Heading>
                <Button
                    mt='5'
                    onClick={()=> navigate('/cart')}
                >Order now</Button>
            </Box>
        }

        </Box>
    );
    };

    export default ProductOrderTable;
