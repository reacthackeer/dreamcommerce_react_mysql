import { Image } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Footer.scss';
const Footer = () => {  

    return ( 
            <div className='top__two__footer__main__container'>
                <div className='main__category__product__view__upper__container bottom__footer'>
                    <div className='top__main__container'>
                        <div className='footer__child__item'> 
                                <Link to='/' className='store__brand__logo'>
                                    <Image src='/logo.png' alt='company logo'/>
                                </Link> 
                            <Link to='/'>Sky Store Company Limited.</Link>
                        </div>
                        <div className='footer__child__item'>
                            <Link to='/terms-and-condition'>terms and condition</Link>
                            <Link to='/terms-and-condition'>terms and condition</Link>
                            <Link to='/terms-and-condition'>terms and condition</Link>
                            <Link to='/terms-and-condition'>terms and condition</Link>
                            <Link to='/terms-and-condition'>terms and condition</Link>
                            <Link to='/terms-and-condition'>terms and condition</Link>
                            <Link to='/terms-and-condition'>terms and condition</Link>
                            <Link to='/terms-and-condition'>terms and condition</Link>
                            <Link to='/terms-and-condition'>terms and condition</Link>
                            <Link to='/terms-and-condition'>terms and condition</Link>
                        </div>
                        <div className='footer__child__item'>
                            <Link to='/terms-and-condition'>terms and condition</Link>
                            <Link to='/terms-and-condition'>terms and condition</Link>
                            <Link to='/terms-and-condition'>terms and condition</Link>
                            <Link to='/terms-and-condition'>terms and condition</Link>
                            <Link to='/terms-and-condition'>terms and condition</Link>
                            <Link to='/terms-and-condition'>terms and condition</Link>
                            <Link to='/terms-and-condition'>terms and condition</Link>
                            <Link to='/terms-and-condition'>terms and condition</Link>
                            <Link to='/terms-and-condition'>terms and condition</Link>
                            <Link to='/terms-and-condition'>terms and condition</Link>
                        </div>
                        <div className='footer__child__item'>
                            <Link to='/terms-and-condition'>terms and condition</Link>
                            <Link to='/terms-and-condition'>terms and condition</Link>
                            <Link to='/terms-and-condition'>terms and condition</Link>
                            <Link to='/terms-and-condition'>terms and condition</Link>
                            <Link to='/terms-and-condition'>terms and condition</Link>
                            <Link to='/terms-and-condition'>terms and condition</Link>
                            <Link to='/terms-and-condition'>terms and condition</Link>
                            <Link to='/terms-and-condition'>terms and condition</Link>
                            <Link to='/terms-and-condition'>terms and condition</Link>
                            <Link to='/terms-and-condition'>terms and condition</Link>
                        </div>
                    </div> 
                </div>
                <div className='main__category__product__view__upper__container bottom__footer'>
                    <div className='bottom__main__container'>
                        <p className='footer__small__font'>Copyright @ {new Date().getFullYear()} all right reserved</p>
                        <Link 
                            className='footer__small__font'
                            to='https://nextfriday.netlify.app'
                        >
                            DEVELOP BY reactHacker.com
                        </Link>
                    </div>
                </div>
            </div> 
    );
};

export default Footer;