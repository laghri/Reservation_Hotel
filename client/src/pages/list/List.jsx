import { format } from 'date-fns/esm'
import React from 'react'
import { useState } from 'react'
import { DateRange } from 'react-date-range'
import { useLocation } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Navbar from '../../components/navbar/Navbar'
import SearchItem from '../../components/searchItem/SearchItem'
import  useFetch  from "../../hook/useFetch"
import './list.css'

const List = () => {
  const location =useLocation();
  const [destination,setDestination]=useState(location.state.destination)
  const [dates, setDates] = useState(location.state.dates);
  const [options, setOptions] = useState(location.state.options)
  const [opendate,setOpendate] =useState(false);

  const [min,setMin] =useState(undefined);
  const [max,setMax]=useState(undefined);


  const handleClick =()=>{
    reFetch();
  }

  const {data, loading,error,reFetch} =useFetch(`/hotels/?City=${destination}&min=${min || 0}&max=${max || 999}`)
  return (
    <div>
      <Navbar />
      <Header  type="List"/>
      <div className="listContainer">
        <div className="listwrapper">
            <div className="listSearche">
                   <h1 className="lsTitle">Search</h1>
                   <div className="lsItem">
                     <label htmlFor="">Destination</label>
                     <input type="text" placeholder={destination}/>
                   </div>

                   <div className="lsItem">
                     <label htmlFor="">Check-in Date</label>
                     <span onClick={()=>setOpendate(!opendate)} >{`${format(dates[0].startDate, "MM/dd/yyyy")} to  ${format(
              dates[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {
              opendate &&   <DateRange 
              onChange={ (item) => setDates([item.selection])}
              minDate={new Date()}
              ranges={dates}

           />
            }
                     
                   </div>
                   <div className="lsItem">
                      <label htmlFor="">Options</label>
                      <div className="lsOptions">
                      <div className="lsOptionItem">
                        <span className='lsOptionText'>
                           Min price <small>per night</small>
                        </span>
                        <input type="number" onChange={e=>setMin(e.target.value)}    className="lsOptionInput" />
                      </div>
                      <div className="lsOptionItem">
                        <span className='lsOptionText'>
                           Max price <small>per night</small>
                        </span>
                        <input type="number" onChange={e=>setMax(e.target.value)}       className="lsOptionInput" />
                      </div>
                      <div className="lsOptionItem">
                        <span className='lsOptionText'>
                           Adult 
                        </span>
                        <input type="number"  min ={1} className="lsOptionInput" placeholder={options.adult} />
                      </div>
                      <div className="lsOptionItem">
                        <span className='lsOptionText'>
                          children 
                        </span>
                        <input type="number" min ={0} className="lsOptionInput"  placeholder={options.children}/>
                      </div>
                      <div className="lsOptionItem">
                        <span className='lsOptionText'>
                           Room
                        </span>
                        <input type="number"  min ={1} className="lsOptionInput" placeholder={options.Room} />
                      </div>
                   </div>
                   </div>
                   <button onClick={handleClick}>Search</button>
            </div>

            <div className="listResult">

              {loading ? "loading ...":<>
                   {
                    data.map(item=>(
                      <SearchItem item={item}  key={item._id}/>
                    ))
                   }
             
              </>
              
              }
              



            </div>
        </div>
      </div>
    </div>
  )
}

export default List