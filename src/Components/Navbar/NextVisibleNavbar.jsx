import { Button, Image, Input, Link } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { MdFavoriteBorder } from 'react-icons/md';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { Link as RLink, useNavigate } from 'react-router-dom';

const NextVisibleNavbar = () => {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');
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
        // banner scroll items with animation end

        // banner scroll items with animation start
        const bannerItems = document.querySelectorAll('.single__banner__item');
        bannerItems.forEach((el)=> observer.observe(el));
        // banner scroll items with animation end

        // pagination scroll items with animation start
        const paginationItems = document.querySelectorAll('.pagination__main__container');
        paginationItems.forEach((el)=> observer.observe(el));
        // pagination scroll items with animation end

        // sort and filter  scroll items with animation start 
        const sortAndFilterItems = document.querySelectorAll('.filter__and__sort');
        sortAndFilterItems.forEach((el)=> observer.observe(el));
        // sort and filter  scroll items with animation end
        
    },[])

    const handleClickSearch = () => {
        if(searchValue){
            navigate(`/search/${searchValue}`);
            setSearchValue('')
        }
    }
    return (
        <React.Fragment>
            <div className='main__category__product__view__upper__container visible__next__navbar__white color__white border__top'>
                <div className='main__container__top__container'>
                    <div className='left__side logo__container'> 
                        <RLink to='/'>
                            <Image src='/logo.png' alt='logo'/>
                        </RLink>
                    </div> 
                    <div className='left__side search__container'>
                        <Input 
                            placeholder={'Search Product...'}
                            value={searchValue}
                            onChange={(e)=> setSearchValue(e.target.value)}
                        />
                        <Button
                            variant={'outline'}
                            onClick={handleClickSearch}
                        >Search</Button>
                    </div>
                    <div className='left__side cart__and__wishlist__and__profile__container'>
                        <Link as={RLink} to='/wishlist'>
                            <MdFavoriteBorder fontSize={'30px'}/>
                        </Link>
                        <Link as={RLink} to='/cart'>
                            <RiShoppingCart2Line fontSize={'30px'}/>
                        </Link>
                        <Link as={RLink} to='/profile'>
                            <CgProfile fontSize={'30px'}/>
                        </Link> 
                    </div>
                </div>
            </div> 
        </React.Fragment>
    );
};

export default NextVisibleNavbar;