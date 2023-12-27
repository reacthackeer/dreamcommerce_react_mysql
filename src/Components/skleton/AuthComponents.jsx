import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AuthComponents = ({children}) => {
    const auth = useSelector((state)=> state?.auth?.auth);
    
    let content = null;
    if(auth && auth?.name && !auth?.img__src){
        content = <Navigate to='/upload/profile-image' replace/>
    }
    if(auth && auth?.name && auth?.img__src && !auth?.address){
        content = <Navigate to='/add/address/shipping-address' replace/>
    }
    if(auth && auth?.name && auth?.img__src && auth?.address){
        content = children
    }
    if(auth && !auth?.name && !auth?.img__src && !auth?.address){
        content = <Navigate to='/login' replace/>
    }
    return content;
};

export default AuthComponents;