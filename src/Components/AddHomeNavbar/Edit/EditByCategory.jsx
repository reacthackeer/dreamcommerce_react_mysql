import React from 'react';
import DynamicHeader from '../../AddNavbar/DynamicHeader';
import DynamicHeaderHome from '../DynamicHeaderHome';

const EditByCategory = () => {
    return (
        <React.Fragment> 
            <DynamicHeader message="Edit Shop By Category"/>
            <DynamicHeaderHome/> 
        </React.Fragment>
    );
};

export default EditByCategory;