import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setUserData } from "../../redux/userSlice";

function Login() {
    let nav = useNavigate()
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [err,setErr]=useState("")
    let dispatch = useDispatch()
    const loginAPI = async (e) => {
        e.preventDefault()
        setErr("")
        try {
            let data = await axios.post("https://shri-vr-backend.onrender.com/login",
                {
                    email,
                    password
                },
                {
                    withCredentials: true
                }
            )
            console.log(data)
            dispatch(setUserData(data.data))
        } catch (error) {
            console.log(error.response.data.message)
            setErr(error.response.data.message)
        }
    }
    return (
        <div className="login-container">
            <form className="login-form" onSubmit={loginAPI}>
                <h2>Login</h2>
                <input type="email" placeholder="Email Address"  onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
                <p id="error">{err}</p>
                <button type="submit" >Login Now</button>
                <p className="login-link" >
                    Don't have an account? <span id="navLogin" onClick={() => { nav('/signup') }}>Create Account</span>
                </p>
            </form>
        </div>
    );
}

export default Login;