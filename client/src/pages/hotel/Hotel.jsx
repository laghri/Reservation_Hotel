import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Header from '../../components/Header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import Reserve from '../../components/Reserve/Reserve'
import { AuthContext } from '../../context/AuthContext '
import { SearchContext } from '../../context/SearchContext'
import useFetch from '../../hook/useFetch'
import './hotel.css'
const Hotel = () => {
  // const photos =  [
  //     {
  //       src:"https://media.istockphoto.com/photos/portrait-of-tourist-woman-raised-her-hands-and-standing-nearly-window-picture-id1199804796"
  //     },
  //     {
  //       src:"https://media.istockphoto.com/photos/interior-design-classic-bedroom-picture-id498432246"
  //     },
  //     {
  //       src:"https://media.istockphoto.com/photos/hotel-room-interior-picture-id1144644260"
  //     },
  //     {
  //       src:"https://media.istockphoto.com/photos/interior-of-a-luxury-hotel-suite-picture-id496860888"
  //     },
  //     {
  //       src:"https://media.istockphoto.com/photos/hotel-suite-interior-picture-id500090556"
  //     },
  //     {
  //       src:"https://media.istockphoto.com/photos/luxury-living-room-interior-picture-id481505336"
  //     },  
    
  // ]
  const location =useLocation();
  const id= location.pathname.split("/")[3];


  const {data, loading, error} =useFetch(`/hotels/find/${id}`);

  const [slideNumber,setSlideNumber]=useState(0);
  const [open,setOpen]=useState(false);
  const [openModal,setOpenModal]=useState(false);


  const handlModel=(i)=>{
  setSlideNumber(i);
  setOpen(true);
}
const handleMove= (direction)=>{
    let newSlideNumber;
    if(direction==="l"){
      newSlideNumber=slideNumber===0 ?data?.photos.length-1:slideNumber-1
    }
    else{
      newSlideNumber=slideNumber===data?.photos.length-1 ?0:slideNumber+1
    }
    setSlideNumber(newSlideNumber);
}


const {dates ,options}=useContext(SearchContext);
console.log(dates);
const MILLISECONS_PER_DAY= 1000*60*60*24;
function dayDifference(date1,date2){
  const timeDiff =Math.abs(date2.getTime() - date1.getTime());
  const diffDays=Math.ceil(timeDiff / MILLISECONS_PER_DAY);
  return diffDays;
}


const days =dayDifference(dates[0].endDate,dates[0].startDate);
console.log(data.cheapesPrice);

const {user} =useContext(AuthContext);
const navigate =useNavigate();
const handleClick =  () =>{
    if(user){
      console.log("hello")
          setOpenModal(true);
    }
    else {
            navigate("/");
    }
}


  return (
     <div>
        <Navbar />
        <Header  type="List" />
       {loading? "loading.." : <div className="hotelContainer">
         {
          open &&  <div className="slide">
              <FontAwesomeIcon   icon={faCircleXmark} className="close" onClick={ ()=> setOpen(false)} />
              <FontAwesomeIcon   icon={faCircleArrowLeft}  className="arrow" onClick={()=>handleMove("l")} />
              <div className="sliderWrapper">
                  <img src={data?.photos[slideNumber]} alt="" className="sliderImg" />
              </div>
              <FontAwesomeIcon   icon={faCircleArrowRight} className="arrow"  onClick={()=>handleMove("r")} />
          </div>
         }
          <div className="hotelWrapper">
            <button className="bookNow"    onClick={handleClick}>
              Reserve or Book Now!
            </button>
            <h1 className="hotelTitle"> {data?.name}</h1>
            <div className="hotelAdress">
                 <FontAwesomeIcon  icon={faLocationDot} />
                 <span>{data?.address}</span>
            </div>
            <span className="hotelDistance">
               Excellent location -{data?.distance}m from center
            </span>
            <span className="hotelPriceHighLight">
                 Book a stay over ${data?.cheapestPrice} at this property and get a free aiport taxi
            </span>
            <div className="hotelImages">
                    {
                      data.photos?.map((photo,i) =>(
                          <div className="hotelImgWrapper" key={i}>
                            <img src={photo} alt="" className="hotelImg"  onClick={()=>handlModel(i)}/>
                          </div>
                      ))
                    }
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsText">
              <h1 className="hotelTitel">
                {data.title}
              </h1>
              <p className="hotelDesc">
                 {data?.desc}
              </p>

          
              </div>
              <div className="hotelDetailsPrice">
                  <h1>Perfect for a {days}-night stay !</h1>
                  <span>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque facilis explicabo maxime. Repudiandae iusto ullam quis pariatur asperiores. Cum numquam sapiente incidunt laudantium quis fugit obcaecati velit illo doloremque sed.
            
                  </span>
                  <h2>
                      <b>${days * data.cheapesPrice * options.Room}</b>({days} nights)
                  </h2>
                  <button   onClick={handleClick}>Reserve or Book Now !</button>
              </div>
            </div>
          </div>
          <MailList />
          <br />
          <Footer />
        </div>
        
        }
        {openModal && <Reserve  setOpen={setOpenModal} hotelId={id} />}
     </div>
  )
}

export default Hotel