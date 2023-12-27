import { Image } from '@chakra-ui/react';
import { default as React, useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import FilterNavbarSideBar from '../FilterSidebar';
import Pagination from '../Pagination';
import FilterMainView from '../filterMainBody';
import DevelopCartContainer from './DevelopCartContainer';
import DevelopFilterNavbarTop from './developFilterNavbar';
import HeaderLinkItem from './developViewSkeletonComponents/HeaderLinkItems';

const DevelopViewSkeleton = ({filterNavbar, products, totalPage, totalProducts, startFrom, startTo, linksArray, page, lowPrice, highPrice}) => {
    
    let singleProduct = products[0];
    let first15 = products.slice(0,15);
    let second15 = products.slice(15,30);
    let thirdMore = products.slice(30, products.length)  
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
        window.scrollBy({
            top: 1,
            left: 1,
            behavior: 'smooth'
        }) 
        
        // pagination scroll items with animation start
        const paginationItems = document.querySelectorAll('.pagination__main__container');
        paginationItems.forEach((el)=> observer.observe(el));
        // pagination scroll items with animation end

        // sort and filter  scroll items with animation start 
        const sortAndFilterItems = document.querySelectorAll('.filter__and__sort');
        sortAndFilterItems.forEach((el)=> observer.observe(el));
        // sort and filter  scroll items with animation end
        
    },[singleProduct?.ID])
    const setSearchParams = useSearchParams()[1];
    const [currentPage, setCurrentPage] = useState(page);
    let totalPages = totalPage; // total number of pages
    
    const handlePageChange = (page) => {
        setCurrentPage(page);
        setSearchParams({page: page, limit: 45})
        
    };

    
    
    return (
        <React.Fragment>  
            {
                filterNavbar.length > 0 && <FilterNavbarSideBar  filterNavbar={filterNavbar} lowPrice={lowPrice} highPrice={highPrice}/>
            }
            <div className='main__category__product__view__upper__container'> 
                <div className='main__container'>
                    <HeaderLinkItem linksArray={linksArray}/>
                    <div className='product__details__main__container'>
                        <div className='single__item product__filter'> 
                            <div className='container'>
                                {filterNavbar?.length > 0 && <FilterMainView filterNavbar={filterNavbar} lowPrice={lowPrice} highPrice={highPrice}/>}
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
                                    <DevelopFilterNavbarTop infos={{totalProducts, startFrom, startTo}}/>
                                </div> 
                            </div>
                            {first15?.length > 0 && <DevelopCartContainer products={first15}/>}
                            {second15?.length > 0 && <React.Fragment>
                                <div className='single__banner__item'>
                                    <Link to='/offers/headphone'>
                                        <Image src='/ads2.png' alt='shop ads'/>
                                    </Link>
                                </div>  
                                <DevelopCartContainer products={second15}/>
                            </React.Fragment>}
                            {thirdMore?.length > 0 && <React.Fragment>
                                <div className='single__banner__item'>
                                    <Link to='/offers/headphone'>
                                        <Image src='/ads.png' alt='shop ads'/>
                                    </Link>
                                </div>  
                                <DevelopCartContainer products={thirdMore}/>
                            </React.Fragment>}
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

export default DevelopViewSkeleton;