import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useGetAllUserOrderProductQuery } from '../../../features/order/api';
import { addMultipleOrderProduct, resetOrderProduct } from '../../../features/order/orderSlice';
import ProfileComponents from './childComponents/ProfileComponents';

const Profile = () => {
    
    const {user__id} = useSelector((state)=> state.auth.auth);
    const dispatch = useDispatch();   
    const [searchParams] = useSearchParams();
    let page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
    let limit = searchParams.get('limit') ? Number(searchParams.get('limit')) : 8;
    const [currentPage, setCurrentPage] = useState(page);
    const [totalPages, setTotalPages] = useState(1);
    

    const setSearchParams = useSearchParams()[1]; 
    
    const handlePageChange = (page) => { 
        setCurrentPage(()=> page)
        setSearchParams({page: page, limit: limit})
    };

    const {data} = useGetAllUserOrderProductQuery({user__id, page, peerPage: limit}); 
    
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
    },[data, dispatch, page])
    return (
        <Box>
            <ProfileComponents handlePageChange={handlePageChange} totalPages={totalPages} currentPage={currentPage}/>
        </Box>
    )
};

export default Profile;