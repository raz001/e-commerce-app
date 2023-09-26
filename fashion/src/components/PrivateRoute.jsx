import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const { isAuth } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    if (!isAuth) {
        alert('Please register first');
        return <Navigate to='/account' />
    }
     return children
}

export default PrivateRoute;