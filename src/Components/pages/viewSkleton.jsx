import { Box, Button, HStack, Icon, Image, Select, Text } from '@chakra-ui/react';
import { default as React, useEffect, useState } from 'react';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BiFilterAlt } from 'react-icons/bi';
import { BsSortNumericUpAlt } from 'react-icons/bs';
import { GrGrid } from 'react-icons/gr';
import { SlCalculator } from 'react-icons/sl';
import { Link, useParams } from 'react-router-dom';
import FilterNavbarSideBar from '../FilterSidebar';
import Pagination from '../Pagination';
import FilterMainView from '../filterMainBody';
import SingleCartItem from './Home/Components/SignleCartItem';

const MainView = () => {
    const [showCalculate, setShowCalculate] = useState(true);
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
    const [isGridView, setIsGridView] = useState(true);
    const {categoryName} = useParams();
    const linkArray = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Brands',
            link: '/brands'
        },
        {
            name: categoryName,
            link: `/brands/${categoryName}`
        },
    ]

    const handleToggleFilterSideBar = () => {
        let filterSideBar = document.querySelector('.filter__sidebar__main__container');
        if(filterSideBar){
            filterSideBar.classList.toggle('active')
        }

        let body = document.querySelector('.mobile__view__container');
        if(body){
            body.classList.toggle('active');
        }
    }
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5; // total number of pages
  
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    

    return (
        <React.Fragment>  
            <FilterNavbarSideBar/>
            <div className='main__category__product__view__upper__container'> 
                <div className='main__container'>
                    <div className='top__link__container'>
                        <p>Home / Brands / Apple</p>
                    </div>
                    <div className='product__details__main__container'>
                        <div className='single__item product__filter'> 
                            <div className='container'>
                                <FilterMainView/>
                            </div>  
                            <div className='banner__container'>
                                <Link to='/offers/earphone'>
                                    <Image src='/filterads.png' alt='product'/>
                                </Link>
                            </div> 
                        </div>
                        <div className='single__item product__body'>
                            <div className='filter__and__sort'>
                                <div className='container'>
                                <Box 
                                    className='top__filter__and__product__calculate'  
                                >   
                                    {
                                        !showCalculate ?
                                        <Select width={'200px'} placeholder='Select Sort Type'>
                                            <option>High to Low price</option>
                                            <option>Low To High price</option>
                                            <option>A-Z product name</option>
                                            <option>Z-A product name</option>
                                            <option>A-Z brand name</option>
                                            <option>Z-A brand name</option>
                                        </Select>
                                    :
                                        <Text
                                            fontSize={'small'}
                                        >
                                            Showing 1-30 of 200 results
                                        </Text>
                                    }
                                    <HStack className='filter__and__sort__next'> 
                                        <Button 
                                            className='filter__btn__hidden' 
                                            onClick={handleToggleFilterSideBar}
                                        >
                                            <Icon as={BiFilterAlt}/>
                                        </Button>
                                        {
                                            isGridView ?
                                            <Button 
                                                className='grid__btn__hidden'
                                                onClick={()=> setIsGridView(!isGridView)}
                                            >
                                                <Icon as={GrGrid}/>
                                            </Button>
                                        :
                                            <Button  
                                                className='grid__btn__hidden'
                                                onClick={()=> setIsGridView(!isGridView)}
                                            >
                                                <Icon as={AiOutlineUnorderedList}/>
                                            </Button>
                                        }
                                        {
                                            showCalculate ?
    
                                        <Button
                                            onClick={()=> setShowCalculate(!showCalculate)}
                                        >
                                            <Icon as={BsSortNumericUpAlt}/>
                                        </Button>
                                        :
                                        <Button
                                            onClick={()=> setShowCalculate(!showCalculate)}
                                        >
                                            <Icon as={SlCalculator}/>
                                        </Button> 
                                                
                                        }
                                    </HStack>
                                </Box> 
                                
                                </div> 
                            </div>
                            <div className='product__view__main__body'>
                                <div className='single__product__item'>
                                    <div className='view__area'>
                                        <SingleCartItem/>
                                    </div>
                                </div> 
                                <div className='single__product__item'>
                                    <div className='view__area'>
                                        <SingleCartItem/>
                                    </div>
                                </div> 
                                <div className='single__product__item'>
                                    <div className='view__area'>
                                        <SingleCartItem/>
                                    </div>
                                </div> 
                                <div className='single__product__item'>
                                    <div className='view__area'>
                                        <SingleCartItem/>
                                    </div>
                                </div> 
                                <div className='single__product__item'>
                                    <div className='view__area'>
                                        <SingleCartItem/>
                                    </div>
                                </div> 
                                <div className='single__product__item'>
                                    <div className='view__area'>
                                        <SingleCartItem/>
                                    </div>
                                </div> 
                                <div className='single__product__item'>
                                    <div className='view__area'>
                                        <SingleCartItem/>
                                    </div>
                                </div> 
                                <div className='single__product__item'>
                                    <div className='view__area'>
                                        <SingleCartItem/>
                                    </div>
                                </div> 
                                <div className='single__product__item'>
                                    <div className='view__area'>
                                        <SingleCartItem/>
                                    </div>
                                </div> 
                                <div className='single__product__item'>
                                    <div className='view__area'>
                                        <SingleCartItem/>
                                    </div>
                                </div> 
                            </div>
                            <div className='single__banner__item'>
                                <Link to='/offers/headphone'>
                                    <Image src='/ads2.png' alt='shop ads'/>
                                </Link>
                            </div>
                            <div className='product__view__main__body'>
                                <div className='single__product__item'>
                                    <div className='view__area'>
                                        <SingleCartItem/>
                                    </div>
                                </div> 
                                <div className='single__product__item'>
                                    <div className='view__area'>
                                        <SingleCartItem/>
                                    </div>
                                </div> 
                                <div className='single__product__item'>
                                    <div className='view__area'>
                                        <SingleCartItem/>
                                    </div>
                                </div> 
                                <div className='single__product__item'>
                                    <div className='view__area'>
                                        <SingleCartItem/>
                                    </div>
                                </div> 
                                <div className='single__product__item'>
                                    <div className='view__area'>
                                        <SingleCartItem/>
                                    </div>
                                </div> 
                                <div className='single__product__item'>
                                    <div className='view__area'>
                                        <SingleCartItem/>
                                    </div>
                                </div> 
                                <div className='single__product__item'>
                                    <div className='view__area'>
                                        <SingleCartItem/>
                                    </div>
                                </div> 
                                <div className='single__product__item'>
                                    <div className='view__area'>
                                        <SingleCartItem/>
                                    </div>
                                </div> 
                                <div className='single__product__item'>
                                    <div className='view__area'>
                                        <SingleCartItem/>
                                    </div>
                                </div> 
                                <div className='single__product__item'>
                                    <div className='view__area'>
                                        <SingleCartItem/>
                                    </div>
                                </div> 
                            </div>
                            <div className='single__banner__item'>
                                <Link to='/offers/headphone'>
                                    <Image src='/ads.png' alt='shop ads'/>
                                </Link>
                            </div>
                            <div className='product__view__main__body'>
                                <div className='single__product__item'>
                                    <div className='view__area'>
                                        <SingleCartItem/>
                                    </div>
                                </div> 
                                <div className='single__product__item'>
                                    <div className='view__area'>
                                        <SingleCartItem/>
                                    </div>
                                </div> 
                                <div className='single__product__item'>
                                    <div className='view__area'>
                                        <SingleCartItem/>
                                    </div>
                                </div> 
                                <div className='single__product__item'>
                                    <div className='view__area'>
                                        <SingleCartItem/>
                                    </div>
                                </div> 
                                <div className='single__product__item'>
                                    <div className='view__area'>
                                        <SingleCartItem/>
                                    </div>
                                </div> 
                                <div className='single__product__item'>
                                    <div className='view__area'>
                                        <SingleCartItem/>
                                    </div>
                                </div> 
                                <div className='single__product__item'>
                                    <div className='view__area'>
                                        <SingleCartItem/>
                                    </div>
                                </div> 
                                <div className='single__product__item'>
                                    <div className='view__area'>
                                        <SingleCartItem/>
                                    </div>
                                </div> 
                                <div className='single__product__item'>
                                    <div className='view__area'>
                                        <SingleCartItem/>
                                    </div>
                                </div> 
                                <div className='single__product__item'>
                                    <div className='view__area'>
                                        <SingleCartItem/>
                                    </div>
                                </div> 
                            </div>
                            <div className='pagination__main__container'>
                                <div className='container'>
                                <Pagination
                                    totalPages={totalPages}
                                    currentPage={currentPage}
                                    onPageChange={handlePageChange}
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default MainView;