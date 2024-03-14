import { Button, ButtonGroup } from '@chakra-ui/react';
import React from 'react';

const OrderPagination = ({handlePageChange, currentPage, totalPages}) => {
    return (
        <div className='padding__top'>
            <ButtonGroup 
                size='sm' 
                isAttached 
                variant='outline' 
                width={'fit-content'}
                display={totalPages > 1 ? 'inline': 'none'}
            >
                <Button 
                    onClick={() => handlePageChange(currentPage - 1)} 
                    isDisabled={currentPage === 1}  
                >Previous</Button> 
                <Button 
                    onClick={() => handlePageChange(currentPage + 1)}
                    isDisabled={currentPage === totalPages}  
                >Next</Button>  
            </ButtonGroup>  
        </div>
    );
};

export default OrderPagination;