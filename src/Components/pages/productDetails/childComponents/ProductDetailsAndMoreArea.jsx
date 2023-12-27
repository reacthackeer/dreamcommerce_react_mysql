import { StarIcon } from '@chakra-ui/icons';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, Box, Button, ButtonGroup, FormControl, FormLabel, Input, Select, Table, TableContainer, Tbody, Td, Text, Tr } from '@chakra-ui/react';
import React, { useState } from 'react';

const ProductDetailsAndMoreArea = ({details, specifications}) => {
    const [detailsSection, setDetailsSection] = useState('specifications');
    
    
    return ( <div className='padding__top details__more__container'>
                <ButtonGroup className='padding__bottom' isAttached>
                    <Button
                        variant={detailsSection === 'details' ? 'solid': 'outline'}
                        color={detailsSection === 'details' ? 'teal': ''}
                        onClick={()=> setDetailsSection('details')}
                        fontSize={'small'}
                    >
                        Details
                    </Button> 
                    <Button
                        variant={detailsSection === 'specifications' ? 'solid': 'outline'}
                        color={detailsSection === 'specifications' ? 'teal': ''}
                        onClick={()=> setDetailsSection('specifications')}
                        fontSize={'small'}
                    >
                        Specifications
                    </Button> 
                    <Button
                        variant={detailsSection === 'reviews' ? 'solid': 'outline'}
                        color={detailsSection === 'reviews' ? 'teal': ''}
                        onClick={()=> setDetailsSection('reviews')}
                        fontSize={'small'}
                    >
                        Reviews
                    </Button> 
                    <Button
                        variant={detailsSection === 'qa' ? 'solid': 'outline'}
                        color={detailsSection === 'qa' ? 'teal': ''}
                        onClick={()=> setDetailsSection('qa')}
                        fontSize={'small'}
                    >
                        QA
                    </Button> 
                </ButtonGroup> 
                {
                    detailsSection === 'details' &&
                    <Box className='single__product__top__link__container t_n'>
                        {
                            details.map((info, index) => {
                                return <React.Fragment key={index}>
                                            <info.tag className={info.tag}>{info.text}</info.tag>
                                    </React.Fragment>
                            })
                        }
                    </Box>
                }
                {
                    detailsSection === 'specifications' &&
                    <Box className='p__10'>
                        {
                            specifications.map((info, index) => {
                                return <Accordion allowMultiple>  
                                            <AccordionItem> 
                                                <AccordionButton>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        {info.title}
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton> 
                                                <AccordionPanel pb={4}> 
                                                    <TableContainer>
                                                        <Table> 
                                                            <Tbody>
                                                                {
                                                                    info.infos.map((infos, index)=>{
                                                                        return  <Tr key={index}>
                                                                                    <Td style={{width:'300px'}}>{infos.title}</Td>
                                                                                    <Td>{infos.info}</Td> 
                                                                                </Tr> 
                                                                    })
                                                                }
                                                            </Tbody> 
                                                        </Table>
                                                    </TableContainer>
                                                </AccordionPanel>
                                            </AccordionItem>
                                        </Accordion>
                            })
                        }
                    </Box>
                }
                {
                    detailsSection === 'qa' &&
                    <Box className='p__10'>
                        <Box className='single__qa__container' mb='2'> 
                            <Box display={'flex'} justifyContent={'flex-start'}>  
                                <Text ml='2'>Question: This Item blue and navy Blur color available?</Text>
                            </Box>  
                            <Box m='2' display={'flex'} justifyContent={'flex-start'}> 
                                <Text ml='2' fontSize={'xs'}>Answer: Yes sir, available</Text>
                            </Box>
                        </Box>
                        <Box className='single__qa__container' mb='2'> 
                            <Box display={'flex'} justifyContent={'flex-start'}>  
                                <Text ml='2'>Question: This Item blue and navy Blur color available?</Text>
                            </Box>  
                            <Box m='2' display={'flex'} justifyContent={'flex-start'}> 
                                <Text ml='2' fontSize={'xs'}>Answer: Yes sir, available</Text>
                            </Box>
                        </Box>
                        <Box className='single__qa__container' mb='2'> 
                            <Box display={'flex'} justifyContent={'flex-start'}>  
                                <Text ml='2'>Question: This Item blue and navy Blur color available?</Text>
                            </Box>  
                            <Box m='2' display={'flex'} justifyContent={'flex-start'}> 
                                <Text ml='2' fontSize={'xs'}>Answer: Yes sir, available</Text>
                            </Box>
                        </Box>
                        <Box className='single__qa__container' mb='2'> 
                            <Box display={'flex'} justifyContent={'flex-start'}>  
                                <Text ml='2'>Question: This Item blue and navy Blur color available?</Text>
                            </Box>  
                            <Box m='2' display={'flex'} justifyContent={'flex-start'}> 
                                <Text ml='2' fontSize={'xs'}>Answer: Yes sir, available</Text>
                            </Box>
                        </Box>
                        <Box>
                            <Text textAlign={'center'} fontSize={'lg'} py='3'>Ask Your Question!</Text>
                            <FormControl isRequired>
                                <FormLabel>Your Email address</FormLabel>
                                <Input type='email' placeholder='boss@gmail.com' /> 
                            </FormControl>
                            <FormControl mt='3'>
                                <FormLabel>Your Phone Number (optional)</FormLabel>
                                <Input type='text' placeholder='+88013********' /> 
                            </FormControl>
                            <FormControl mt='3' isRequired>
                                <FormLabel>Your Name</FormLabel>
                                <Input type='text' placeholder='**********khan' /> 
                            </FormControl>
                            <FormControl mt='3'  isRequired>
                                <FormLabel>Your Question</FormLabel>
                                <Input type='text' placeholder='blue color available?' /> 
                            </FormControl> 
                            <Box
                            display={'flex'}
                            justifyContent={'end'}
                            mt='3'
                            >
                                <Button
                                    color={'teal'}
                                >
                                    Submit
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                }
                {
                    detailsSection === 'reviews' &&  
                    <Box className='p__10'>
                        <Box className='feedback__main__container'>
                            <Box  display={'flex'} bg='whiteAlpha.100' p='3' mb='3'>
                                <Box>
                                    <Avatar 
                                        mt='1'
                                        size='sm' 
                                        name='Ryan Florence' 
                                        src='https://bit.ly/ryan-florence' 
                                    />
                                </Box>
                                <Box ml='3'> 
                                    <Text>Md Sohidul Islam</Text>
                                        <Box display={'flex'} my='1'>
                                            <StarIcon color={'tomato'} ml='2'/>
                                            <StarIcon color={'tomato'} ml='2'/>
                                            <StarIcon color={'tomato'} ml='2'/>
                                            <StarIcon color={'tomato'} ml='2'/>
                                            <StarIcon color={'tomato'} ml='2'/>
                                        </Box>
                                        <Text 
                                            fontSize={'sm'}
                                        >
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam cumque aspernatur expedita obcaecati maxime nisi laboriosam, voluptates cupiditate alias, pariatur fuga enim.
                                        </Text>
                                </Box>
                            </Box>
                            <Box  display={'flex'} bg='whiteAlpha.100' p='3' mb='3'>
                                <Box>
                                    <Avatar 
                                        mt='1'
                                        size='sm' 
                                        name='Ryan Florence' 
                                        src='https://bit.ly/ryan-florence' 
                                    />
                                </Box>
                                <Box ml='3'> 
                                    <Text>Md Sohidul Islam</Text>
                                        <Box display={'flex'} my='1'>
                                            <StarIcon color={'tomato'} ml='2'/>
                                            <StarIcon color={'tomato'} ml='2'/>
                                            <StarIcon color={'tomato'} ml='2'/>
                                            <StarIcon color={'tomato'} ml='2'/>
                                            <StarIcon color={'tomato'} ml='2'/>
                                        </Box>
                                        <Text 
                                            fontSize={'sm'}
                                        >
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam cumque aspernatur expedita obcaecati maxime nisi laboriosam, voluptates cupiditate alias, pariatur fuga enim.
                                        </Text>
                                </Box>
                            </Box>
                            <Box  display={'flex'} bg='whiteAlpha.100' p='3' mb='3'>
                                <Box>
                                    <Avatar 
                                        mt='1'
                                        size='sm' 
                                        name='Ryan Florence' 
                                        src='https://bit.ly/ryan-florence' 
                                    />
                                </Box>
                                <Box ml='3'> 
                                    <Text>Md Sohidul Islam</Text>
                                        <Box display={'flex'} my='1'>
                                            <StarIcon color={'tomato'} ml='2'/>
                                            <StarIcon color={'tomato'} ml='2'/>
                                            <StarIcon color={'tomato'} ml='2'/>
                                            <StarIcon color={'tomato'} ml='2'/>
                                            <StarIcon color={'tomato'} ml='2'/>
                                        </Box>
                                        <Text 
                                            fontSize={'sm'}
                                        >
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam cumque aspernatur expedita obcaecati maxime nisi laboriosam, voluptates cupiditate alias, pariatur fuga enim.
                                        </Text>
                                </Box>
                            </Box>
                            <Box  display={'flex'} bg='whiteAlpha.100' p='3' mb='3'>
                                <Box>
                                    <Avatar 
                                        mt='1'
                                        size='sm' 
                                        name='Ryan Florence' 
                                        src='https://bit.ly/ryan-florence' 
                                    />
                                </Box>
                                <Box ml='3'> 
                                    <Text>Md Sohidul Islam</Text>
                                        <Box display={'flex'} my='1'>
                                            <StarIcon color={'tomato'} ml='2'/>
                                            <StarIcon color={'tomato'} ml='2'/>
                                            <StarIcon color={'tomato'} ml='2'/>
                                            <StarIcon color={'tomato'} ml='2'/>
                                            <StarIcon color={'tomato'} ml='2'/>
                                        </Box>
                                        <Text 
                                            fontSize={'sm'}
                                        >
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam cumque aspernatur expedita obcaecati maxime nisi laboriosam, voluptates cupiditate alias, pariatur fuga enim.
                                        </Text>
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Text textAlign={'center'} fontSize={'lg'} py='3'>Submit Your Feedback!</Text>
                            <FormControl isRequired>
                                <FormLabel>Your Email address</FormLabel>
                                <Input type='email' placeholder='boss@gmail.com' /> 
                            </FormControl>
                            <FormControl mt='3'>
                                <FormLabel>Your Phone Number (optional)</FormLabel>
                                <Input type='text' placeholder='+88013********' /> 
                            </FormControl>
                            <FormControl mt='3' isRequired>
                                <FormLabel>Your Name</FormLabel>
                                <Input type='text' placeholder='**********khan' /> 
                            </FormControl>
                            <FormControl mt='3'  isRequired>
                                <FormLabel>Your Feedback</FormLabel>
                                <Input type='text' placeholder='Good Quality' /> 
                            </FormControl> 
                            <FormControl mt='3'  isRequired>
                                <FormLabel>Select Rating</FormLabel> 
                                <Select className='select rating'>
                                    <option>Select Rating</option>
                                    <option>useless (1 start)</option>
                                    <option>poor (2 start)</option>
                                    <option>ok (3 start)</option>
                                    <option>Good (4 start)</option>
                                    <option>Excellent (5 start)</option>
                                </Select>
                            </FormControl> 
                            <Box
                            display={'flex'}
                            justifyContent={'end'}
                            mt='3'
                            >
                                <Button
                                    color={'teal'}
                                >
                                    Submit
                                </Button>
                            </Box>
                        </Box>  
                    </Box>
                }
            </div>
    );
};

export default ProductDetailsAndMoreArea;