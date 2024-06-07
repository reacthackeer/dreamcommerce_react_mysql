import { Image } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { server__image__host__url } from '../../../../../app/store';

const ImageArea = ({images}) => {
    const [singleImg, setSingleImg] = useState(images[0]) 
    useEffect(()=>{
        setSingleImg(images[0])
    },[images])
    return (
        <div className='product__image__view__container'>
            <div className='single__image__container'>
                <Image src={server__image__host__url+singleImg} alt='product single image'/>
            </div>
            {
                images?.length > 0 && 
                <div className='image__up__grid__container'>
                    {
                        images?.map((info, index) => <Image onClick={()=> setSingleImg(info)} key={index} src={server__image__host__url+info} title={info}/>)
                    }
                </div>
            }
        </div> 
    );
};

export default ImageArea;