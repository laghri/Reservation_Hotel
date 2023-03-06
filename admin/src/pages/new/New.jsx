import React, { useState } from 'react'
import './new.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import axios from 'axios';
import { SpinnerDotted } from 'spinners-react/lib/esm/SpinnerDotted';
import ReactLoading from "react-loading";
import { useNavigate } from 'react-router-dom'

const New = ({inputs,title}) => {
  const [file,setFile]= useState("");
  const [info,setInfo]=useState({});
const handleChanged =async  e=>{
   setInfo(prev=>({...prev,[e.target.id]:e.target.value}))
}; 
const [loading,setLoding]=useState(false);
const navigate=useNavigate();
const handleClick =async (e)=>{
   e.preventDefault()
   const data=new FormData()
   data.append("file",file)
   data.append("upload_preset","upload")
   try {
      setLoding(true);
      const uploadRes=await axios.post("https://api.cloudinary.com/v1_1/lgrcloud/image/upload",data)
      const {url}=uploadRes.data;
      const Newuser={
         ...info,
         img:url
      };
      console.log(Newuser)
      
      await axios.post("/auth/register",Newuser);
      navigate("/users")
      setLoding(false);
   } catch (error) {
    
      console.log(error)
     
      
   }
}

 console.log(info)
  return (
 

    <div className="new">
        <Sidebar />
        <div className="newContainer">
            <Navbar />
            <div className="top">
               <h1>{title}</h1>
            </div>
            {loading ?<SpinnerDotted color="blue"   size={100}   enabled={loading} className="loading"/>:(
            <div className="bottom">
               <div className="left">
               <img src={file ? URL.createObjectURL(file)    :"https://as2.ftcdn.net/v2/jpg/04/70/29/97/1000_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"} alt="" />
               </div>
               <div className="right">
                  <form action="">
                  <div className="formInput">
                        <label htmlFor="file" >
                       Image: <AddPhotoAlternateIcon  className='icon'/>
                        </label>
                        <input type="file"  id="file"  style={{display:"none"}}  onChange={(e)=>setFile(e.target.files[0])}/>
                    </div>
                    {inputs.map((item)=>(
                              <div className="formInput" key={item.id}>
                              <label htmlFor="">{item.label}</label>
                              <input onChange={handleChanged} id={item.id} type={item.type} placeholder={item.placeholder} />
                              </div>
                         
                    ))}
                   
                    <button onClick={handleClick}>Send</button>
                  </form>
               </div>
            </div>
            )}
        </div>
    </div>)
}
  


export default New