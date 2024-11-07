// src/components/Login.js
import React, { useState } from 'react';
import { auth } from '../firebase'; // Import the Firebase auth object
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({ setIsAuthenticated, setLoginMessage }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setIsAuthenticated(true);
            setLoginMessage('Login successful!');
            setEmail('');
            setPassword('');
            
        } catch (error) {
            setLoginMessage('Invalid email or password!');
        }
    };

    return (
        <section className="login">
            <h2>LOG IN</h2>
            <form onSubmit={handleLogin} className='log'>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </section>
    );
};

export default Login;
