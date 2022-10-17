import React from 'react'
import { Link } from 'react-router-dom'
import './searcheItem.css'

const SearchItem = ({item}) => {
  return (
  <div className="SearchItem">
     <img src="https://cdn.pixabay.com/photo/2017/01/21/22/40/castle-1998435_960_720.jpg" alt="" className="siImg" />
     <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}</span>
        <span className="siTaxiop">Free airport Taxi</span>
        <span className="siSubtitle">
            {item.desc}
        </span>
        <span className="siFeatures">
            Entire studio .1 bathroom .21m 1 full bed
        </span>
        <span className="siCancelop">Free cancellation</span>
        <span className="siCancelopSubtitle">
            you  can cancel later,so lock in this great price today!
        </span>

     </div>
     <div className="siDetails">
         
         
            <div className="siDetailText">
            {item.rating &&
                <div className="siRating">
            
                <span>Exellant</span>
                 <button>{item.rating}</button>
                 </div>
                }
                <span className="siPrice">${item.cheapesPrice}</span>
                <span className="siTaxop">Includes taxes and fees</span>
                 <Link to={`/hotels/find/${item._id}  `}>
                <button className='siCheckButton'>See availability</button>
                </Link>
                
            </div>

            
         
     </div>
  </div>
  )
}

export default SearchItem