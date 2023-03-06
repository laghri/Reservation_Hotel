import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext '
import "./login.scss"
const Login = () => {

    const [credentials,setCredentials] =useState({
        username:undefined,
        password:undefined
    });
    const navigate =useNavigate();
    const {user,loading ,error,dispatch} =useContext(AuthContext);
const handleChange=(e)=>{
    setCredentials(prev=>({
        ...prev,
        [e.target.id]:e.target.value
    }));
}

const handleClick = async e =>{
   e.preventDefault();
   console.log("heeeeee")
   dispatch({
    type:"LOGIN_START"
   })
try {
    const res= await axios.post("/auth/login",credentials);
 
    if(res.data.isAdmin){
      dispatch({type:"LOGIN_SUCCESS", payload:res.data.details});
      navigate("/");
    }
    else{
      dispatch({type:"LOGIN_FAILURE" ,playload:{message:"You are not allowed"}});
      console.log("walmerd");
    }
  
} catch (error) {
    dispatch({type:"LOGIN_FAILURE" ,playload:error.response.data});
    console.log("erreu");
}
}
console.log(user);
  return (
    <div className="login">
        <div className="lContainer">
            <input type="text" placeholder='username' className='lInput' id="username"  onChange={handleChange}/>
            <input type="password" placeholder='password' className='lInput' id="password"  onChange={handleChange}/>
            <button    disabled={loading}        onClick={handleClick}    className='lButton'>Login</button>
            {error && <span>{error.message}</span>}
        </div>
    </div>
  )
}

export default Login