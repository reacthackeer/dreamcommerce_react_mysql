import React from 'react';
import DynamicHeader from '../../AddNavbar/DynamicHeader';
import DynamicHeaderHome from '../DynamicHeaderHome';

const DeleteByBrand = () => {
    return (
        <React.Fragment>
            <DynamicHeader message={'Delete Shop By Brand'} />
            <DynamicHeaderHome/>
        </React.Fragment>
    );
};

export default DeleteByBrand;