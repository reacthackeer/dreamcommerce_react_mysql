import React from 'react';
import DynamicHeader from '../../AddNavbar/DynamicHeader';
import DynamicHeaderHome from '../DynamicHeaderHome';

const EditPopularCategory = () => {
    return (
        <React.Fragment>
            <DynamicHeader message="Edit Popular Category"/>
            <DynamicHeaderHome/> 
        </React.Fragment>
    );
};

export default EditPopularCategory;