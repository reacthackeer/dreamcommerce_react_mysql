import {
    Accordion,
    AccordionItem,
    AccordionPanel,
    Link
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RLink } from 'react-router-dom';
import { addAllNav } from '../../../../features/auth/authSlice';
import { useGetAllFullNavbarDataQuery } from '../../../../features/getAll/api';

import AccordingButtonGroup from './childComponents/AccordingButtonGroup';

const AllCategoryMainNavbar = () => { 
    let {data, isLoading, isError, isSuccess} = useGetAllFullNavbarDataQuery();
    const dispatch = useDispatch();
    const {navbar}= useSelector((state)=> state.auth);
    
    useEffect(()=>{
        if(!isError && !isLoading && isSuccess && data && data?.popularCategory && data?.popularCategory?.length){
            dispatch(addAllNav(data));
        }
    },[isLoading, isSuccess, data, isError, dispatch])
    return (   
            <Accordion allowMultiple>
                {
                    navbar && navbar.length > 0 &&
                    <AccordionItem>
                    {({ isExpanded }) => (
                        <> 
                            <AccordingButtonGroup title={'Category'} isExpanded={isExpanded}/>
                            <AccordionPanel pb={4}>  
                                {
                                    navbar.map((info, index) => {
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
                                                                                                                                            <AccordingButtonGroup  
                                                                                                                                                title={infoP.link__name} 
                                                                                                                                                isExpanded={isExpanded} 
                                                                                                                                                showLinkIcon={false} 
                                                                                                                                                showLinkUrl={`/p/${infoF.link__name}/${infoP.link__name} `}
                                                                                                                                            /> 
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