/* eslint-disable array-callback-return */
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import useFetch from '../../hook/useFetch'
import "./reserve.css"
import {SearchContext} from "../../context/SearchContext"
const Reserve = ({setOpen ,hotelId}) => {
  
    const {data,loading,error} =useFetch(`/hotels/room/${hotelId}`);
    const [selectedRoom,setSelecteedRoom]=useState([])
    const { dates } =useContext(SearchContext)

    const handleSelect = (e)=>{
          const checked =e.target.checked;
          const value=e.target.value;
          setSelecteedRoom(checked ?
               [...selectedRoom,value]:selectedRoom.filter((item)=>item !== value)
            )
    }
    const getDateInRange= (startDate,endDate)=>{
      const start=new Date(startDate);
      const end=new Date(endDate);
         const date=new Date(start.getTime());
          let list =[]
          while(data <=end){
            list.push(new Date(date))
            date.setDate(date.getDate()+1)
          }
          return list
    }
   console.log(getDateInRange(dates[0].startDate,dates[0].endDate))
  // console.log(dates[0].endDate)
    // const allDays= getDateInRange(dates[0].startDate,dates[0].endDate);
    // const isAvailable =(roomNumber)=>{
    //   const isFound =roomNumber.unvailableDates.some(date=>
    //         allDays.includes()
    //     )
    // }

    const handlClick =() =>{
            
    }
  return (
      <div className="reserve">
                 <div className="rContainer">
                    <FontAwesomeIcon  icon={faCircleXmark}  className= "rClose"   onClick={()=>setOpen(false)} />
                  <span>Select your rooms</span>
                  {  data.map(item =>(
                    <div className="rItem" key={item._id}>
                        <div className="fItemInfo">
                            <div className="rTitle">{item.title}</div>
                            <div className="desc">{item.desc}</div>
                            <div className="rMax">Maw people:<b>{item.maxPeople}</b></div>
                            <div className="rPrice">Maw people:<b>{item.price}</b></div>
                        </div>
                        
                               {item.roomNumbers.map(roomNumber=>(
                                <div className="room" key={roomNumber._id}>
                                    <label>{roomNumber.number}</label>
                                    <input type="checkbox" value={roomNumber._id}  onChange={handleSelect} />
                                </div>
                         
                               ))}   
                       
                    </div>
                  ))}
                  <button className='rButton'   onClick={handlClick}>Reserve Now!</button>
                 </div>
      </div>
  )
}

export default Reserve