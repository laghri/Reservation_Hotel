import React from "react";
import "./propertyList.css";
import useFetch from '../../hook/useFetch'
const PropertyList = () => {
  const {data ,loading  } =useFetch("/hotels/countByType");
  console.log("sfsfsfzdf")
  console.log(data)
  const images =[
    "https://cdn.pixabay.com/photo/2016/10/06/17/28/architecture-1719526_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_960_720.jpg"
  ]
  return (
    <div className="pList">
       {
        loading ? ("loading"):(<>
          {
            images.map((img,i)=>(
              <div className="pListItem" key={i}>
        <img
          src={img}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>{data[i]?.type}</h1>
          <h2>{data[i]?.count} {data[i]?.type}</h2>
        </div>
      </div>


            ))
           
          }
       

      </>)
       }
    </div>
  );
};

export default PropertyList;
