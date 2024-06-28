import React from "react"
import { useState } from "react";
import "../components/Login.css"
import { Link } from "react-router-dom"


const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div className="body-form">
        <div className="wrapper">
           
            <h1>{title}</h1>
            <div className="input-box">
            <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
            />
            <i class='bx bxs-user'></i>
            </div>
            <div className="input-box">
            <input
                type="password"
                required
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Password"
            />
            <i class='bx bxs-lock-alt'></i>
            </div>
            
            <button type="submit" className="btn"
                onClick={() => handleClick(email,pass)}
            >
                {title}
            </button>
            <div className="register-link">
            <p>    Don't have an account?
                 <Link className="register-hover" to="/Register.jsx">
                    Register</Link></p>
            </div>
        </div>
        </div>
    )
}

export {Form}