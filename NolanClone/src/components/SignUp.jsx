// src/components/SignUp.js
import React, { useState } from 'react';
import { auth } from '../firebase'; // Import the Firebase auth object
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = ({ setSignUpMessage }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async (event) => {
        event.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setSignUpMessage('Sign-up successful! You can now log in.');
            setEmail('');
            setPassword('');
        } catch (error) {
            setSignUpMessage(error.message);
        }
    };

    return (
        <section id="signup">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
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
                <button type="submit">Sign Up</button>
            </form>
        </section>
    );
};

export default SignUp;
