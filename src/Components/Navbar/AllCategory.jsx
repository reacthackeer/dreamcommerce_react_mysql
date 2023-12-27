import {
    Accordion,
    AccordionItem,
    AccordionPanel,
    Link
} from '@chakra-ui/react';
import React from 'react';
import { Link as RLink } from 'react-router-dom';
import { NavbarFakeInfos } from '../database/navbar';
import AccordingButtonGroup from './childComponents/AccordingButtonGroup';
const AllCategory = () => { 
    
    
    return (   
            <Accordion allowMultiple>
                <AccordionItem>
                    {({ isExpanded }) => (
                        <> 
                            <AccordingButtonGroup title={'Category'} isExpanded={isExpanded}/>
                            <AccordionPanel pb={4}>  
                                {
                                    NavbarFakeInfos.map((info, index) => {
                                        return <Accordion allowMultiple key={index}>
                                                    <AccordionItem>
                                                        {({ isExpanded }) => (
                                                            <>  
                                                                <AccordingButtonGroup title={info.link__name} isExpanded={isExpanded}/>
                                                                <AccordionPanel pb={4}>   
                                                                        {
                                                                            info.links.map((info, index)=>{
                                                                                return <Accordion allowMultiple key={index}>
                                                                                        <AccordionItem>
                                                                                            {({ isExpanded }) => (
                                                                                                <> 
                                                                                                <AccordingButtonGroup title={info.link__name} isExpanded={isExpanded}/>
                                                                                                    <AccordionPanel pb={4}>   
                                                                                                            {
                                                                                                                info.links.map((info, index) => {
                                                                                                                    return  <Accordion allowMultiple key={index}>
                                                                                                                                <AccordionItem>
                                                                                                                                    {({ isExpanded }) => (
                                                                                                                                        <> 
                                                                                                                                            <AccordingButtonGroup title={info.link__name} isExpanded={isExpanded} showLinkIcon={true} showLinkUrl={`/categories/${info.link__name}`}/> 
                                                                                                                                            <AccordionPanel pb={4}>   
                                                                                                                                                {
                                                                                                                                                    info.links.map((info, index) => <Link key={index} className='row__link__item' as={RLink} to={'/collection/'+info.link__name}>{info.link__name}</Link>)
                                                                                                                                                }
                                                                                                                                                
                                                                                                                                            </AccordionPanel>
                                                                                                                                        </>
                                                                                                                                    )}
                                                                                                                                </AccordionItem>
                                                                                                                            </Accordion>
                                                                                                                })
                                                                                                            }
                                                                                                    </AccordionPanel>
                                                                                                </>
                                                                                            )}
                                                                                        </AccordionItem>
                                                                                    </Accordion>
                                                                            })
                                                                        }
                                                                </AccordionPanel>
                                                            </>
                                                        )}
                                                    </AccordionItem>
                                                </Accordion>
                                    })
                                }
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>  
            </Accordion> 
    );
};

export default AllCategory;