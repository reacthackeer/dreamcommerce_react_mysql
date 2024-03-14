import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { usePrintUserInfoQuery } from '../../../features/auth/api';
import { addPrintUserInfo, resetPrintUserInfo } from '../../../features/auth/authSlice';
import { useGetAllUserOrderProductQuery } from '../../../features/order/api';
import { addMultipleOrderProduct } from '../../../features/order/orderSlice';
import ProfileComponents from '../../Profile/childComponents/ProfileComponents';

const OrderPrintPage = () => {
    const {user__id} = useParams(); 
    const {data, isSuccess} = useGetAllUserOrderProductQuery(user__id);
    const {data:printUserInfo, isSuccess: printUserIsSuccess} = usePrintUserInfoQuery(user__id);
    const dispatch = useDispatch();

    useEffect(()=>{  
        if(isSuccess && data && data?.length){
            dispatch(addMultipleOrderProduct(data));
        }
    },[data, isSuccess])
    useEffect(()=>{   
        if(printUserIsSuccess && printUserInfo && printUserInfo?.name){
            dispatch(addPrintUserInfo(printUserInfo)); 
        }else{
            dispatch(resetPrintUserInfo());
        }
    },[printUserInfo, printUserIsSuccess])
    return (
        <Box>
            <ProfileComponents/>
        </Box>
    )
};

export default OrderPrintPage;