import React, { memo } from 'react';
import '../../../styles/profile.scss';
import ProductOrderTable from './ProductTable';
import ProfileCart from './ProfileCart';
const ProfileComponents = memo(() => { 
    
    return (
        <div className='main__category__product__view__upper__container bg__white'>
            <div className='padding__top padding__bottom profile__container'>
                <div>
                    <ProfileCart/>
                </div>
                <div>
                    <ProductOrderTable/>
                </div>
            </div>
        </div>
    );
});

export default ProfileComponents;