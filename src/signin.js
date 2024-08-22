import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import './signin.css';

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
    const emailErrorRef = useRef();
    const passwordErrorRef = useRef();

    const clearForm = () => {
        setEmail('');
        passwordRef.current.value = '';
    };

    const onLogin = (e) => {
        e.preventDefault();
        if (checkInput()) {
            localStorage.setItem("email", email.trim());
            localStorage.setItem("password", passwordRef.current.value.trim());
            alert("Your email and password are saved in local storage");
            clearForm();
        }
    };

    const checkInput = () => {
        const emailValue = email.trim();
        const passwordValue = passwordRef.current.value.trim();
        let success = true;

        if (emailValue === '') {
            success = false;
            setError(email, emailErrorRef.current, 'Email cannot be blank');
        } else if (!isEmail(emailValue)) {
            success = false;
            setError(email, emailErrorRef.current, 'Not a valid email');
        } else {
            setSuccess(email, emailErrorRef.current);
        }

        if (passwordValue === '') {
            success = false;
            setError(passwordRef.current, passwordErrorRef.current, 'Password cannot be blank');
        } else {
            setSuccess(passwordRef.current, passwordErrorRef.current);
        }

        return success;
    };

    const setError = (input, errorElement, message) => {
        errorElement.innerText = message;
        input.classList.add('error');
        input.classList.remove('success');
    };


    const setSuccess = (input, errorElement) => {
        errorElement.innerText = '';
        input.classList.add('success');
        input.classList.remove('error');
    };

    const isEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    return (
        <div className="container">
            <form id="signinForm" onSubmit={onLogin}>
                <h2>Sign In</h2>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <span className="error" ref={emailErrorRef}></span>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" ref={passwordRef} />
                    <span className="error" ref={passwordErrorRef}></span>
                </div>
                <button type="submit">Sign In</button>
            </form>
            <Link to="/signup">Do you want to Sign Up?</Link>
        </div>
    );
}

export default Signin;
