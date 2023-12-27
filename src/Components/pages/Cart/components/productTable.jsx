import React from 'react';
import SingleCartProductItem from './singleProductItem';
const ProductTable = ({products}) => {
    return ( 
          <div className='product__table__body'>  
            {
              products.map((info, index)=> <SingleCartProductItem infos={info} key={index} no={index+1}/>)
            }
          </div> 
    );
};

export default ProductTable;