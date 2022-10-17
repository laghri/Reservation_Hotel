import React from 'react'
import "./navbar.css"
import {
   
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../img/LOGO.png"
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext ';
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    const {user,dispatch} =useContext(AuthContext);
    const navigate =useNavigate();
    const LogOut =()=>{
      dispatch({
        type:"LOGOUT"
        })
       navigate("/")
    }
    const Loginclick =()=>{
      navigate("/login")
    }
    const RegisterClick=()=>{
      navigate("/register")
    }
  return (
      <div className="navbar">
          <div className="navContainer">
              <span className='logo'>
                 <img src={logo} alt="" />
                 </span>
               {
                user? 
                 <div>
                  
                   <span>{user.username}</span>
                   <button className='navButton' onClick={LogOut}>Logaout</button>
                  </div>
                
                
                :
                <div className="navItems">
                  
                  <button className='navButton' onClick={RegisterClick} >Register</button>
               
                
                  <button className='navButton' onClick={Loginclick}>Login</button>
              </div>
}
          </div>
      </div>
  )
}

export default Navbar