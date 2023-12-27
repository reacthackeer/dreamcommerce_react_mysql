import React from 'react';
// import { server__image__host__url } from '../../app/store';
import '../../styles/addProduct.scss';
import BasicProductInfo from './ChildComponents/BasicProductInfo';
import PreviewAndSave from './ChildComponents/PreviewAndSave';
import ProductDetailsChild from './ChildComponents/ProductDetails';
import ProductOverviews from './ChildComponents/ProductOverviews';
import ProductSpecification from './ChildComponents/ProductSpecification';
import UploadProductImage from './ChildComponents/UploadProductImage';
const ProductForm = () => {
  


  // specification end



  return (
    <div className='main__category__product__view__upper__container bg__1'>  
      <div className='padding__top padding__bottom'>
        <BasicProductInfo/>
        <UploadProductImage/>
        <ProductOverviews/> 
        <ProductDetailsChild/>
        <ProductSpecification/>
        <PreviewAndSave/>
      </div>
    </div>
  );
};

export default ProductForm;
