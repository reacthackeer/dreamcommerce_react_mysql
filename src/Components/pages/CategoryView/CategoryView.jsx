import React from 'react';
import { useParams } from 'react-router-dom';
import MainView from '../viewSkleton';

const CategoryView = () => {
    let params = useParams();
    console.log(params);
    return (
        <div>
            <MainView/>
        </div>
    );
};

export default CategoryView;