import { Box } from '@chakra-ui/react';
import React, { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleProductQuery } from '../../../../features/product/productApi';
import { setCollectionTitleAndDescription } from '../../../PagesComponents/SetProductTitle';
import BrowsingHistoryArea from './childComponents/BrowsingHistoryArea';
import DetailsArea from './childComponents/DetailsArea';
import FromSameBrand from './childComponents/FromSameBrand';
import ImageArea from './childComponents/ImageArea';
import ProductDetailsAndMoreArea from './childComponents/ProductDetailsAndMoreArea';
import SimilarProductArea from './childComponents/SimillarProductArea';

const ProductDetailsView = memo(() => {
    let [userId] = useState(localStorage?.getItem('user__id'));
    const {visible__url, product__id} = useParams();
    let {data, isLoading, isError, isSuccess, error} = useGetSingleProductQuery({visible__url, product__id});
    
    
    
    let images = [];
    
    if(data && data?.status__code === 200 && data?.product?.ID){
        data?.product?.infos?.images?.forEach((info, index)=>{
            if(info.indexOf('ryans') === -1){
                images.push(info);
            }
        })
    }     
    useEffect(()=>{
        let mainView = document.querySelector('.mobile__view__container');
        
        if(mainView){
            mainView.scrollTop = 0;
        }  

        if(isSuccess && data){
            let productInfos = data.product.infos;
            let {child, brand, parent, parent__father, specifications, title} = productInfos;
            let titleText = data.product.infos.title;
            let keyWordText = `${child}, ${brand},  ${parent}, ${parent__father}`;
            let allDescription = [];
            allDescription.push(title)
            specifications.forEach((info)=> {
                info.infos.forEach((infoSecond)=>{
                    allDescription.push(`${infoSecond.title} - ${infoSecond.info}`)
                })
            })  
            let descriptionText = allDescription.join(', ');
            setCollectionTitleAndDescription(titleText, keyWordText, descriptionText)
        }
    },[data, isLoading, isError, isSuccess, error])
    return (
        <React.Fragment>
            {
                data?.status__code === 200 && userId && <React.Fragment>
                <div className='main__category__product__view__upper__container bg__white'>
                    <div className='top__single__Product__main__view padding__top'> 
                        <ImageArea images={images}/>
                        <DetailsArea product={data?.product}/>
                    </div>
                </div>
                <Box className='main__category__product__view__upper__container bg__white'> 
                    <div className='bottom__details__view__fill__next'>
                        <ProductDetailsAndMoreArea details={data?.product?.infos?.details || []} specifications={data?.product?.infos?.specifications || []}/>
                        <SimilarProductArea child={data?.product?.child} parent={data?.product?.parent} parentFather={data?.product?.parent__father} product__id={data?.product?.ID}/>
                    </div> 
                    <FromSameBrand product__id={data?.product?.ID} brand={data?.product?.brand}/>
                    <BrowsingHistoryArea productId={data?.product?.ID} userId={userId}/>
                </Box>
                </React.Fragment>   
            }
        </React.Fragment>
    );
});

export default ProductDetailsView;