import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLinkItem = ({linksArray}) => {
    return (
        <Breadcrumb className='top__link__container'>
            {
                linksArray.map((info, index)=>{
                    return  <BreadcrumbItem key={index}>
                                <BreadcrumbLink className='text__capitalize' as={Link} to={info.link}>{info.name}</BreadcrumbLink>
                            </BreadcrumbItem> 
                })
            }
        </Breadcrumb> 
    );
};

export default HeaderLinkItem;