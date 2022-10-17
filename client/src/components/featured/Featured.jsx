import React from 'react'
import "./featured.css"

import useFetch from '../../hook/useFetch'

const Featured = () => {
    const {data ,loading  } =useFetch("/hotels/countByCity?cities=berlin,madrid,london");
    console.log(data);
  return (
      <div className="featured">
        {loading ? ("Loading please wait") : (
            <>
            <div className="featuredItem">
            <img src="https://media.istockphoto.com/photos/landsakap-i-sverige-picture-id856462498" alt="" className='featuredImg' />
            <div className="featuredTitle">
                <h1>Berlin</h1>
                <h2>{data[0]} properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://media.istockphoto.com/photos/road-in-forest-sweden-picture-id913535120"  alt="" className='featuredImg' />
            <div className="featuredTitle">
                <h1>Madrid</h1>
                <h2>{data[1]} properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://media.istockphoto.com/photos/road-leading-through-the-winter-forest-picture-id1181315353"  alt="" className='featuredImg' />
            <div className="featuredTitle">
                <h1>London</h1>
                <h2>{data[2]} properties</h2>
            </div>
        </div>
        
            
            
            </>
        )}
      </div>
  )
}

export default Featured