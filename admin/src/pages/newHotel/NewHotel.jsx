import React, { useState } from 'react'
import './newHotel.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { HotelInputs } from '../../formSource';
import useFetch from '../../hook/useFetch';
import { SpinnerDotted } from 'spinners-react/lib/esm/SpinnerDotted';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
const NewHotel = () => {
  const [files,setFiles]= useState("");
  const navigate=useNavigate();
  const [info,setInfo]=useState({});
  const {data,loading,error}=useFetch("/rooms");
  const [rooms,setRooms]=useState([])
  console.log(data)
  const handleSelect =(e)=>{
        const value=Array.from(e.target.selectedOptions,(option)=> option.value)
        setRooms(value)
      } 
      console.log(rooms)
  const handleChanged =async  e=>{
   setInfo(prev=>({...prev,[e.target.id]:e.target.value}))
}; 
const [loadingS,setLoding]=useState(false);
const handleClick =async (e)=>{
   e.preventDefault();
   setLoding(true);

  
   try {
      const list =await Promise.all(
       Object.values(files).map( async (file)=>{
            const data=new FormData()
            data.append("file",file)
            data.append("upload_preset","upload")
            const uploadRes=await axios.post("https://api.cloudinary.com/v1_1/lgrcloud/image/upload",data)
           const {url}=uploadRes.data;
           return url;
         })
      )
      
      
      const  NewHotel={
         ...info,
        photos:list
      };
      console.log(NewHotel)
      
      await axios.post("/hotels",NewHotel);
      setLoding(false);
      navigate("/hotels")
    
   } catch (error) {
    
      console.log(error)
     
      
   }
}
 console.log(files)
  return (
    <div className="new">
        <Sidebar />
        <div className="newContainer">
            <Navbar />
            <div className="top">
               <h1>Add new Hotel</h1>
            </div>
            {loadingS ? <SpinnerDotted color="blue"   size={100}   enabled={loadingS} className="loading"/>:(
            <div className="bottom">
               <div className="left">
               <img src={files ? URL.createObjectURL(files[0])    :"https://as2.ftcdn.net/v2/jpg/04/70/29/97/1000_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"} alt="" />
               </div>
               <div className="right">
                  <form action="">
                  <div className="formInput">
                        <label htmlFor="file" >
                       Image: <AddPhotoAlternateIcon  className='icon'/>
                        </label>
                        <input type="file"   multiple id="file"  style={{display:"none"}}  onChange={(e)=>setFiles(e.target.files)}/>
                    </div>
                    {HotelInputs.map((item)=>(
                              <div className="formInput" key={item.id}>
                              <label htmlFor="">{item.label}</label>
                              <input id={item.id}   onChange={handleChanged}     type={item.type} placeholder={item.placeholder} />
                              </div> 
                         
                    ))}
                     <div className="formInput" >
                              <label htmlFor="">Featured</label>
                              <select id="featured" onChange={handleChanged }>
                                 <option value="fasle">No</option>
                                 <option value="true">Yes</option>
                              </select>
                     </div> 
                     <div className="selectRooms" >
                              <label htmlFor="">Rooms</label>
                              <select id="featured"  multiple    onChange={handleSelect }>
                                {loading ? "loading.." : data.map(room=>(
                                 <option key={room._id}   value={room._id}>{room.title}</option>
                                ))}
                              </select>
                     </div> 
                   
                    <button onClick={handleClick}>Send</button>
                  </form>
               </div>
            </div>
            )}
        </div>
    </div>
  )
}

export default NewHotel