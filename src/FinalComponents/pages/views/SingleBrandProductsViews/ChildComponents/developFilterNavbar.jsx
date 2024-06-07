import { Box, Button, HStack, Icon, Select, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BiFilterAlt } from 'react-icons/bi';
import { BsSortNumericUpAlt } from 'react-icons/bs';
import { GrGrid } from 'react-icons/gr';
import { SlCalculator } from 'react-icons/sl';

const DevelopFilterNavbarTop = ({infos:{totalProducts, startFrom, startTo}}) => {
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

    
    
    return (
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
                    Showing {startFrom+1}-{startTo > totalProducts ? totalProducts : startTo} of {totalProducts} results
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
    );
};

export default DevelopFilterNavbarTop;