import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import React from 'react';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const ShowAndHide = ({isExpanded, showLinkIcon, showLinkUrl}) => {
    const navigate = useNavigate();
    const handleLinkClick = () => {
        navigate(showLinkUrl)
    }
    return ( 
        <React.Fragment>
            {showLinkIcon && 
            <Button
                className='second__nav__link__button'
                variant={'link'}
                onClick={handleLinkClick} 
                ml='4'
            >
                <ExternalLinkIcon 
                    fontSize={'15px'}
                />
            </Button>}
            {isExpanded ? (
                <MdExpandLess fontSize='20px' />
                ) : (
                <MdExpandMore fontSize='20px' ml={showLinkIcon ? '0' : '4'} />
                )
            }
        </React.Fragment>
    );
};

export default ShowAndHide;
