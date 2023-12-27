import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const TopSmallNavbar = () => {
    return (
        <Box display={'flex'} justifyContent={'center'} py='2' px='3'>
            <Text mr='2.5' fontSize={'16px'}>Account</Text>
            <Text mr='2.5' fontSize={'16px'}>Track Order</Text>
            <Text mr='2.5' fontSize={'16px'}>Support</Text>
        </Box>
    );
};

export default TopSmallNavbar;