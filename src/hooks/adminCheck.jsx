// useUserPrivateRouteCheck.js
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useLoginCheck = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const {auth} = useSelector((state)=> state.auth);
    useEffect(()=>{
        if(auth && auth?.isLoggedIn && auth?.token && auth?.role && auth?.role < 3){
            setIsLoggedIn(()=> true) 
        }
    },[auth])
    // Your authentication logic can go here

    return isLoggedIn;
};

export default useLoginCheck;
