import { Form } from "./Form"
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import { useDispatch } from "react-redux"
import { setUser } from "../store/slices/userSlice"
import React from "react"
import { Link,useNavigate } from "react-router-dom"

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
        <Form 
            title="sign in"
            handleClick={handleLogin}
        />
    )
}

export default LogIn