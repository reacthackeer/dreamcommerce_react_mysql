import React from 'react';
// import { server__image__host__url } from '../../app/store';
import BasicProductInfo from '../../../../Components/AddProduct/ChildComponents/BasicProductInfo';
import PreviewAndSave from '../../../../Components/AddProduct/ChildComponents/PreviewAndSave';
import ProductDetailsChild from '../../../../Components/AddProduct/ChildComponents/ProductDetails';
import ProductOverviews from '../../../../Components/AddProduct/ChildComponents/ProductOverviews';
import ProductSpecification from '../../../../Components/AddProduct/ChildComponents/ProductSpecification';
import UploadProductImage from '../../../../Components/AddProduct/ChildComponents/UploadProductImage';
import '../../styles/addProduct.scss';
const ProductForm = () => {
  


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
