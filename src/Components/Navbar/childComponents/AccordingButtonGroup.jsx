import { AccordionButton } from '@chakra-ui/react';
import React from 'react';
import TitleBox from './TittleBox';
import ShowAndHide from './showAndHide';

const AccordingButtonGroup = ({title, isExpanded, showLinkIcon, showLinkUrl}) => {
    return (
        <AccordionButton>
            <TitleBox title={title}/> 
            <ShowAndHide showLinkUrl={showLinkUrl} isExpanded={isExpanded} showLinkIcon={showLinkIcon}/>
        </AccordionButton> 
    );
};

export default AccordingButtonGroup;