import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './App.css';
import 'CarBooking/signup.css';

function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (checkInput()) {
            localStorage.setItem("firstName", firstName.trim());
            localStorage.setItem("lastName", lastName.trim());
            localStorage.setItem("email", email.trim());
            localStorage.setItem("password", password.trim());
            alert("Your account has been created");
        }
    };

    const checkInput = () => {
        let success = true;

        if (firstName.trim() === '') {
            success = false;
            setFirstNameError('First name cannot be blank');
        } else {
            setFirstNameError('');
        }

        if (lastName.trim() === '') {
            success = false;
            setLastNameError('Last name cannot be blank');
        } else {
            setLastNameError('');
        }

        if (email.trim() === '') {
            success = false;
            setEmailError('Email cannot be blank');
        } else if (!validateEmail(email.trim())) {
            success = false;
            setEmailError('Not a valid email');
        } else {
            setEmailError('');
        }

        if (password.trim() === '') {
            success = false;
            setPasswordError('Password cannot be blank');
        } else if (password.trim().length < 6) {
            success = false;
            setPasswordError('Password must be at least 6 characters');
        } else {
            setPasswordError('');
        }

        if (confirmPassword.trim() === '') {
            success = false;
            setConfirmPasswordError('Confirm password cannot be blank');
        } else if (confirmPassword.trim() !== password.trim()) {
            success = false;
            setConfirmPasswordError('Passwords do not match');
        } else {
            setConfirmPasswordError('');
        }

        return success;
    };

    return (
        <div className="container">
            <form id="signupForm" onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <div className="input-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" 
                        id="firstName" name="firstName" value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    {firstNameError && <span className="error-message">{firstNameError}</span>}
                </div>
                <div className="input-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    {lastNameError && <span className="error-message">{lastNameError}</span>}
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <span className="error-message">{emailError}</span>}
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError && <span className="error-message">{passwordError}</span>}
                </div>
                <div className="input-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input 
                        type="password" 
                        id="confirmPassword" 
                        name="confirmPassword" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {confirmPasswordError && <span className="error-message">{confirmPasswordError}</span>}
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <Link to="/">Already have an account? Sign In</Link>
        </div>
    );
}

export default Signup;
