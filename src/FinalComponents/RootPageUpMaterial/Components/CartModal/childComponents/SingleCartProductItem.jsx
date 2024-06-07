import { Box, HStack, Icon, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { toast } from 'react-hot-toast';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { server__image__host__url } from '../../../../../app/store';
const SingleCartProduct = ({infos}) => {

    let imgSrc = '/not-found.png';
    if(infos?.infos?.images[0] && infos?.infos?.images[0].indexOf('ryan') === -1 ){
        imgSrc = infos?.infos?.images[0];
    }

    return (
        <HStack display={'flex'} justify={'space-between'} alignItems={'center'} mb={3}>
            <Image
                width={'20%'}
                src={server__image__host__url + imgSrc}
                alt='product'
            />  
            <Box width={'80%'} p={3}>
                <Link className='small__link__item__hover' to={`/${infos.visible__url}/${infos.ID}`}>{infos.infos.title.slice(0,42)}...</Link>
                <HStack my='1' justify={'space-between'}>
                    <Text fontSize={'md'} fontWeight={'bold'}>{infos.infos.current__price} TK</Text> 
                    <Icon onClick={()=> toast.success('Successfully product remove form cart!')} as={RiDeleteBin6Line}/>
                </HStack>
                <HStack my='1' justify={'space-between'}>
                    <Text fontSize={'xs'}>Quantity: {infos.quantity}</Text>
                    <Text fontSize={'xs'}>{infos.infos.current__price * infos.quantity} TK</Text>
                </HStack> 
            </Box>
        </HStack>
    );
};

export default SingleCartProduct;