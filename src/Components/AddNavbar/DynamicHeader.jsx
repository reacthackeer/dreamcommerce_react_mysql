import { Text } from '@chakra-ui/react';
import React, { memo } from 'react';

const DynamicHeader = memo(({message}) => {
    return (
        <div 
            className='main__category__product__view__upper__container' 
            style={{paddingTop:'30px',paddingBottom:'30px'}}
        > 
            <Text fontSize={'40px'} fontWeight={'bold'} letterSpacing={'.5px'} textAlign={'center'} paddingY={'30px'}>{message}</Text>
        </div>
    );
});

export default DynamicHeader;