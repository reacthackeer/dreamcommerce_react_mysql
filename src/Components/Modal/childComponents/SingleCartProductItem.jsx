import { Box, HStack, Icon, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { toast } from 'react-hot-toast';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
const SingleCartProduct = () => {
    return (
        <HStack display={'flex'} justify={'space-between'} alignItems={'center'} mb={3}>
            <Image
                width={'20%'}
                src='/product.jpg'
                alt='product'
            />  
            <Box width={'80%'} p={3}>
                <Link className='small__link__item__hover'>{'it, sed do eiusmod tempor incididu labore e'}...</Link>
                <HStack my='1' justify={'space-between'}>
                    <Text fontSize={'md'} fontWeight={'bold'}>120.00 TK</Text> 
                    <Icon onClick={()=> toast.success('Successfully product remove form cart!')} as={RiDeleteBin6Line}/>
                </HStack>
                <HStack my='1' justify={'space-between'}>
                    <Text fontSize={'xs'}>Quantity: 2</Text>
                    <Text fontSize={'xs'}>240.00 TK</Text>
                </HStack>
                
            </Box>
        </HStack>
    );
};

export default SingleCartProduct;