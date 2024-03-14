import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useGetAllAdminOrderProductQuery } from '../../../features/order/api';
import { addMultipleOrderProduct, resetOrderProduct } from '../../../features/order/orderSlice';
import ProductOrderTable from '../../Profile/childComponents/ProductTable';
import OrderFilterButton from './Components/OrderFilterButton';
import OrderPagination from './Components/Pagination';

const OrderManagement = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {filter} = useParams(); 
    const [currentState, setCurrentState] = useState(filter);
    const [searchParams] = useSearchParams();
    let page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
    let limit = searchParams.get('limit') ? Number(searchParams.get('limit')) : 8;
    const [currentPage, setCurrentPage] = useState(page);
    const [totalPages, setTotalPages] = useState(1);
    useEffect(()=>{
        setCurrentState(()=> filter);
    },[filter])

    const setSearchParams = useSearchParams()[1]; 
    
    const handlePageChange = (page) => { 
        setCurrentPage(()=> page)
        setSearchParams({page: page, limit: limit})
    };

    const {data} = useGetAllAdminOrderProductQuery({status: currentState, page, peerPage: limit}); 
    
    useEffect(()=>{ 
        if(data && data?.products){  
            dispatch(addMultipleOrderProduct(data.products));
            setCurrentPage(()=> data?.current__page);
            setTotalPages(()=> data?.total__page);
        }else{
            dispatch(resetOrderProduct())
            setCurrentPage(()=> page);
            setTotalPages(()=> 1)
        }
    },[data])
    return (
        <div className='main__category__product__view__upper__container bg__white'> 
            <div className='padding__top padding__bottom'>
                <OrderFilterButton currentState={currentState}/>
                <ProductOrderTable/>
                <OrderPagination 
                    handlePageChange={handlePageChange}
                    currentPage={currentPage}
                    totalPages={totalPages}
                />
            </div>
        </div>
    );
};

export default OrderManagement;