import {
  Box,
  Button,
  Input,
  Select,
  Text
} from '@chakra-ui/react';
import React, { useState } from 'react';

const ProductDetailsChild = () => {
    const [details, setDetails] = useState(JSON.parse(sessionStorage.getItem('details')) || []);
  
    const handleAddItem = () => {
      setDetails([...details, { tag: '', text: '' }]);
    };
  
    const handleRemoveItem = (index) => {
      const updatedDetails = [...details];
      updatedDetails.splice(index, 1);
      setDetails(updatedDetails);
    };
  
    const handleTagChange = (index, tag) => {
      const updatedDetails = [...details];
      updatedDetails[index].tag = tag;
      setDetails(updatedDetails);
    };
  
    const handleTextChange = (index, text) => {
      const updatedDetails = [...details];
      updatedDetails[index].text = text;
      setDetails(updatedDetails);
    };
  
    
  
    const handleSubmitDetailsForm = (e) => {
      e.preventDefault(); 
      sessionStorage.setItem('details', JSON.stringify(details));
    };

    return (
        <div>
            <Box>
              <Text fontSize={'2xl'} className='padding__top'>Add Product Details</Text>
              <form onSubmit={handleSubmitDetailsForm}>
                <div className='data__view__form'>
                    {details.map((detail, index) => (
                        <Box key={index} width="100%" display={'grid'} gridGap={'3'}>
                          <Select
                              value={detail.tag}
                              onChange={(e) => handleTagChange(index, e.target.value)}
                              placeholder="Select tag"
                          >
                              <option value="h1">h1</option>
                              <option value="h2">h2</option>
                              <option value="p">p</option>c
                          </Select>
                          <Input
                              value={detail.text}
                              onChange={(e) => handleTextChange(index, e.target.value)}
                              placeholder="Enter text"
                          />
                          <Button onClick={() => handleRemoveItem(index)}>Remove</Button>
                        </Box>
                    ))} 
                  </div>
                    <div className='data__form__submit__button'>
                      <Button 
                          onClick={handleAddItem} 
                          colorScheme="teal"
                          size={'sm'}
                          mr={'30px'}
                      >
                          Add Details
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
            </Box>  
        </div>
    );
};

export default ProductDetailsChild;