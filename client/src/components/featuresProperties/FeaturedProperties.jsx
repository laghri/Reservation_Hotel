import React from 'react'
 import './FeaturedProperties.css'
 import useFetch from '../../hook/useFetch'
const FeaturedProperties = () => {
  const {data ,loading ,error } =useFetch("/hotels?featured=false&limit=4");
  const images =[
    "https://cdn.pixabay.com/photo/2017/01/21/22/40/castle-1998435_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_960_720.jpg",
  
    "https://cdn.pixabay.com/photo/2017/01/21/22/40/castle-1998435_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_960_720.jpg"
   ]
  return (
    <div className='fp'>
      {
        loading ? "Loadinng ....":
        (<>
          {
           data.map((item,i)=>(
            <div className="fpItem" key={item}>
            <img src={images[i]} alt="" className="fpImg" />
            <span className="fpName">{item?.name}</span>
           <span className="fpCity">{item?.City}</span>
           <span className="fpPrice">Starting from {item?.cheapesPrice}</span>
             {
              item.rating &&
              <div className="fpRating">
              <button>{item.rating}</button>
              <span>Exellent</span>
          </div>
             }
        </div>
           ))
        
           }
        </>)
      }
        

       
       
    </div>
  )
}

export default FeaturedProperties