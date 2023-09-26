import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'
import './Registration.css'

const RegistrationPage = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const [register, setRegister] = useState(false);
    const toast = useToast();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const storedCredentials = JSON.parse(localStorage.getItem('credentials'));
        if (storedCredentials && storedCredentials.username === credentials.username) {
            setError('Username already taken, Please Login');
        } else {
            if (credentials.username === "" || credentials.password === "") {
                setError('Please enter asked details');
            } else {
                localStorage.setItem('credentials', JSON.stringify(credentials));
                setRegister(true)
                toast({
                    title: 'Registration Successful.',
                    position: 'top',
                    description: "Enter the same registered credentials to log in.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
            }

        }
    };
    if (register) {
        return <Navigate to='/login' />;
    }
    return (
        <div className="registration-container">
            <h2>Registration</h2>
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
                <button type="submit" className="btn-submit">Register</button>
            </form>
        </div>
    );



};


export default RegistrationPage;
