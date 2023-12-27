import { SearchIcon } from '@chakra-ui/icons';
import { Box, Button, HStack, Input, InputGroup, InputRightElement, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { toggleItem } from '../cssToggle/CssToggle';

export const SearchModal = () => {
    const [searchText, setSearchText] = useState('')
    const handleFormSubmit = () => {
        alert('Your Search Text :- '+searchText)
    }

    
    return (
        <Stack className='search__modal__upper__container'>
            <Box className='main__search__container'>
                <Stack w="90%">  
                    <InputGroup mb='2'> 
                        <InputRightElement 
                            onClick={handleFormSubmit}
                            cursor={'pointer'}
                            children={<SearchIcon/>}
                        /> 
                        <Input 
                            type='text' 
                            placeholder='Search Here...' 
                            onChange={({target:{value}})=> setSearchText(value)}
                        /> 
                    </InputGroup>  
                    <HStack display={'flex'} justify={'flex-end'}>
                        <Button 
                            fontSize={'sm'} 
                            colorScheme='red' 
                            mr='2'
                            onClick={()=> toggleItem('.search__modal__upper__container')}
                        >
                            Close
                        </Button>
                        <Button 
                            fontSize={'sm'} 
                            colorScheme='teal' 
                            onClick={handleFormSubmit}
                        >
                            Search
                        </Button>
                    </HStack>
                </Stack>
            </Box>
        </Stack>
    );
};
