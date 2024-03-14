import { Button, ButtonGroup } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderFilterButton = ({currentState}) => {
    const navigate = useNavigate();
    return (
        <div className='padding__bottom'>
            <ButtonGroup 
                size='sm' 
                isAttached 
                variant='outline' 
                width={'fit-content'}
            >
                <Button 
                    bg={currentState === 'all' ? 'gray.400' : 'gray.100'}
                    onClick={()=> navigate('/order-management/all')}
                >All</Button> 
                <Button 
                    bg={currentState === 'pending' ? 'gray.400' : 'gray.100'}
                    onClick={()=> navigate('/order-management/pending')}
                >Pending</Button> 
                <Button 
                    bg={currentState === 'reject' ? 'gray.400' : 'gray.100'}
                    onClick={()=> navigate('/order-management/reject')}
                >Reject</Button> 
                <Button 
                    bg={currentState === 'cancel' ? 'gray.400' : 'gray.100'}
                    onClick={()=> navigate('/order-management/cancel')}
                >Cancel</Button>
                <Button 
                    bg={currentState === 'accept' ? 'gray.400' : 'gray.100'}
                    onClick={()=> navigate('/order-management/accept')}
                >Accept</Button>  
                <Button 
                    bg={currentState === 'packing' ? 'gray.400' : 'gray.100'}
                    onClick={()=> navigate('/order-management/packing')}
                >Packing</Button> 
                <Button 
                    bg={currentState === 'way' ? 'gray.400' : 'gray.100'}
                    onClick={()=> navigate('/order-management/way')}
                >Way</Button> 
                <Button 
                    bg={currentState === 'near' ? 'gray.400' : 'gray.100'}
                    onClick={()=> navigate('/order-management/near')}
                >Near</Button> 
                <Button 
                    bg={currentState === 'completed' ? 'gray.400' : 'gray.100'}
                    onClick={()=> navigate('/order-management/completed')}
                >Completed</Button> 
            </ButtonGroup>  
        </div>
    );
};

export default OrderFilterButton;