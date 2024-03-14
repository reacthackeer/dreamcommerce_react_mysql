import { Box, Button, ButtonGroup } from '@chakra-ui/react';
import React, { memo } from 'react';
import '../../../styles/profile.scss';
import ProductOrderTable from './ProductTable';
import ProfileCart from './ProfileCart';
const ProfileComponents = memo(() => { 
    
    return (
        <div className='main__category__product__view__upper__container bg__white'>
            <div className='padding__top padding__bottom profile__container'>
                <div>
                    <ProfileCart/>
                </div>
                <div>
                    <ProductOrderTable/>
                    <Box 
                        textAlign={'end'}
                        mt='3'
                    >
                        <ButtonGroup 
                            size='sm' 
                            isAttached 
                            variant='outline' 
                            width={'fit-content'}
                        >
                            <Button 
                                size={'sm'}
                                isLoading={false}
                            >Print All</Button>
                            <Button 
                                size={'sm'}
                                isLoading={false}
                            >Print Pending</Button>
                            <Button 
                                size={'sm'}
                                isLoading={false}
                            >Print Completed</Button>
                        </ButtonGroup>
                    </Box>
                </div>
            </div>
        </div>
    );
});

export default ProfileComponents;