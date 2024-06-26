import { Form } from "./Form"
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import { useDispatch } from "react-redux"
import { setUser } from "../store/slices/userSlice"
import React from "react"
import { useNavigate } from "react-router-dom"
import "../components/Login.css"

const LogIn = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleLogin = (email,password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
            .then(({user}) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }));
                navigate('/LogInWelcome.jsx');
            })
            .catch(console.error)
    }

    return ( 
        <div>
        <Form 
            title="sign in"
            handleClick={handleLogin}
        />
            
        </div>
    )
}

export default LogIn