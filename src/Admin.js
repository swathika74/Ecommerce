import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import './admin.css';
function Admin(){
    
    const [email ,setEmail]=useState("");
    const [password,setPassword]=useState(""); 
    const [adminCode,setAdminCode]=useState(""); 
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const adminCodeError = document.getElementById("adminCodeError");


    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
        email = storedEmail;
    }
    const storedPassword = localStorage.getItem("password");
    if (storedPassword) {
        password= storedPassword;
    }
    const storedAdminCode = localStorage.getItem("adminCode");
    if (storedAdminCode) {
        adminCode = storedAdminCode;
    }

    form.addEventListener('submit', function(e) {
        if (!checkInput()) {
            e.preventDefault();
        } else {
            
            localStorage.setItem("email", email.trim());
            localStorage.setItem("password", password.trim());
            localStorage.setItem("adminCode", adminCode.trim());
        }
    });

    function checkInput() {
        const emailValue = email.trim();
        const passwordValue = password.trim();
        const adminCodeValue = adminCode.trim();
        let success = true;

        if (emailValue === '') {
            success = false;
            setError(email, emailError, 'Email cannot be blank');
        } else if (!isEmail(emailValue)) {
            success = false;
            setError(email, emailError, 'Not a valid email');
        } else {
            setSuccess(email, emailError);
        }

        if (passwordValue === '') {
            success = false;
            setError(password, passwordError, 'Password cannot be blank');
        } else {
            setSuccess(password, passwordError);
        }

        if (adminCodeValue === '') {
            success = false;
            setError(adminCode, adminCodeError, 'Admin code cannot be blank');
        } else {
            setSuccess(adminCode, adminCodeError);
        }

        return success;
    }

    function setError(input, errorElement, message) {
        errorElement.innerText = message;
        input.classNameList.add('error');
        input.classNameList.remove('success');
    }

    function setSuccess(input, errorElement) {
        errorElement.innerText = '';
        input.classNameList.add('success');
        input.classNameList.remove('error');
    }

    function isEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }


return (
<form id="signinForm">
        <div>
            <input type="email" id="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} value={email} />
            <span id="emailError" className="error-message"></span>
        </div>
        <div>
            <input type="password" id="password" placeholder="Password"onChange={(e)=>setPassword(e.target.value)} value={password} />
            <span id="passwordError" className="error-message"></span>
        </div>
        <div>
            <input type="text" id="adminCode" placeholder="Admin Code" onChange={(e)=>setAdminCode(e.target.value)} value={adminCode}/>
            <span id="adminCodeError" className="error-message"></span>
        </div>
        <button type="submit">Sign In</button>
    </form>
    );
}
export default Admin;