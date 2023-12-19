import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { Navigate, useLocation } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'
const PrivateRoute = ({ children }) => {
    const { isAuth } = useContext(AuthContext);
    const toast = useToast();
    const location = useLocation()
    if (!isAuth) {
        toast({
            title: 'Private route',
            position: 'top',
            description: "To visit cart page, Please register first.",
            status: 'info',
            duration: 3000,
            isClosable: true,
        })
        return <Navigate state={location.pathname} to='/account' />
    }
    return children
}

export default PrivateRoute;