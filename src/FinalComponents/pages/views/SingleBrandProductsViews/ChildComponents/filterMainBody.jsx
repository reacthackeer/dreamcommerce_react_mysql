import { EditIcon } from '@chakra-ui/icons';
import { Accordion, Box, Button, HStack, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { clearFilterProduct, updateProductPrice, updateSearchString } from '../../../../../features/product/productSlice';

import SingleSelectItem from './SingleSelectItem';
const FilterMainView = ({showMessage, stp, filterNavbar}) => {
    
    const {topCategory, category, collection} = useParams();
    
    const dispatch = useDispatch();
        
    const startPrice = useSelector((state)=> state.productFilter.price.start);
    const endPrice = useSelector((state)=> state.productFilter.price.end);
    
    const handlePriceRangeEnd = ({target:{value}}) => {
        let newValue = Number(value);
        if(newValue && newValue > startPrice){
            dispatch(updateProductPrice({start: startPrice, end: newValue}));
        }
    }
    const handlePriceRangeStart = ({target:{value}}) => {
        let newValue = Number(value);
        if(newValue && newValue < endPrice){
            dispatch(updateProductPrice({start: newValue, end: endPrice}));
        }
    }

    const navigate = useNavigate();
    return ( 
        <Box className='main__container'>
            {
                showMessage && <Text 
                textAlign={'center'} 
                pt='20px'
                fontSize={'medium'}
                mb={'3'}
            >
                Filter for Your Style. Shop with Ease!
            </Text>
            }
            
            <HStack pt={stp ? '20px' : '5px'}>
                <Input 
                    placeholder='Search here....'  
                    onChange={({target:{value}})=> dispatch(updateSearchString(value))}
                /> 
            </HStack>
            <Box className='range__slider' pt='20px'>
                <Box display='grid' gridTemplateColumns={'calc(50% - 10px) calc(50% - 10px)'} gridGap={'20px'} mb='3'>
                    <Input onChange={handlePriceRangeStart} placeholder='start price'></Input>
                    <Input onChange={handlePriceRangeEnd} placeholder='end price'></Input>
                </Box>
                <Text>Price: {startPrice} - {endPrice}</Text>
            </Box>
            <Box className='select__item__main__container' pt='20px'>
                <Accordion allowMultiple>
                    {
                        filterNavbar.map((info, index)=><SingleSelectItem infos={info} key={index}/>)
                    }
                </Accordion>
            </Box> 
            <Box display={'flex'} pt='3' justifyContent={'space-between'}>
                <Button
                    isDisabled={!topCategory || !category || !collection}
                    onClick={()=> navigate(`/edit/filter/${topCategory}/${category}/${collection}`)}
                >
                    <EditIcon/>
                </Button>
                <Button
                    onClick={()=> dispatch(clearFilterProduct())}
                >RESET FILTER</Button>
            </Box>
        </Box> 
    );
};

export default FilterMainView;


/*
                    <RangeSlider 
                        aria-label={['min', 'max']} 
                        min={lowPrice} 
                        max={highPrice} 
                        defaultValue={[lowPrice, highPrice]}
                        onChange={handleSliderRangeChange}
                    >
                    <RangeSliderTrack bg='red.100'>
                        <RangeSliderFilledTrack bg='tomato' />
                    </RangeSliderTrack>
                    <RangeSliderThumb boxSize={6} index={0}> 
                        <Box color='tomato' as={MdGraphicEq} /> 
                    </RangeSliderThumb>
                    <RangeSliderThumb boxSize={6} index={1}> 
                        <Box color='tomato' as={MdGraphicEq} />
                    </RangeSliderThumb>
                </RangeSlider>
*/