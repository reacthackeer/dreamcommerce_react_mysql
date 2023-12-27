import {
    Accordion,
    AccordionItem,
    AccordionPanel,
    Link
} from '@chakra-ui/react';
import React from 'react';
import { Link as RLink } from 'react-router-dom';
import AccordingButtonGroup from './childComponents/AccordingButtonGroup';

const PopularCategoryAccording = () => { 
    let linksArray = [
        {name: 'Keyboard', link: '/p/Desktop%20PC%20and%20Server/Desktop%20Component/Keyboard'},
        {name: 'Mouse', link: '/p/Desktop%20PC%20and%20Server/Desktop%20Component/Mouse'},
        {name: 'Headphone', link: '/p/Sound%20System/Headphone'},
        {name: 'Laptop', link: '/p/Laptop/All%20Laptop'},
        {name: 'Desktop', link: '/p/Desktop%20PC%20and%20Server/Desktop%20PC'},
        {name: 'Earphone', link: '/p/Sound%20System/Ear%20Phone'},
        {name: 'Speaker', link: '/p/Sound%20System/Speaker'},
        {name: 'Gaming', link: '/p/Gaming/Gaming%20Component'}
    ]
    return (   
            <Accordion allowMultiple  className='border__custom__color'>  
                <AccordionItem>
                    {({ isExpanded }) => (
                        <> 
                            <AccordingButtonGroup title={'Popular Category'} isExpanded={isExpanded}/>
                            <AccordionPanel pb={4} className='pages__panel'>    
                                {
                                    linksArray.map((info, index)=> <Link key={index} className='row__link__item' as={RLink} to={info.link}>{info.name}</Link>  )
                                }
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>  
            </Accordion>   
    );
};

export default PopularCategoryAccording;