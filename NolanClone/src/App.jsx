// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import './App.css';
import { auth } from './firebase'; // Import Firebase auth
import Home from './components/Home';
import Login from './components/Login';
import Script from './components/Script';
import DashBoard from './components/DashBoard';
import SignUp from './components/SignUp'; // Import the SignUp component
import Navbar from './components/Navbar';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [scripts, setScripts] = useState([]);
    const [loginMessage, setLoginMessage] = useState('');
    const [signUpMessage, setSignUpMessage] = useState('');
    const [scriptMessage, setScriptMessage] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsAuthenticated(!!user); // Set authentication state based on user
        });
        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []);

    return (
        <Router>
            <div className="App">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route 
                            path="/login" 
                            element={
                                <Login 
                                    setIsAuthenticated={setIsAuthenticated} 
                                    setLoginMessage={setLoginMessage} 
                                />
                            } 
                        />
                        <Route 
                            path="/signup" 
                            element={
                                <SignUp setSignUpMessage={setSignUpMessage} />
                            } 
                        />
                        <Route 
                            path="/script" 
                            element={
                                isAuthenticated ? (
                                    <Script 
                                        setScripts={setScripts} 
                                        setScriptMessage={setScriptMessage} 
                                    />
                                ) : (
                                    <Login 
                                        setIsAuthenticated={setIsAuthenticated} 
                                        setLoginMessage={setLoginMessage} 
                                    />
                                )
                            } 
                        />
                        <Route 
                            path="/dashboard" 
                            element={
                                isAuthenticated ? (
                                    <DashBoard scripts={scripts} />
                                ) : (
                                    <Login 
                                        setIsAuthenticated={setIsAuthenticated} 
                                        setLoginMessage={setLoginMessage} 
                                    />
                                )
                            } 
                        />
                    </Routes>
                    <p>{loginMessage}</p>
                    <p>{signUpMessage}</p>
                    <p>{scriptMessage}</p>
                </main>
                <footer>
                    <p>&copy; NolanAI, Inc. 2024Inc. 2024</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
