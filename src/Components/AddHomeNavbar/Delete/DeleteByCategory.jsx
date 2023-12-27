import React from 'react';
import DynamicHeader from '../../AddNavbar/DynamicHeader';
import DynamicHeaderHome from '../DynamicHeaderHome';

const DeleteByCategory = () => {
    return (
        <React.Fragment> 
            <DynamicHeader message="Delete Shop By Category"/>
            <DynamicHeaderHome/> 
        </React.Fragment>
    );
};

export default DeleteByCategory;