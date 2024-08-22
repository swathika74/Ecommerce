import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import './signin.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     const emailErrorRef = useRef();
     const passwordErrorRef = useRef();

    const clearForm = () => {
        setEmail('');
        setPassword('');
    };

    const onLogin = (e) => {
        e.preventDefault();
        if (checkInput()) {
            localStorage.setItem("email", email.trim());
            localStorage.setItem("password", password.trim());
            alert("Your email and password are saved in local storage");
            clearForm();
        }
    };

    const checkInput = () => {
        const emailValue = email.trim();
        const passwordValue = password.trim();
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
             setError(password, passwordErrorRef.current, 'Password cannot be blank');
         } else {
             setSuccess(password, passwordErrorRef.current);
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
                    <input type="password" id="password" name="password"  onChange={(e)=>setPassword(e.target.value)} value={password} />
                     <span className="error" ref={passwordErrorRef}></span> 
                </div>
                <button type="submit">Sign In</button>
            </form>
            <Link to="/signup">Do you want to Sign Up?</Link>
            https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Shweta_Mohan.jpg/640px-Shweta_Mohan.jpg
        </div>
    );
}

export default Login;
