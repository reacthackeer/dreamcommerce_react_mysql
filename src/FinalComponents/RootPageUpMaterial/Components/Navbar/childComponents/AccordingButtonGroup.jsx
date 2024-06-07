import { AccordionButton, Text } from '@chakra-ui/react';
import React from 'react';
import ShowAndHide from './showAndHide';

const AccordingButtonGroup = ({title, isExpanded, showLinkIcon, showLinkUrl}) => {
    return (
        <AccordionButton> 
            <Text>{title}</Text>
            <ShowAndHide showLinkUrl={showLinkUrl} isExpanded={isExpanded} showLinkIcon={showLinkIcon}/>
        </AccordionButton> 
    );
};

export default AccordingButtonGroup;