import { Box, Button } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import AllCategoryMainNavbar from '../Navbar/AllCategoryMainNavbar';
import PagesAccording from '../Navbar/PagesAccording';
import PopularCategoryAccording from '../Navbar/PopularCategoryAccording';

const ColorNavbar = () => {  
    const navigate = useNavigate();
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
    
    return (
        <React.Fragment> 
            <div className='main__category__product__view__upper__container color__navbar'> 
                <div className='navbar__items__wrapper__container'>
                    <Box className='left__items'> 
                        <Box className='category__view'>
                            <Box className='main__view__container'> 
                                <AllCategoryMainNavbar/>
                            </Box>
                        </Box>
                        <Box className='category__view__pages'>
                            <Box className='main__view__container__pages'> 
                                <PopularCategoryAccording/>
                            </Box>
                        </Box> 
                        <Box className='category__view__pages pages__pages'>
                            <Box className='main__view__container__pages'> 
                                <PagesAccording/>
                            </Box>
                        </Box>  
                    </Box> 
                    <Box className='right__items'>
                        <Button
                            borderRadius={'none'}
                            rightIcon={<HiOutlineArrowNarrowRight/>}
                            onClick={()=> navigate('/signup')}
                        >
                            SIGN UP
                        </Button> 
                    </Box>
                </div>
            </div> 
        </React.Fragment>
    );
};

export default ColorNavbar;