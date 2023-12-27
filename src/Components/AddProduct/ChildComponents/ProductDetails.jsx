import {
  Box,
  Button,
  Input,
  Select,
  Text
} from '@chakra-ui/react';
import React, { useState } from 'react';
// import { server__image__host__url } from '../../app/store';
import '../../../styles/addProduct.scss';

const ProductDetailsChild = () => {
    const [details, setDetails] = useState(JSON.parse(localStorage.getItem('details')) || []);
  
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
  
    
    const validateForm = () => {
      for (const detail of details) {
        if (!detail.tag || !detail.text) {
          return false;
        }
      }
      return true;
    };
  
    const handleSubmitDetailsForm = (e) => {
      e.preventDefault();
      const isValid = validateForm();
      if (isValid) {
        let newDetails = JSON.parse(localStorage.getItem('details')) || [];
        if(newDetails && newDetails?.length > 0){
          console.log(details);
        }else{
          localStorage.setItem('details',JSON.stringify(details));
          setDetails(details);
        }
      }
    };
    return (
        <div>
            <Box>
            <Text fontSize={'2xl'} className='padding__top' pb='30px'>Add Product Details</Text>
            <form onSubmit={handleSubmitDetailsForm}>
            <div className='form__item__view__main__container'>
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
                <div className='register__button padding__top'>
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
                    Submit
                </Button>
                </div>
            </div>
            </form>
            </Box>  
        </div>
    );
};

export default ProductDetailsChild;