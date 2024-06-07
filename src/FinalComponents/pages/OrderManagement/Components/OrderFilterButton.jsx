import { Button, ButtonGroup, Input } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderFilterButton = ({currentState, setPhoneNumber}) => {
    const navigate = useNavigate();
    return (
        <div className='padding__bottom'>
        <ButtonGroup 
            size='sm' 
            isAttached 
            variant='outline' 
            width={'fit-content'}
            display={currentState === 'phone' ? 'inline-flex' : 'none'}
        >   
            <Input 
                size={'sm'}
                placeholder='Enter phone number'
                onChange={(e)=> setPhoneNumber(()=> e.target.value)}
            >
            
            </Input>
            <Button 
                bg={currentState === 'completed' ? 'gray.400' : 'gray.100'}
                onClick={()=> navigate('/order-management/all')}
            >Close</Button>  
        </ButtonGroup>  
            <ButtonGroup 
                size='sm' 
                isAttached 
                variant='outline' 
                width={'fit-content'}
                display={currentState === 'phone' ? 'none' : 'inline-flex'}
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
                <Button 
                    bg={currentState === 'phone' ? 'gray.400' : 'gray.100'}
                    onClick={()=> navigate('/order-management/phone')}
                >Phone</Button>
            </ButtonGroup>  
        </div>
    );
};

export default OrderFilterButton;