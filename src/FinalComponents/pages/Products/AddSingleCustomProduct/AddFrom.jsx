import React from 'react';
// import { server__image__host__url } from '../../app/store';
import AdminPageSkeleton from '../../AdminPageSkeletonComponents/AdminPageSkeleton';
import BasicProductInfo from './ChildComponents/BasicProductInfo';
import PreviewAndSave from './ChildComponents/PreviewAndSave';
import ProductDetailsChild from './ChildComponents/ProductDetails';
import ProductOverviews from './ChildComponents/ProductOverviews';
import ProductSpecification from './ChildComponents/ProductSpecification';
import UploadProductImage from './ChildComponents/UploadProductImage';
const ProductForm = () => {
  

  return (
    <AdminPageSkeleton>   
        <BasicProductInfo/>
        <UploadProductImage/>
        <ProductOverviews/> 
        <ProductDetailsChild/>
        <ProductSpecification/>
        <PreviewAndSave/> 
    </AdminPageSkeleton>
  );
};

export default ProductForm;
