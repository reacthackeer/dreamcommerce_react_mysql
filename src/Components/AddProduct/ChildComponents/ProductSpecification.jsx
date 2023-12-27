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
// import { server__image__host__url } from '../../app/store';
import '../../../styles/addProduct.scss';
const ProductSpecification = memo(() => {
    const [specifications, setSpecifications] = useState(JSON.parse(localStorage.getItem('specifications')) || []);

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
        localStorage.setItem('specifications', JSON.stringify(specifications));
    }

    return (
        <div>
            <Box>
            <Text fontSize={'2xl'} className='padding__top' pb='30px'>Add Product Specification</Text>
            <div spacing={4} width={'100%'} className='form__item__view__main__container padding__top'>
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
            <div className='register__button padding__top'>
                <Button 
                onClick={handleAddSpecification} 
                colorScheme="teal"
                size={'sm'}
                mr={'30px'}
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
            </div>
            </Box> 
        </div>
    );
});

export default ProductSpecification;