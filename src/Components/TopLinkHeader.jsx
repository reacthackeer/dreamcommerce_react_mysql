import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const TopLinkHeader = ({linksArray}) => {
    return (
        <Box>
            <Breadcrumb>
                {
                    linksArray.map((info, index)=>{
                        return  <BreadcrumbItem key={index}>
                                    <BreadcrumbLink as={Link} to={info.link}>{info.name}</BreadcrumbLink>
                                </BreadcrumbItem> 
                    })
                }
            </Breadcrumb> 
        </Box>
    );
};

export default TopLinkHeader;