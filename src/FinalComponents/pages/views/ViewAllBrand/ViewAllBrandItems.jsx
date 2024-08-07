import { Image } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useGetAllBrandQuery } from '../../../../features/brand/brandApi';
import { LoadingPage, NotFoundPage } from '../../LandingPage/Components/Loading';
import HeaderLinkItem from '../SingleBrandProductsViews/ChildComponents/developViewSkeletonComponents/HeaderLinkItems';
import DevelopAllCategorySingleBrandItemNext from './DevelopAllCategorySingleBrandItemNext';
const ViewAllBrandItems = () => {
    
    
    let {data, isLoading, isError, isSuccess, error} = useGetAllBrandQuery();
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
        document.title = 'Best computer related brand product shop in Bangladesh | Danguli'
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
                        return <DevelopAllCategorySingleBrandItemNext key={index} item={item}/>
                    })} 
                </div> 
            </div>
        </React.Fragment>
    }
    return content; 
}



export default ViewAllBrandItems;