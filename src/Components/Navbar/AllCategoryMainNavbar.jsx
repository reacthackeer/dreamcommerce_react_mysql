import {
    Accordion,
    AccordionItem,
    AccordionPanel,
    Link
} from '@chakra-ui/react';
import React from 'react';
import { Link as RLink } from 'react-router-dom';
import { useGetAllFullNavbarDataQuery } from '../../features/getAll/api';
import AccordingButtonGroup from './childComponents/AccordingButtonGroup';

const AllCategoryMainNavbar = () => { 
    let {data, isLoading, isError, isSuccess} = useGetAllFullNavbarDataQuery();
    return (   
            <Accordion allowMultiple>
                {
                    !isLoading && !isError && isSuccess && data.length > 0 &&
                    <AccordionItem>
                    {({ isExpanded }) => (
                        <> 
                            <AccordingButtonGroup title={'Category'} isExpanded={isExpanded}/>
                            <AccordionPanel pb={4}>  
                                {
                                    data.map((info, index) => {
                                        return <Accordion allowMultiple key={index}>
                                                    <AccordionItem>
                                                        {({ isExpanded }) => (
                                                            <>  
                                                                <AccordingButtonGroup title={info.link__name} isExpanded={isExpanded}/>
                                                                <AccordionPanel pb={4}>   
                                                                        {
                                                                            info.links.map((infoF, index)=>{ 
                                                                                return <Accordion allowMultiple key={index}>
                                                                                        <AccordionItem>
                                                                                            {({ isExpanded }) => (
                                                                                                <> 
                                                                                                <AccordingButtonGroup title={infoF.link__name} isExpanded={isExpanded}/>
                                                                                                    <AccordionPanel pb={4}>   
                                                                                                            {
                                                                                                                infoF.links.map((infoP, index) => {
                                                                                                                    return  <Accordion allowMultiple key={index}>
                                                                                                                                <AccordionItem>
                                                                                                                                    {({ isExpanded }) => (
                                                                                                                                        <> 
                                                                                                                                            <AccordingButtonGroup title={infoP.link__name} isExpanded={isExpanded} showLinkIcon={true} showLinkUrl={`/p/${infoF.link__name}/${infoP.link__name}`}/> 
                                                                                                                                            <AccordionPanel pb={4}>   
                                                                                                                                                {
                                                                                                                                                    infoP.links.map((info, index) => <Link key={index} className='row__link__item' as={RLink} to={`/p/${infoF.link__name}/${infoP.link__name}/${info.link__name}`}>{info.link__name}</Link>)
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
                }
            </Accordion> 
    );
};

export default AllCategoryMainNavbar;