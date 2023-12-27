import React from 'react';
import DynamicHeader from '../../AddNavbar/DynamicHeader';
import DynamicHeaderHome from '../DynamicHeaderHome';

const AddBanner = () => {
    return (
        <React.Fragment>
            <DynamicHeader message={'Add Banner'} />
            <DynamicHeaderHome/>
        </React.Fragment>
    );
};

export default AddBanner;