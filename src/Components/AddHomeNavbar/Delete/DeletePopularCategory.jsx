import React from 'react';
import DynamicHeader from '../../AddNavbar/DynamicHeader';
import DynamicHeaderHome from '../DynamicHeaderHome';

const DeletePopularCategory = () => {
    return (
        <React.Fragment>
            <DynamicHeader message="Delete Popular Category"/>
            <DynamicHeaderHome/> 
        </React.Fragment>
    );
};

export default DeletePopularCategory;