import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Text
} from '@chakra-ui/react';
import React, { useState } from 'react';
import '../../../styles/addProduct.scss';
const ProductOverviews = () => {
    const [overviews, setOverviews] = useState(JSON.parse(localStorage.getItem('overviews')) || []);

    const addOverview = () => {
      setOverviews([...overviews, ""]);
    };
  
    const removeOverview = (index) => {
      const updatedOverviews = [...overviews];
      updatedOverviews.splice(index, 1);
      setOverviews(updatedOverviews);
    };
  
    const handleOverviewChange = (index, event) => {
      const updatedOverviews = [...overviews];
      updatedOverviews[index] = event.target.value;
      setOverviews(updatedOverviews);
    };
  
    const handleSubmitOverviews = (event) => {
      event.preventDefault(); 
      let newOverviews = JSON.parse(localStorage.getItem('overviews')) || [];
      if(newOverviews && newOverviews?.length > 0){
        console.log(newOverviews);
      }else{
        localStorage.setItem('overviews', JSON.stringify(overviews));
        setOverviews(overviews);
      }
    };
  
    return (
        <div>
            <Box>
            <Text fontSize={'2xl'} className='padding__top' pb='30px'>Add Product Overviews</Text>
            <form onSubmit={handleSubmitOverviews}>
            <div className='form__item__view__main__container'>
                {overviews.map((overview, index) => (
                <Box key={index} display="flex" justifyContent={'space-between'} alignItems={'center'}>
                    <FormControl>
                    <FormLabel>Overview item {index+1}</FormLabel>
                    <Input
                        placeholder="Enter overview"
                        value={overview}
                        onChange={(event) => handleOverviewChange(index, event)}
                    />
                    </FormControl>
                    <div className='register__button'>
                    <Button
                        variant="outline"
                        size={'sm'}
                        colorScheme="red"
                        onClick={() => removeOverview(index)}
                        ml={4}
                        disabled={index < 7} // Disable remove button for pre-added overviews
                    >
                        Remove
                    </Button>
                    </div>
                </Box>
                ))}  
                <div className='register__button padding__top'>
                <Button 
                    onClick={addOverview} 
                    colorScheme="teal"
                    size={'sm'}
                    mr={'30px'}
                >
                    Add Overview
                </Button> 
                <Button 
                    type="submit" 
                    colorScheme="teal"
                    size={'sm'}
                >
                    Submit
                </Button>
                </div>
            </div>
            </form>
            </Box> 
        </div>
    );
};

export default ProductOverviews;