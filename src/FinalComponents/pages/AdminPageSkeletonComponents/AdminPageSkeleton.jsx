import { Box } from '@chakra-ui/react';
import React from 'react';
import Sidebar from './Components/Sidebar';
import './style/skeleton.scss';
const AdminPageSkeleton = ({children}) => { 
    return (
        <Box className='admin__home__pages__full__page__main__container'>
            <Box className='admin__home__page__container'>
                <Sidebar/>
                <Box className='data__views'> 
                    {
                        children
                    }
                </Box>
            </Box>
        </Box>
    );
};

export default AdminPageSkeleton;