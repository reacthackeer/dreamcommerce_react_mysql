import React from 'react';
import { Navigate } from 'react-router-dom';
import useModeratorCheck from '../../hooks/moderatorCheck';

const CheckSubModeratorLoggedIn = ({children}) => {
    const isSubModeratorLoggedIn = useModeratorCheck({graterThanRole: 7});
    return isSubModeratorLoggedIn ? children : <Navigate to='/profile'/>
};

export default CheckSubModeratorLoggedIn;