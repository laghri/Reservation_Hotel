import React, { useState } from 'react'
import './newRoom.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { roomInputs } from '../../formSource';
import { SpinnerDotted } from 'spinners-react/lib/esm/SpinnerDotted';
import { useNavigate } from 'react-router-dom'

import useFetch from '../../hook/useFetch';
import axios from 'axios';
const NewRoom = () => {
 
  const navigate=useNavigate();
  const [info,setInfo]=useState({});
  const {data,loading,error}=useFetch("/hotels");
  const [rooms,setRooms]=useState([])
  const [hotelId,setHotelId]=useState(undefined)
  console.log(data)

  const handleChanged =async  (e)=>{
   setInfo(prev=>({...prev,[e.target.id]:e.target.value}))
}; 
      console.log(info)
 
const [loadingS,setLoding]=useState(false);
const handleClick= async(e)=>{
   setLoding(true);
   e.preventDefault();
   try {
        const RoomsNumbers=rooms.toString().split(",").map((room)=>({number:room}));
        console.log(RoomsNumbers)
        console.log(hotelId)
        console.log("mes info")
        console.log(info)
        await axios.post(`/rooms/${hotelId}`,{...info,RoomsNumbers })
        setLoding(false);
        navigate("/rooms")
   } catch (error) {
      console.log(error)
   }
}
  return (
    <div className="new">
        <Sidebar />
        <div className="newContainer">
            <Navbar />
            <div className="top">
               <h1>Add New Room</h1>
            </div>
            {loadingS ? <SpinnerDotted color="blue"   size={100}   enabled={loadingS} className="loading"/>:(
            <div className="bottom">
               
               <div className="right">
                  <form action="">
                  {/* <div className="formInput">
                        <label htmlFor="file" >
                       Image: <AddPhotoAlternateIcon  className='icon'/>
                        </label>
                        <input type="file"  id="file"  style={{display:"none"}}  onChange={(e)=>setFile(e.target.files[0])}/>
                    </div> */}
                    {roomInputs.map((item)=>(
                              <div className="formInput" key={item.id}>
                              <label htmlFor="">{item.label}</label>
                              <input   id={item.id} onChange={handleChanged} key={item._id}   type={item.type} placeholder={item.placeholder} />
                              </div>
                         
                    ))}
                     <div className="formInput" >
                              <label htmlFor="">Rooms</label>
                               <textarea onChange={e=>setRooms(e.target.value)}     placeholder='give comma between room numbers'></textarea>
                      </div>
                     <div className="formInput" >
                              <label htmlFor="">Choose Hotel</label>
                               <select id="hotelId" onChange={e=>setHotelId(e.target.value)}>
                               {loading ?"loading.." : data.map((hotel)=>(
                                  <option   onKeyUp={hotel._id} value={hotel._id}>{hotel.name}</option>
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

export default NewRoom