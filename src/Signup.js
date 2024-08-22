import React, {  useState } from 'react';
import { Link } from "react-router-dom";
import './App.css';
import './signup.css';

function Signup() {
    
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmpassword] = useState("");

    const clearForm = () => {
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmpassword('');
    };

    const onRegistration = (e) => {
        e.preventDefault();

         if (checkInputs()) {
             const userData = {
                 username: username.trim(),
                 email: email.trim(),
                 password: password.trim(),
                 confirmPassword: confirmPassword.trim()
             };
        localStorage.setItem("userData", JSON.stringify(userData));
        alert("Your data is saved in local storage");
        clearForm();
    }
};

const checkInputs = () => {
    const usernameValue = username.trim();
    const emailValue = email.trim();
    const passwordValue = password.trim();
    const confirmPasswordValue = confirmPassword.trim();
    let success = true;

     if (usernameValue === '') {
         setErrorFor(username, 'Username cannot be blank');
         success = false;
     } else {
         setSuccessFor(username);
     }

     if (emailValue === '') {
         setErrorFor(email, 'Email cannot be blank');
         success = false;
     } else if (!isEmail(emailValue)) {
         setErrorFor(email, 'Not a valid email');
         success = false;
     } else {
         setSuccessFor(email);
     }

     if (passwordValue === '') {
         setErrorFor(password, 'Password cannot be blank');
         success = false;
     } else {
         setSuccessFor(password);
     }

     if (confirmPasswordValue === '') {
         setErrorFor(confirmPassword, 'Confirm Password cannot be blank');
         success = false;
     } else if (passwordValue !== confirmPasswordValue) {
         setErrorFor(confirmPassword, 'Passwords do not match');
         success = false;
     } else {
         setSuccessFor(confirmPassword);
     }

     return success;
};

 const setErrorFor = (input, message) => {
     const formControl = input.parentElement;
     const small = formControl.querySelector('.error-message');
     small.innerText = message;
     formControl.className = 'form-control error';
 };

 const setSuccessFor = (input) => {
     const formControl = input.parentElement;
     formControl.className = 'form-control success';
 };

const isEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

return (
    <div className="container">
        <div className="header">
            <h2>Create Account</h2>
        </div>
        <form className="form" id="form" onSubmit={onRegistration}>
            <div className="form-control">
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Enter your username" id="username" name="username" onChange={(e) => setUsername(e.target.value)} value={username} />
                 <small className="error-message">Error Message</small> 
            </div>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter your email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                 <small className="error-message">Error Message</small> 
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter your password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                 <small className="error-message">Error Message</small> 
            </div>
            <div className="form-control">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" placeholder="Confirm your password" id="confirmPassword" name="confirmPassword" onChange={(e) => setConfirmpassword(e.target.value)} value={confirmPassword} />
                 <small className="error-message">Error Message</small> 
            </div>
            <button type="submit">Register</button>
        </form>
        <Link to="/login">Do you want to login page?</Link>
    </div>
);
}

export default Signup;
