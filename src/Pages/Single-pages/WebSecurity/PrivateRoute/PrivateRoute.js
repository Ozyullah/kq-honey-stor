import React, { useContext } from 'react';
import { WebContext } from '../../../../Context/AuthContext/AuthContext';

import ClockLoader from 'react-spinners/ClockLoader';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const {user, loader}=useContext(WebContext)
    let location =useLocation();

    if(loader){
        return <div className='flex justify-center align-middle'><ClockLoader color="#36d7b7" /></div>
    }

    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;