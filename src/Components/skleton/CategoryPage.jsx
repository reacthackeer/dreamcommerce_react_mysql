import React from 'react';
import { useGetAllCategoryQuery } from '../../features/category/categoryApi';

const CategoryPage = () => { 

    let {data, isLoading, isError, isSuccess, error} = useGetAllCategoryQuery();
    
    
    return  <h1>Hello world</h1>;
};

export default CategoryPage;