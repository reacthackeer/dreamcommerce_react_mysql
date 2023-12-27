import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Box, Button, FormControl, FormLabel, HStack, IconButton, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const SpecificationForm = () => {
  const [specifications, setSpecifications] = useState([]);

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

  return (
    <VStack spacing={4} width={'100%'}>
      {specifications.map((spec, specIndex) => (
        <Box bg='red.100' width={'100%'} key={specIndex} borderWidth="1px" borderRadius="md" padding={4}>
          <HStack marginBottom={2}>
            <FormControl>
              <FormLabel>Specification Title</FormLabel>
              <Input value={spec.title} onChange={(event) => handleChangeTitle(specIndex, event)} />
            </FormControl>
            {specIndex > 0 && (
              <IconButton
                icon={<MinusIcon />}
                aria-label="Remove Specification"
                onClick={() => handleRemoveSpecification(specIndex)}
              />
            )}
          </HStack>
          {spec.infos.map((info, infoIndex) => (
            <HStack key={infoIndex} marginBottom={2}>
              <FormControl>
                <FormLabel>Info Title</FormLabel>
                <Input value={info.title} onChange={(event) => handleChangeInfoTitle(specIndex, infoIndex, event)} />
              </FormControl>
              <FormControl>
                <FormLabel>Info</FormLabel>
                <Input value={info.info} onChange={(event) => handleChangeInfo(specIndex, infoIndex, event)} />
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
      <Button variant="outline" leftIcon={<AddIcon />} onClick={handleAddSpecification}>
        Add Specification
      </Button>
    </VStack>
  );
};

export default SpecificationForm;
