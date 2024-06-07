import {
    Accordion,
    AccordionItem,
    AccordionPanel,
    Link
} from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link as RLink } from 'react-router-dom';
import AccordingButtonGroup from './childComponents/AccordingButtonGroup';

const PopularCategoryAccording = () => { 
    const {popularCategory} = useSelector((state) => state.auth);
    
    return (   
            <Accordion allowMultiple  className='border__custom__color' display={popularCategory && popularCategory.length === 0 ? 'none' : 'inline-flex'}>  
                <AccordionItem>
                    {({ isExpanded }) => (
                        <> 
                            <AccordingButtonGroup title={'Popular Category'} isExpanded={isExpanded}/>
                            <AccordionPanel pb={4} className='pages__panel'>    
                                {
                                    popularCategory.map((info, index)=> <Link key={index} className='row__link__item' as={RLink} to={info.link}>{info.name}</Link>  )
                                }
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>  
            </Accordion>   
    );
};

export default PopularCategoryAccording;