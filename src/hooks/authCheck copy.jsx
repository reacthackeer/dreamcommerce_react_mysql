import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLOggedOut, userLoggedIn } from "../features/auth/authSlice";

const useAuthCheck = () => {

    const [authCheck, setAuthCheck] = useState(false);
    const dispatch = useDispatch();
    const {authChecked} = useSelector((state)=> state.auth);
    const {auth} = useSelector((state)=> state.auth); 
    
    useEffect(()=>{
        let authInfo = JSON.parse(localStorage.getItem('auth')) || {};
        if(authInfo){
            if(authInfo && authInfo?.token){
                if(auth && auth?.name === undefined && auth?.token === undefined){ 
                    dispatch(userLoggedIn(authInfo));  
                }
                if(authChecked && auth && auth?.name && auth?.isLoggedIn && auth?.token){
                    setAuthCheck(()=> true);
                }
            }else{
                if(auth && auth?.name === undefined && auth?.token === undefined){ 
                    dispatch(userLOggedOut());  
                }
                if(authChecked && auth?.name === undefined &&  auth?.token === undefined){
                    setAuthCheck(()=> true);
                }
            }
        }else{
            if(auth && auth?.name === undefined && auth?.token === undefined){ 
                dispatch(userLOggedOut()); 
            } 
            if(authChecked && auth?.name === undefined &&  auth?.token === undefined){
                setAuthCheck(()=> true);
            }
        }
    },[dispatch, setAuthCheck, authChecked, auth])

    return authCheck;
}

export default useAuthCheck;