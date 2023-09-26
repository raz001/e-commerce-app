import React, { createContext, useState } from 'react'
export const AuthContext = createContext();
const userData = JSON.parse(localStorage.getItem('credentials')) || '';
const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(userData.username);

    const login = () => {
        setIsAuth(true);
    };

    const logout = () => {
        setIsAuth(false);
    };

    return (
        <AuthContext.Provider value={{ isAuth, login, logout, setIsAuth }}>{children}</AuthContext.Provider>
    )
}

export default AuthContextProvider