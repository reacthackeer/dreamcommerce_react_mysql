import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { server__image__host__url } from "../../../app/store";
import '../../../styles/Carousel.scss';

function LandingPageHeadSlider() {
    const {banners} = useSelector((state)=> state.auth);
    const settings = {
        dots: true, 
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 900,
        autoplaySpeed: 4000, 
    }; 
    const getFilteredBanners = () => {
        if(banners && banners.length){
            return banners.filter((info)=> info.title === 'carousel')[0].banners
        } else {
            return [];
        }
    }
    return (
        <div>
        {
            banners && banners.length > 0 &&
            <Slider {...settings} arrows={true}>
                {
                    getFilteredBanners().map((info, index) => {
                        return   <div key={index}> 
                                    <Link to={info.link}>
                                        <Image src={server__image__host__url+info.img__src} alt={info.title}/> 
                                    </Link>
                                </div>
                    })
                }   
            </Slider>
        }
        </div>
    );
}

function HomeAdsBannerLeft() {
    const {banners} = useSelector((state)=> state.auth);
    const settings = {
        dots: false, 
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 900,
        autoplaySpeed: 4000, 
    }; 
    const getFilteredBanners = () => {
        if(banners && banners.length){
            return banners.filter((info)=> info.title === 'homeBanner')[0].banners
        } else {
            return [];
        }
    }
    return (
        <div>
        {
            banners && banners.length > 0 &&
            <Slider {...settings} draggable={true}>
                {
                    getFilteredBanners().map((info, index) => {
                        return   <div key={index}> 
                                    <Link to={info.link}>
                                        <Image src={server__image__host__url+info.img__src} alt={info.title}/> 
                                    </Link>
                                </div>
                    })
                }   
            </Slider>
        }
        </div>
    );
}


function HomeAdsBannerRight() {
    const {banners} = useSelector((state)=> state.auth);
    const settings = {
        dots: false, 
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 900,
        autoplaySpeed: 4000, 
    }; 
    
    const getFilteredBanners = () => {
        if(banners && banners.length){
            let  rightBannerResult = banners.filter((info)=> info.title === 'homeBanner')[0].banners;
            if(rightBannerResult && rightBannerResult.length){
                return [...rightBannerResult].reverse();
            }else{
                return [];
            }
        } else {
            return [];
        }
    }
    return (
        <div>
        {
            banners && banners.length > 0 &&
            <Slider {...settings} draggable={true}>
                {
                    getFilteredBanners().map((info, index) => {
                        return   <div key={index}> 
                                    <Link to={info.link}>
                                        <Image src={server__image__host__url+info.img__src} alt={info.title}/> 
                                    </Link>
                                </div>
                    })
                }   
            </Slider>
        }
        </div>
    );
}

function SmallCarousel() {
    const {banners} = useSelector((state)=> state.auth);
    const settings = {
        dots: false, 
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 900,
        autoplaySpeed: 4000, 
    }; 
    
    const getFilteredBanners = () => {
        if(banners && banners.length){
            let  rightBannerResult = banners.filter((info)=> info.title === 'small')[0].banners;
            if(rightBannerResult && rightBannerResult.length){
                return [...rightBannerResult];
            }else{
                return [];
            }
        } else {
            return [];
        }
    }
    return (
        <div className="small__carousel__container">
        {
            banners && banners.length > 0 &&
            <Slider {...settings} draggable={true}>
                {
                    getFilteredBanners().map((info, index) => {
                        return   <Box key={index} className="slider__item"> 
                                    <Link to={info.link}>
                                        <Image src={server__image__host__url+info.img__src} alt={info.title}/> 
                                    </Link>
                                </Box>
                    })
                }   
            </Slider>
        }
        </div>
    );
}


function PosterCarousel() {
    const {banners} = useSelector((state)=> state.auth);
    const settings = {
        dots: false, 
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 900,
        autoplaySpeed: 4000, 
    }; 
    
    const getFilteredBanners = () => {
        if(banners && banners.length){
            let  rightBannerResult = banners.filter((info)=> info.title === 'poster')[0].banners;
            if(rightBannerResult && rightBannerResult.length){
                return [...rightBannerResult];
            }else{
                return [];
            }
        } else {
            return [];
        }
    }
    return (
        <div className="small__poster__container">
        {
            banners && banners.length > 0 &&
            <Slider {...settings} draggable={true}>
                {
                    getFilteredBanners().map((info, index) => {
                        return   <Box key={index} className="slider__item"> 
                                    <Link to={info.link}>
                                        <Image src={server__image__host__url+info.img__src} alt={info.title}/> 
                                    </Link>
                                </Box>
                    })
                }   
            </Slider>
        }
        </div>
    );
}


function PosterCarouselReverse() {
    const {banners} = useSelector((state)=> state.auth);
    const settings = {
        dots: false, 
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 900,
        autoplaySpeed: 4000, 
    }; 
    
    const getFilteredBanners = () => {
        if(banners && banners.length){
            let  rightBannerResult = banners.filter((info)=> info.title === 'poster')[0].banners;
            if(rightBannerResult && rightBannerResult.length){
                return [...rightBannerResult].reverse();
            }else{
                return [];
            }
        } else {
            return [];
        }
    }
    return (
        <div className="small__poster__container">
        {
            banners && banners.length > 0 &&
            <Slider {...settings} draggable={true}>
                {
                    getFilteredBanners().map((info, index) => {
                        return   <Box key={index} className="slider__item"> 
                                    <Link to={info.link}>
                                        <Image src={server__image__host__url+info.img__src} alt={info.title}/> 
                                    </Link>
                                </Box>
                    })
                }   
            </Slider>
        }
        </div>
    );
}

export { HomeAdsBannerLeft, HomeAdsBannerRight, LandingPageHeadSlider, PosterCarousel, PosterCarouselReverse, SmallCarousel };

