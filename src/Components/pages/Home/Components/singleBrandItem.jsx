import { Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const componentName = ({item, index}) => {
    return (
        <div className='single__fill__item__upper__cover' key={index}>
            <div className='single__fill__item'>
                <Link to={`${item.link}`}>
                    <Image src={item.img} alt={item.img}/>
                </Link>
                <Link to={item.link} className='single__fill__item__status'>{item.name}</Link>
            </div>
        </div>
    );
};

export default componentName;