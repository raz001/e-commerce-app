import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import './Login.css'
import { AuthContext } from "../components/AuthContext";
import {  useToast } from '@chakra-ui/react';
const LoginPage = ({onLogin}) => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
   //const [login, setLogin] = useState(false);
   const toast = useToast()
  const {isAuth} = useContext(AuthContext)
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setCredentials({ ...credentials, [name]: value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const storedCredentials = JSON.parse(localStorage.getItem('credentials'));
      if (storedCredentials && storedCredentials.username === credentials.username && storedCredentials.password === credentials.password) {
        setError('');
        toast({
          title: 'Login Successful.',
          description: "You've Successfully logged in.",
          position: 'top',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        onLogin(storedCredentials.username)
      } else {
        setError('Invalid username or password');
      }
    };
   if(isAuth){
    return <Navigate to='/' />
   }
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value={credentials.username} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={credentials.password} onChange={handleInputChange} />
          </div>
          {error && <div className="error">{error}</div>}
          <button type="submit" className="btn-submit" >Login</button>
        </form>
      </div>
    );
  };

export default LoginPage;