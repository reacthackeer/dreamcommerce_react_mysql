import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllUserOrderProductQuery } from '../../features/order/api';
import { addMultipleOrderProduct } from '../../features/order/orderSlice';
import ProfileComponents from './childComponents/ProfileComponents';

const Profile = () => {
    const userId = useSelector((state)=> state.auth.auth.user__id);
    const {data, isSuccess} = useGetAllUserOrderProductQuery(userId);
    const dispatch = useDispatch();
    useEffect(()=>{  
        if(isSuccess && data && data?.length){
            dispatch(addMultipleOrderProduct(data));
        }
    },[data, isSuccess])

    return (
        <Box>
            <ProfileComponents/>
        </Box>
    )
};

export default Profile;