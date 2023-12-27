import { Image } from '@chakra-ui/react';
import React from 'react';
import '../../styles/loading.scss';
const LoadingPage = ({message}) => {
    return (
        <div className='loading__page__upper__container loading'>
            <div className='loading__page__main__container'>
                <div className='content__main__container'>
                    <Image src='/loading.gif' alt='loading logo'/>
                    {
                        message && <h1 className='loading__main__title__text'>{message}</h1>
                    }
                </div>
            </div>
        </div>
    );
};

const CheckAuth = () => {
    return (
        <div className='loading__page__upper__container not__found'>
            <div className='loading__page__main__container'>
                <div className='content__main__container'>
                    <Image src='/not-found.gif' alt='loading logo'/>
                    <h1 className='loading__main__title__text'>Checking Authentication....</h1>
                </div>
            </div>
        </div>
    );
};

const NotFoundPage = ({message}) => { 
    return (
        <div className='loading__page__upper__container not__found'>
            <div className='loading__page__main__container'>
                <div className='content__main__container'>
                    <Image src='/not-found.gif' alt='loading logo'/>
                    {
                        message && <h1 className='loading__main__title__text'>{message}</h1>
                    }
                </div>
            </div>
        </div>
    );
};

export { LoadingPage, NotFoundPage, CheckAuth };

