import { Form } from "./Form"
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import { useDispatch } from "react-redux"
import { setUser } from "../store/slices/userSlice"
import React from "react"
import { Link,useNavigate } from "react-router-dom"

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (email,password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,email,password)
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
            handleClick={handleRegister}
        />
       
        </div>
    )
}

export default Register