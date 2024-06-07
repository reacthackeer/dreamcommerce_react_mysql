import { Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { server__image__host__url } from '../../../../app/store';

const DevelopAllCategorySingleBrandItemNext = ({item}) => {
    
    const [devMode] = useState(true);
    return (
        <div className='single__fill__item__upper__cover'>
            <div className='single__fill__item'>
                
                <Link to={!devMode? '/edit/brand/'+item.uid : `/brands/${item.brand.replace(/\//g,'_')}`}>
                    <Image src={server__image__host__url+item.src} alt={item.brand}/>
                </Link>
                <Link to={devMode? '/edit/brand/'+item.uid : `/brands/${item.brand.replace(/\//g,'_')}`} className='single__fill__item__status active'>{item.brand}</Link>
            </div>
        </div>
    );
};

export default DevelopAllCategorySingleBrandItemNext;