import { Text } from '@chakra-ui/react';
import React from 'react';

const TableHead = () => {
    return (
      <div className='product__table__header'>
          <div className='container__cart__header'> 
              <Text className='header__text__item' fontSize={'18px'} textAlign={'center'}>No</Text>
              <Text className='header__text__item' fontSize={'18px'} textAlign={'center'}>Image</Text>
              <Text className='header__text__item' fontSize={'18px'} textAlign={'start'}>TITLE</Text>
              <Text className='header__text__item' fontSize={'18px'} textAlign={'center'}>PRICE</Text> 
              <Text className='header__text__item' fontSize={'18px'} textAlign={'center'}>QUANTITY</Text>
              <Text className='header__text__item' fontSize={'18px'} textAlign={'center'}>TOTAL</Text> 
              <Text className='header__text__item' fontSize={'18px'} textAlign={'center'}>ACTION</Text> 
          </div>
      </div>
    );
};

export default TableHead;