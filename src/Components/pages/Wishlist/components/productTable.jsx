import React from 'react';
import SingleCartProductItem from './singleProductItem';
const ProductTable = ({products}) => {
    return ( 
          <div className='product__table__body'> 
            {
              products.map((info, index)=> <SingleCartProductItem no={index+1} infos={info} key={index}/>)
            }
          </div> 
    );
};

export default ProductTable;