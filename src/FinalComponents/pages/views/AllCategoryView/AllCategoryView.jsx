import { Image } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGetAllCategoryQuery } from '../../../../features/category/categoryApi';
import { setCollectionTitleAndDescription } from '../../../PagesComponents/SetProductTitle';
import { LoadingPage, NotFoundPage } from '../../LandingPage/Components/Loading';
import HeaderLinkItem from '../SingleBrandProductsViews/ChildComponents/developViewSkeletonComponents/HeaderLinkItems';
import DevelopAllCategorySingleBrandItem from './DevelopAllCategorySingleBrandItem';
    

const AllCategoryView = () => {
    
    
    let {data, isLoading, isError, isSuccess, error} = useGetAllCategoryQuery();
    // decide what to render
    let content = null;
    if(isLoading && !isError && !isSuccess){
        content = <LoadingPage/>
    }

    useEffect(()=> {
        let titleText = 'Best Computer Accessories And gadget shop in Bangladesh | Danguli';
        let descriptionArray = ['Best inline shop for']
        data.items.forEach((info)=> {
            descriptionArray.push(info.name);
        });
        let descriptionText = descriptionArray.join(', ');
        setCollectionTitleAndDescription(titleText, descriptionText, 'Computer, Accessories, Mouse, Keyboard, Headphone')
    },[data, isSuccess])
    if(!isLoading && isError && !isSuccess){
        content = <NotFoundPage message={error?.message}/>
    }
    let linksArray = [
        {name: 'HOME', link: '/'},
        {name: 'CATEGORIES', link: `/categories`}, 
    ] 
    


    if(!isLoading && !isError && isSuccess && data?.items?.length > 0){
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
                    {data?.items?.map((item, index) => {
                        return <DevelopAllCategorySingleBrandItem key={index} item={item}/>
                    })} 
                </div> 
            </div>
        </React.Fragment>
    }
    return content; 
}



export default AllCategoryView;