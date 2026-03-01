import React from "react";
import { useNavigate } from "react-router";
import axios from "axios"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/userSlice";
function Signup() {
  let nav = useNavigate()
  let [name,setName]=useState("")
  let [email,setEmail]=useState("")
  let [contact,setContact]=useState("")
  let [password,setPassword]=useState("")
  let [err,setErr] = useState("")
  let [loading,setLoading] = useState(false)
  let dispatch = useDispatch()

  const signupAPI = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErr("")
    try {
      let data = await axios.post("https://shri-vr-backend.onrender.com/signup",
        {
          name,
          email,
          contact,
          password
        },
        {
          withCredentials: true
        }
      )
      console.log(data)
      setLoading(false)
      dispatch(setUserData(data.data))
    } catch (error) {
      console.log(error.response.data.message)
      setLoading(false)
      setErr(error.response.data.message)
    }
  }

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={signupAPI}>
        <h2>Create Account</h2>
        <input type="text" placeholder="Full Name"  onChange={(e)=>{setName(e.target.value)}} />
        <input type="email" placeholder="Email Address"  onChange={(e)=>{setEmail(e.target.value)}} />
        <input type="tel" placeholder="Phone Number"  onChange={(e)=>{setContact(e.target.value)}} />
        <input type="password" placeholder="Create Password"  onChange={(e)=>{setPassword(e.target.value)}} />
        <p id="error">{err}</p>
        <button type="submit">{loading?"Loading...":"Signup"}</button>
        <p className="login-link">Already have an account? <span id="navLogin" onClick={() => { nav("/login") }}>Login</span></p>
      </form>
    </div>
  );
}

export default Signup;