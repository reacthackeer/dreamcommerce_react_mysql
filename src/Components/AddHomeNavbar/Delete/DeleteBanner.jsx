import React from 'react';
import DynamicHeader from '../../AddNavbar/DynamicHeader';
import DynamicHeaderHome from '../DynamicHeaderHome';

const DeleteBanner = () => {
    return (
        <React.Fragment>
            <DynamicHeader message={'Delete Banner'} />
            <DynamicHeaderHome/>
        </React.Fragment>
    );
};

export default DeleteBanner;