import { Box, Button, Icon } from '@chakra-ui/react';
import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import FilterMainView from './filterMainBody';
const FilterNavbarSideBar = ({filterNavbar, lowPrice, highPrice}) => {
    
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
        <Box className='filter__sidebar__main__container'>
            <Button 
                className='closeButton'
                variant={'unstyled'}  
            >
                <Icon 
                    color={'tomato'} 
                    fontSize={'30px'} 
                    as={AiFillCloseCircle} 
                    onClick={handleToggleFilterSideBar}
                />
            </Button> 
            {
                filterNavbar?.length > 0 && <FilterMainView showMessage={true} filterNavbar={filterNavbar} lowPrice={lowPrice} highPrice={highPrice}/>
            }
        </Box>
    );
};

export default FilterNavbarSideBar;