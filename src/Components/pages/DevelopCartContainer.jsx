import React, { useEffect } from 'react';
import { SingleCartItem } from './Home/Components/developSingleCart';

const DevelopCartContainer = ({products}) => {
    useEffect(()=>{
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry)=>{ 
                if(entry.isIntersecting){
                    entry.target.classList.add('active')
                }else{
                    entry.target.classList.remove('active')
                }
            })
        })

        // banner scroll items with animation start 
        const cartItems = document.querySelectorAll('.view__area');
        cartItems.forEach((el)=> observer.observe(el));
        // banner
        const bannerItems = document.querySelectorAll('.single__banner__item');
        bannerItems.forEach((el)=> observer.observe(el));
    },[products])
    return ( 
        <div className='product__view__main__body'>
            {
                products.map((info, index)=> {
                    return <div className='single__product__item' key={index}>
                                <div className='view__area'>
                                    <SingleCartItem infos={info}/>
                                </div>
                            </div> 
                })
            } 
    </div>
    );
};

export default DevelopCartContainer;