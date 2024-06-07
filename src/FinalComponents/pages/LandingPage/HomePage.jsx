import { Box, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useGetMultipleOfferQuery } from '../../../features/offer/offerApi';
import { useGetAllShopByBrandQuery } from '../../../features/shopByBrand/shopByBrandApi';
import { useGetAllShopByCategoryQuery } from '../../../features/shopByCategory/shopByCategoryApi';
import { HomeAdsBannerLeft, HomeAdsBannerRight, LandingPageHeadSlider } from '../Carousel/LandingPageHeadCarousel';
import { services } from './Components/Homepage';
import { LoadingPage, NotFoundPage } from './Components/Loading';
import SingleBrandItem from './Components/SingleBrandItem';
import { SingleCartItem as SingleCart } from './Components/SingleCartItem';
const HomePage = () => { 

    let {data, isError, isSuccess, error, isLoading} = useGetMultipleOfferQuery({page: 1, peerPage: 8});
    let {data: bd, isError: bie, isSuccess: bis, error: be, isLoading: bl} = useGetAllShopByBrandQuery();
    let {data: cd, isError: cie, isSuccess: cis, error: ce, isLoading: cl} = useGetAllShopByCategoryQuery();
    let content = null;
    // decide what to render 
    if(isLoading || bl || cl){
        content = <LoadingPage/>
    };

    if(isError || bie || cie){
        if(isError){
            content = <NotFoundPage message={error.message}/>
        }

        if(bie){
            content = <NotFoundPage message={be.error}/>
        }

        if(cie){
            content = <NotFoundPage message={ce.error}/>
        }
    }
    if(isSuccess && bis && cis && data?.products?.length > 0 && bd?.length > 0 && cd?.length > 0){
        content =         
        <React.Fragment>  
            <div className='main__category__product__view__upper__container bg__1'>  
                <div className='top__banner__upper__container padding__bottom padding__top'> 
                    <div className='top__banner__container'>
                        <LandingPageHeadSlider/>
                    </div>
                </div>
            </div>
            {/*first offer start*/}
            <React.Fragment> 
                <div className='main__category__product__view__upper__container bg__1'>  
                    <div className='layout__title__upper__container padding__intro__x'>
                        <div className='lay__title__main__container'>
                            <Text className='intro__font__size'>{data.products[0].name.split('__').join(' ')}</Text>
                            <Link to={`/offers/${data.products[0].name}`} className='intro__link__font__size'>View All</Link>
                        </div>
                    </div>
                </div>
                <div className='main__category__product__view__upper__container bg__1'> 
                    <div className='offer__fill__container padding__intro__top padding__bottom'>
                        {data.products[0].products.map((item, index) => {
                            return(
                                <div className='single__fill__item__upper__cover' key={index}>
                                    <div className='single__fill__item'> 
                                        <SingleCart infos={item}/>
                                    </div>
                                </div>
                            )
                        })} 
                    </div> 
                </div>
            </React.Fragment>
            {/*first offer end*/}

            {/*second offer start*/} 
            <React.Fragment> 
                <div className='main__category__product__view__upper__container bg__1'>  
                    <div className='layout__title__upper__container padding__intro__x'>
                        <div className='lay__title__main__container'>
                            <Text className='intro__font__size'>{data.products[1].name.split('__').join(' ')}</Text>
                            <Link to={`/offers/${data.products[1].name}`}  className='intro__link__font__size'>View All</Link>
                        </div>
                    </div>
                </div>
                <div className='main__category__product__view__upper__container bg__1'> 
                    <div className='offer__fill__container padding__intro__top padding__bottom'>
                        {data.products[1].products.map((item, index) => {
                            return(
                                <div className='single__fill__item__upper__cover' key={index}>
                                    <div className='single__fill__item'> 
                                        <SingleCart infos={item}/>
                                    </div>
                                </div>
                            )
                        })} 
                    </div> 
                </div>
            </React.Fragment>
            {/*second offer end*/}
                        
            <React.Fragment>
                <div className='main__category__product__view__upper__container bg__1'>  
                    <div className='layout__title__upper__container padding__intro__x'>
                        <div className='lay__title__main__container'>
                            <Text className='intro__font__size'>Shop By Brand</Text>
                        </div>
                    </div>
                </div>
                <div className='main__category__product__view__upper__container bg__1'> 
                    <div className='brand__category__fill__container padding__intro__top padding__bottom'>
                        {bd.map((item, index) => {
                            return <SingleBrandItem key={index} item={item}/>
                        })}
                        <div className='single__fill__item__upper__cover view__all'>
                            <div className='single__fill__item'>
                                <Link to='/brands' className='view__all__fill__link__item'>View All Brands</Link>
                            </div>
                        </div> 
                    </div> 
                </div>
            </React.Fragment>

            {/*third offer start*/} 

            <React.Fragment> 
                <div className='main__category__product__view__upper__container bg__1'>  
                    <div className='layout__title__upper__container padding__intro__x'>
                        <div className='lay__title__main__container'>
                            <Text className='intro__font__size'>{data.products[2].name.split('__').join(' ')}</Text>
                            <Link to={`/offers/${data.products[2].name}`}  className='intro__link__font__size'>View All</Link>
                        </div>
                    </div>
                </div>
                <div className='main__category__product__view__upper__container bg__1'> 
                    <div className='offer__fill__container padding__intro__top padding__bottom'>
                        {data.products[2].products.map((item, index) => {
                            return(
                                <div className='single__fill__item__upper__cover' key={index}>
                                    <div className='single__fill__item'> 
                                        <SingleCart infos={item}/>
                                    </div>
                                </div>
                            )
                        })} 
                    </div> 
                </div>
            </React.Fragment>

            {/*third offer end*/}
            
            <React.Fragment>
                <div className='main__category__product__view__upper__container bg__1'>  
                    <div className='layout__title__upper__container padding__intro__x'>
                        <div className='lay__title__main__container'>
                            <Text className='intro__font__size'>Shop By Category</Text>
                            <Link to='/offers/popular' className='intro__link__font__size'>View All</Link>
                        </div>
                    </div>
                </div>
                <div className='main__category__product__view__upper__container bg__1'> 
                    <div className='brand__category__fill__container padding__top padding__bottom'>
                        {cd.map((item, index) => {
                            return <SingleBrandItem item={item} key={index}/>
                        })}
                        <div className='single__fill__item__upper__cover view__all'>
                            <div className='single__fill__item'>
                                <Link to='/categories' className='view__all__fill__link__item'>View All Categories</Link>
                            </div>
                        </div> 
                    </div> 
                </div> 
            </React.Fragment> 
            <div className='main__category__product__view__upper__container bg__1'>
                <Box className='our__best__feature__fill__container  padding__top padding__bottom'>
                    {
                        services.map((info, index)=>{
                            return  <div className='single__best__feature__upper__fill__container' key={index}>
                                        <Box className='single__best__feature'>
                                            <Box className='icon__box'>
                                                <Icon fontSize={'50px'} as={info.icon}/> 
                                            </Box>
                                            <Box className='intro__box'>
                                                <Text fontSize={'2xl'}>{info.header}</Text>
                                                <Text fontSize={'medium'}>{info.title}</Text>
                                            </Box>
                                        </Box>
                                    </div> 
                        })
                    } 
                </Box>
            </div> 

            {/*third offer start*/} 

            <React.Fragment> 
                <div className='main__category__product__view__upper__container bg__1'>  
                    <div className='layout__title__upper__container padding__intro__x'>
                        <div className='lay__title__main__container'>
                            <Text className='intro__font__size'>{data.products[3].name.split('__').join(' ')}</Text>
                            <Link to={`/offers/${data.products[3].name}`}  className='intro__link__font__size'>View All</Link>
                        </div>
                    </div>
                </div>
                <div className='main__category__product__view__upper__container bg__1'> 
                    <div className='offer__fill__container padding__intro__top padding__bottom'>
                        {data.products[3].products.map((item, index) => {
                            return(
                                <div className='single__fill__item__upper__cover' key={index}>
                                    <div className='single__fill__item'> 
                                        <SingleCart infos={item}/>
                                    </div>
                                </div>
                            )
                        })} 
                    </div> 
                </div>
            </React.Fragment>

            {/*third offer end*/}
            
            <div className='main__category__product__view__upper__container bg__white'>
                <div className='image__two__grid__home__view padding__top'>
                    <HomeAdsBannerLeft/> 
                    <HomeAdsBannerRight/>
                </div>
            </div>

            {/*third offer start*/}  
            <React.Fragment> 
                <div className='main__category__product__view__upper__container bg__1 margin__top'>  
                    <div className='layout__title__upper__container'>
                        <div className='lay__title__main__container'> 
                            <Text className='intro__font__size'>{data.products[4].name.split('__').join(' ')}</Text>
                            <Link to={`/offers/${data.products[4].name}`}  className='intro__link__font__size'>View All</Link>
                        </div>
                    </div>
                </div>
                <div className='main__category__product__view__upper__container bg__1'> 
                    <div className='offer__fill__container padding__intro__top padding__bottom'>
                        {data.products[4].products.map((item, index) => {
                            return(
                                <div className='single__fill__item__upper__cover' key={index}>
                                    <div className='single__fill__item'> 
                                        <SingleCart infos={item}/>
                                    </div>
                                </div>
                            )
                        })} 
                    </div> 
                </div>
            </React.Fragment> 
            {/*third offer end*/}
            
        </React.Fragment> 
    }
    return content;
};

export default HomePage;