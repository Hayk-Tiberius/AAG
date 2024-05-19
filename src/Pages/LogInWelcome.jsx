import React from "react";
import { removeUser } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/use-auth.js"
import { Navigate } from "react-router-dom";



const LogInWelcome = () => {
    const dispatch = useDispatch();

    const {isAuth, email} = useAuth();

    return isAuth ? (
        <div>
            <h1>Congratulations</h1>
            You signed up

            <button
                onClick={()=> dispatch(removeUser())}
            >
                Log out from {email} </button>

        </div>
    ) : (
        <Navigate to="/" />
    )
}

export default LogInWelcome