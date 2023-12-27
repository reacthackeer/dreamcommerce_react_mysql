import { Image } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleBrandItem = ({item}) => {
    return (
        <div className='single__fill__item__upper__cover'>
            <div className='single__fill__item'>
                <Link to={`${item.link}`}>
                    <Image src={item.img} alt={item.name}/>
                </Link>
                <Link to={item.link} className='single__fill__item__status'>{item.name}</Link>
            </div>
        </div>
    );
};

export default SingleBrandItem;