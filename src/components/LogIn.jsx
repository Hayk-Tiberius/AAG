import React from "react"
import { Link } from "react-router-dom"

const LogIn = () => {
    return ( 
    <div className="LogIn_Main">
        <h1>Log In</h1>
        <Link to="/Register.jsx">
            Register
        </Link>
    </div> 
   
        )
}

export default LogIn