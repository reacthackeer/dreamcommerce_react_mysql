import { Image } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { server__image__host__url } from '../../../../app/store';

const DevelopAllCategorySingleBrandItem = ({item}) => {
    
    return (
        <div className='single__fill__item__upper__cover'>
            <div className='single__fill__item'>
                <Link to={`/p/${item.parent__father.replace(/\//g,'_')}/${item.name.replace(/\//g,'_')}`}>
                    <Image src={server__image__host__url+item.src} alt={item.name}/>
                </Link>
                <Link to={`/p/${item.parent__father.replace(/\//g,'_')}/${item.name.replace(/\//g,'_')}`} className='single__fill__item__status'>{item.name}</Link>
            </div>
        </div>
    );
};

export default DevelopAllCategorySingleBrandItem;