import { Box } from '@chakra-ui/react';
import React from 'react';

const TitleBox = ({title}) => {
    return (
        <Box
            as="span" 
            flex='1' 
            textAlign='left'
        >
            {title}
        </Box>
    );
};

export default TitleBox;