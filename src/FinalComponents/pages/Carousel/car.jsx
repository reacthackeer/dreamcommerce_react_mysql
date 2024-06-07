import { Image } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import '../../../styles/Carousel.scss';

function AutoPlay() {
  const settings = {
    dots: true, 
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 4000, 
  };
  return (
    <div className="home__page__carousel">
        <Slider {...settings} arrows={false}>
            <div> 
                <Image src='/homeBanner/carousel/1.png' alt='done'/> 
            </div>  
            <div> 
                <Image src='/homeBanner/carousel/2.png' alt='done'/> 
            </div>  
            <div> 
                <Image src='/homeBanner/carousel/2.png' alt='done'/> 
            </div>
            <div> 
                <Image src='/homeBanner/carousel/1.png' alt='done'/> 
            </div>  
            <div> 
                <Image src='/homeBanner/carousel/2.png' alt='done'/> 
            </div>  
            <div> 
                <Image src='/homeBanner/carousel/2.png' alt='done'/> 
            </div>  
            <div> 
                <Image src='/homeBanner/carousel/1.png' alt='done'/> 
            </div>  
            <div> 
                <Image src='/homeBanner/carousel/2.png' alt='done'/> 
            </div>  
            <div> 
                <Image src='/homeBanner/carousel/2.png' alt='done'/> 
            </div>   
        </Slider>
    </div>
  );
}

export default AutoPlay;
