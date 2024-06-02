import { Button } from '@chakra-ui/react';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetSingleProductByIdQuery } from '../../features/product/productApi';
import '../../styles/addProduct.scss';
import { LoadingPage, NotFoundPage } from '../skleton/Loading';
import BasicProductInfo from './ChildComponents/BasicProductInfo';
import PreviewAndSave from './ChildComponents/PreviewAndSave';
import ProductDetailsChild from './ChildComponents/ProductDetails';
import ProductOverviews from './ChildComponents/ProductOverviews';
import ProductSpecification from './ChildComponents/ProductSpecification';
import UploadProductImage from './ChildComponents/UploadProductImage';
const EditProductForm = () => {
  const navigate = useNavigate();
  const {ID} = useParams();
  const {data, isLoading, isError, isSuccess} =  useGetSingleProductByIdQuery(ID);


  // decide what to render
  let content = '';
  if(isLoading && !isSuccess && !isError){
      content = <LoadingPage/>
  }

  if(!isLoading && !isSuccess && isError){
      content = <NotFoundPage message={'There was a server side Error!'}/>
  }

  if(!isLoading && isSuccess && !isError){
      if(data.status__code === 200){

          let {product} = data; 

          
          let {ID, up,  brand, child, parent, parent__father, product__id, quantity, total__sell, views, visible, infos} = product;
          let {current__price, previous__price, title, images, overviews, specifications, details} = infos;
            title = title.split(' ');
            title = title.slice(1, title.length - 1).join(' '); 
          let newProductInfo = {ID, brand, up, child, parent, parent__father, product__id, quantity, total__sell, views, visible, current__price, previous__price, wholesale__price: infos.wholesale__price || 0, title};
          let savedProductId = Number(sessionStorage.getItem('current__product__id')) || '';
          if(savedProductId !== ID){
            sessionStorage.setItem('current__product__id', ID.toString());
            sessionStorage.setItem('product', JSON.stringify(newProductInfo));
            sessionStorage.setItem('images', JSON.stringify(images));
            sessionStorage.setItem('overviews', JSON.stringify(overviews));
            sessionStorage.setItem('details', JSON.stringify(details));
            sessionStorage.setItem('specifications', JSON.stringify(specifications));
            sessionStorage.setItem('brand', brand);
            sessionStorage.setItem('up__navbar', up);
            sessionStorage.setItem('top__category', parent__father);
            sessionStorage.setItem('category', parent);
            sessionStorage.setItem('collection', child);
          }
        
          content = (
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
          )
      }else{
        content = (
          <React.Fragment>
              <div className='add__product__main__container'>
                  <h1>Your target product not found!</h1>
                  <h1>Return to home</h1>
                  <Button 
                      onClick={()=> navigate('/')}
                  >
                      Back Home
                  </Button>
              </div>
          </React.Fragment>
        )
      }
  }

  return content;
};

export default EditProductForm;
