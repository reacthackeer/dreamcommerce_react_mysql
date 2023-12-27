import React from 'react';
import DynamicHeader from '../../AddNavbar/DynamicHeader';
import DynamicHeaderHome from '../DynamicHeaderHome';

const EditBanner = () => {
    return (
        <React.Fragment>
            <DynamicHeader message={'Edit Banner'} />
            <DynamicHeaderHome/>
        </React.Fragment>
    );
};

export default EditBanner;