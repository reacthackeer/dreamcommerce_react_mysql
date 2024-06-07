import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { usePrintUserInfoQuery } from '../../../features/auth/api';
import { addPrintUserInfo, resetPrintUserInfo } from '../../../features/auth/authSlice';
import { useGetAllUserOrderProductQuery } from '../../../features/order/api';
import { addMultipleOrderProduct } from '../../../features/order/orderSlice';

import ProfileComponents from './childComponents/ProfileComponents';

const OrderPrintPage = () => {
    
    const [searchParams] = useSearchParams();
    let page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
    let limit = searchParams.get('limit') ? Number(searchParams.get('limit')) : 5;
    const [currentPage, setCurrentPage] = useState(page); 
    const [totalPages, setTotalPages] = useState(1);
    const {user__id} = useParams(); 
    const {data, isSuccess} = useGetAllUserOrderProductQuery({user__id, page: page, peerPage: limit});
    const {data:printUserInfo, isSuccess: printUserIsSuccess} = usePrintUserInfoQuery(user__id);
    const setSearchParams = useSearchParams()[1]; 
    
    const handlePageChange = (page) => { 
        setCurrentPage(()=> page)
        setSearchParams({page: page, limit: limit})
    };  
    const dispatch = useDispatch(); 
    useEffect(()=>{   
        if(isSuccess && data && data?.products?.length){
            dispatch(addMultipleOrderProduct(data.products));
            setCurrentPage(()=> data.current__page);
            setTotalPages(()=> data.total__page)
        }
    },[data, isSuccess, dispatch]) 
    useEffect(()=>{   
        if(printUserIsSuccess && printUserInfo && printUserInfo?.name){
            dispatch(addPrintUserInfo(printUserInfo)); 
        }else{
            dispatch(resetPrintUserInfo());
        }
    },[printUserInfo, printUserIsSuccess, dispatch])
    return (
        <Box>
            <ProfileComponents currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange}/>
        </Box>
    )
};

export default OrderPrintPage;