import React from 'react';
import DynamicHeader from '../../AddNavbar/DynamicHeader';
import DynamicHeaderHome from '../DynamicHeaderHome';

const AddByCategory = () => {
    return (
        <React.Fragment> 
            <DynamicHeader message="Add Shop By Category"/>
            <DynamicHeaderHome/> 
        </React.Fragment>
    );
};

export default AddByCategory;