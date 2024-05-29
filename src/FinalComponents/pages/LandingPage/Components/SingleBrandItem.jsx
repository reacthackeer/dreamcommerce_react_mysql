import { Image } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { server__image__host__url } from '../../../../app/store';

const SingleBrandItem = ({item}) => {
    console.log();
    return (
        <div className='single__fill__item__upper__cover'>
            <div className='single__fill__item'>
                <Link to={`${item.link}`}>
                    <Image src={ item.img__src.indexOf('/images/check') === -1 ? item.img__src : server__image__host__url+item.img__src} alt={item.name}/>
                </Link>
                <Link to={item.link} className='single__fill__item__status'>{item.name}</Link>
            </div>
        </div>
    );
};

export default SingleBrandItem;