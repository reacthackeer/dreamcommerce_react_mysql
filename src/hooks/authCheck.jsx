import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLOggedOut, userLoggedIn } from "../features/auth/authSlice";

const useAuthCheck = () => {

    const [authCheck, setAuthCheck] = useState(false);
    const dispatch = useDispatch();

    useEffect(()=>{
        let authInfo = JSON.parse(localStorage.getItem('auth')) || {};
        if(authInfo){
            if(authInfo && authInfo?.token){
                dispatch(userLoggedIn(authInfo));
                setAuthCheck(()=> true);
            }else{
                dispatch(userLOggedOut());
                setAuthCheck(()=> true);
            }
        }else{
            dispatch(userLOggedOut());
            setAuthCheck(()=> true);
        }
    },[dispatch, setAuthCheck])

    return authCheck;
}

export default useAuthCheck;