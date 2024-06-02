import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Text
} from '@chakra-ui/react';
import React, { memo, useState } from 'react';
const ProductSpecification = memo(() => {
    const [specifications, setSpecifications] = useState(JSON.parse(sessionStorage.getItem('specifications')) || []);

    const handleAddSpecification = () => {
      setSpecifications([...specifications, { title: '', infos: [{ title: '', info: '' }] }]);
    };
  
    const handleRemoveSpecification = (index) => {
      const updatedSpecifications = [...specifications];
      updatedSpecifications.splice(index, 1);
      setSpecifications(updatedSpecifications);
    };
  
    const handleAddInfo = (specIndex) => {
      const updatedSpecifications = [...specifications];
      updatedSpecifications[specIndex].infos.push({ title: '', info: '' });
      setSpecifications(updatedSpecifications);
    };
  
    const handleRemoveInfo = (specIndex, infoIndex) => {
      const updatedSpecifications = [...specifications];
      updatedSpecifications[specIndex].infos.splice(infoIndex, 1);
      setSpecifications(updatedSpecifications);
    };
  
    const handleChangeTitle = (index, event) => {
      const updatedSpecifications = [...specifications];
      updatedSpecifications[index].title = event.target.value;
      setSpecifications(updatedSpecifications);
    };
  
    const handleChangeInfo = (specIndex, infoIndex, event) => {
      const updatedSpecifications = [...specifications];
      updatedSpecifications[specIndex].infos[infoIndex].info = event.target.value;
      setSpecifications(updatedSpecifications);
    };
  
    const handleChangeInfoTitle = (specIndex, infoIndex, event) => {
      const updatedSpecifications = [...specifications];
      updatedSpecifications[specIndex].infos[infoIndex].title = event.target.value;
      setSpecifications(updatedSpecifications);
    };
  
    const handlePrintSpecification = () => {
      sessionStorage.setItem('specifications', JSON.stringify(specifications));
    }

    return (
      <div>
          <Box>
          <Text fontSize={'2xl'} className='padding__top'>Add Product Specification</Text>
            <div className='data__view__form'>
                {specifications.map((spec, specIndex) => (
                    <Box width={'100%'} key={specIndex} borderWidth="1px" borderRadius="md" padding={4}>
                    <HStack marginBottom={2} alignItems={'last baseline'}>
                        <FormControl>
                        <FormLabel>Specification Title</FormLabel>
                        <Input 
                            value={spec.title} 
                            onChange={(event) => handleChangeTitle(specIndex, event)}  
                        />
                        </FormControl>
                        {specIndex + 1 && (
                        <IconButton 
                            icon={<MinusIcon />}
                            aria-label="Remove Specification"
                            onClick={() => handleRemoveSpecification(specIndex)}
                        />
                  )}
                    </HStack>
                    {spec.infos.map((info, infoIndex) => (
                        <HStack key={infoIndex} marginBottom={2}  alignItems={'last baseline'}>
                        <FormControl>
                            <FormLabel>Info Title</FormLabel>
                            <Input
                            value={info.title} 
                            onChange={(event) => handleChangeInfoTitle(specIndex, infoIndex, event)}  
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Info</FormLabel>
                            <Input 
                            value={info.info} 
                            onChange={(event) => handleChangeInfo(specIndex, infoIndex, event)} 
                            />
                        </FormControl>
                        {infoIndex + 1 && (
                            <IconButton
                            icon={<MinusIcon />}
                            aria-label="Remove Info"
                            onClick={() => handleRemoveInfo(specIndex, infoIndex)}
                            />
                        )}
                        </HStack>
                    ))}
                    <Button variant="outline" leftIcon={<AddIcon />} onClick={() => handleAddInfo(specIndex)}>
                        Add Info
                    </Button>
                    </Box>
                ))} 
            </div>
            <div className='data__form__submit__button'>
                <Button 
                  onClick={handleAddSpecification} 
                  colorScheme="teal"
                  size={'sm'}
                  mr={'5px'}
                  >
                  Add Specification
                </Button> 
                <Button  
                  onClick={handlePrintSpecification}
                  colorScheme="teal"
                  size={'sm'}
                  >
                  Save
                </Button>
            </div>
          </Box> 
      </div>
  );
});

export default ProductSpecification;