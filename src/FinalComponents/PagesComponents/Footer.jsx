import { Image } from '@chakra-ui/react';
import React from 'react';
import { TfiEmail, TfiFacebook, TfiInstagram, TfiTwitter, TfiYoutube } from "react-icons/tfi";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { server__image__host__url } from '../../app/store';
import '../../styles/Footer.scss';
const Footer = () => {  
    const {storeInfos, contactInfos} = useSelector((state)=> state.auth); 
    return ( 
        <div>
            {
                storeInfos && storeInfos?.store__name &&

            <div className='top__two__footer__main__container'>
                <div className='main__category__product__view__upper__container bottom__footer'>
                    <div className='top__main__container'>
                        <div className='top__logo__container'>
                            <Link to='/'>
                                <Image src={server__image__host__url+storeInfos.img__src} alt='store-logo'/>
                            </Link>
                        </div>
                        <div className='middle__link__container'>
                            <Link to='/profile'>Profile</Link>
                            <Link to='/cart'>Cart</Link>
                            <Link to='/wishlist'>Wishlist</Link>
                            <Link to='/profile'>Track Order</Link>
                            <Link to='/about-us'>About Us</Link>
                            <Link to='/contact-us'>Contact Us</Link>
                            <Link to='/privacy-policy'>Privacy Policy</Link>
                            <Link to='/terms-and-condition'>Terms and condition</Link>
                            <Link to='/refund-policy'>Refund Policy</Link>
                            <Link to='/refund-policy'>Support</Link>
                        </div>
                        <div className='last__link__container'>
                            <Link
                                to={contactInfos.facebook}
                                target='_blank'
                            ><TfiFacebook/></Link>
                            <Link
                                to={contactInfos.email}
                                target='_blank'
                            ><TfiEmail/></Link>
                            <Link
                                to={contactInfos.youtube}
                                target='_blank'
                            ><TfiYoutube/></Link>
                            <Link
                                to={contactInfos.twitter}
                                target='_blank'
                            ><TfiTwitter/></Link>
                            <Link
                                to={contactInfos.instagram}
                                target='_blank'
                            ><TfiInstagram/></Link> 
                        </div>
                    </div>  
                </div>
                <div className='main__category__product__view__upper__container bottom__footer'>
                    <div className='bottom__main__container'>
                        <p className='footer__small__font'>Copyright @ {new Date().getFullYear()} all right reserved by {storeInfos.store__name}</p>
                        <Link 
                            className='footer__small__font'
                            to='https://reacthacker.netlify.app'
                        >
                            DEVELOP BY reactHacker.com
                        </Link>
                    </div>
                </div>
            </div> 
        }
        </div>
    );
};

export default Footer;