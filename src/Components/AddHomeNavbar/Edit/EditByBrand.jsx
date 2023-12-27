import React from 'react';
import DynamicHeader from '../../AddNavbar/DynamicHeader';
import DynamicHeaderHome from '../DynamicHeaderHome';

const EditByBrand = () => {
    return (
        <React.Fragment>
            <DynamicHeader message={'Edit Shop By Brand'} />
            <DynamicHeaderHome/>
        </React.Fragment>
    );
};

export default EditByBrand;