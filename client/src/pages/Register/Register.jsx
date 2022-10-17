import axios from 'axios'
import React, { useState } from 'react'
import "./Register.css"
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const navigate=useNavigate()
   const handleChange = (e)=>{
      setDonnee(prev=>({
        ...prev,
        [e.target.id]:e.target.value

      }))
   }

   const [error,setError] =useState(false);
    const [donnee,setDonnee] =useState({
        username:undefined,
        email:undefined,
        password:undefined,
        isAdmin:false

    })
    console.log(donnee)
    const handleClick= async ()=>{
       try { 
          const res= await axios.post("/auth/register" ,donnee);
          navigate("/login")
       } catch (error) {
          setError(true)
       }
    }
  return (
     <div className="conatiner">
        <div className="inputs">
        <div>
        <label htmlFor="">username:</label>
        <input type="text" onChange={handleChange} id="username" />
        </div>
        <div>
        <label htmlFor="">Email:</label>
        <input type="email"   onChange={handleChange}  id="email"/>
        </div>
        <div>
        <label htmlFor="">password</label>
        <input type="password" onChange={handleChange}  id="password" />
        </div>
        <button className='btn' onClick={handleClick}>Sign in</button>
        </div>
       
       
        
        {error && <span>Something wrong</span>}
     </div>
       
  )
}

export default Register