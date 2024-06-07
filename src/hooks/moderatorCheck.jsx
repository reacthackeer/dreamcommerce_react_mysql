// useUserPrivateRouteCheck.js
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useModeratorCheck = ({graterThanRole}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const {auth} = useSelector((state)=> state.auth);
    useEffect(()=>{
        if(auth && auth?.isLoggedIn && auth?.token && auth?.role && auth?.role < graterThanRole){
            setIsLoggedIn(()=> true);
        }else{
            setIsLoggedIn(()=> false);
        }
    },[auth, graterThanRole])
    return isLoggedIn;
};

export default useModeratorCheck;
