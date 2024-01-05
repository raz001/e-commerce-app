import React, { useContext, useState } from 'react'
import { AuthContext } from './AuthContext'
import { Navigate, useLocation } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'
const PrivateRoute = ({ children }) => {
    const { isAuth } = useContext(AuthContext);
    const toast = useToast();
    const location = useLocation();
    console.log(location)
    const [toastShown, setToastShown] = useState(false);
    if (!isAuth && !toastShown) {
        toast({
            title: 'Private route',
            position: 'top',
            description: "To visit cart page, Please register first.",
            status: 'info',
            duration: 3000,
            isClosable: true,
        })
        setToastShown(true);
    }
    
    return !isAuth ? <Navigate state={location.pathname} to='/account' /> : children
}

export default PrivateRoute;