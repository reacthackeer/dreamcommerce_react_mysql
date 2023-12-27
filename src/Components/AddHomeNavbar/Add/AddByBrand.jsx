import React from 'react';
import DynamicHeader from '../../AddNavbar/DynamicHeader';
import DynamicHeaderHome from '../DynamicHeaderHome';

const AddByBrand = () => {
    return (
        <React.Fragment>
            <DynamicHeader message={'Add Shop By Brand'} />
            <DynamicHeaderHome/>
        </React.Fragment>
    );
};

export default AddByBrand;