import { Image } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useGetAllOffersQuery } from '../../../features/brand/brandApi';
import { LoadingPage, NotFoundPage } from '../../skleton/Loading';
import DevelopAllCategorySingleOfferItemNext from '../Home/Components/DevelopAllCategorySignleOfferItemNext';
import HeaderLinkItem from '../developViewSkeletonComponents/HeaderLinkItems';
    

const DevelopAllOffersViews = () => {
    
    
    let {data, isLoading, isError, isSuccess, error} = useGetAllOffersQuery(); 
    // decide what to render
    let content = null;
    if(isLoading && !isError && !isSuccess){
        content = <LoadingPage/>
    }
    if(!isLoading && isError && !isSuccess){
        content = <NotFoundPage message={error?.message}/>
    }
    let linksArray = [
        {name: 'HOME', link: '/'},
        {name: 'BRANDS', link: `/brands`}, 
    ] 
    

    if(!isLoading && !isError && isSuccess && data?.length > 0){
        content =  <React.Fragment>
            <div className="main__category__product__view__upper__container">
                <div className='padding__y__25'>
                    <HeaderLinkItem linksArray={linksArray}/>
                </div>
            </div>
            <div className='main__category__product__view__upper__container bg__1'>  
                <div className='top__banner__upper__container padding__bottom padding__top'> 
                    <div className='top__banner__container'>
                        <Link to='/single-product-details'>
                            <Image src='/ads.png' alt='banner'/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='main__category__product__view__upper__container bg__1'> 
                <div className='brand__category__fill__container padding__intro__top padding__bottom'>
                    {data?.map((item, index) => {
                        return <DevelopAllCategorySingleOfferItemNext key={index} item={item}/>
                    })} 
                </div> 
            </div>
        </React.Fragment>
    }
    return content; 
}



export default DevelopAllOffersViews;