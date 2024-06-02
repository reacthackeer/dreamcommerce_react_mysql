import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Text
} from '@chakra-ui/react';
import React, { useState } from 'react';
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
        
      }else{
        localStorage.setItem('overviews', JSON.stringify(overviews));
        setOverviews(overviews);
      }
    };
  
    return (
        <div> 
            <Text fontSize={'2xl'} className='padding__bottom'>Add Product Overviews</Text>
            <form onSubmit={handleSubmitOverviews}>
                <div className='data__view__form'>
                    {overviews.map((overview, index) => (
                        <Box key={index} display="flex" justifyContent={'space-between'} alignItems={'flex-end'}>
                            <FormControl>
                                <FormLabel>Overview item {index+1}</FormLabel>
                                <Input
                                    placeholder="Enter overview"
                                    size='sm'
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
                </div>
                <div className='data__form__submit__button'>
                    <Button 
                        onClick={addOverview} 
                        colorScheme="teal"
                        size={'sm'}
                        mr={'5px'}
                    >
                        Add Overview
                    </Button> 
                    <Button 
                        type="submit" 
                        colorScheme="teal"
                        size={'sm'}
                    >
                        Save
                    </Button>
                </div>
            </form> 
        </div>
    );
};

export default ProductOverviews;