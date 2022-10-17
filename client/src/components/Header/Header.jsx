import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import "./Header.css";
import { format } from "date-fns";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext ";
const Header = ({type}) => {
  const [openDate, setOpendate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [destination,setDestination]=useState("")
  const [openOption, setOpenoption] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    Room: 1,
  });
  const navigate= useNavigate();
  const handleOption = (name, operation) => {
    setOptions ((prev)=> {
        return {
            ...prev,
            [name] :operation === "d"   ? options[name]-1 :options[name] +1,
        }
    })
  }
  const handlSearch=() => {
    dispatch({type:"NEW_SEARCH",payload:{destination,dates,options}});
    navigate("/hotels",{state:{destination,dates,options}})
  }

  const {dispatch} =useContext(SearchContext);
  const {user} =useContext(AuthContext);
  return (
    <div className="header">
      <div className={type === "List" ? "headerContainer ListMode"  : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi</span>
          </div>
        </div>
        {   type !== "List" &&
        <>
        <h1 className="headerTitle">A lifetime of discount It's Genius</h1>
        <p className="headerDescription">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
          officia numquam consequuntur facere, saepe corrupti laudantium totam
          cumque esse quae? Id labore rem accusantium totam dolorem ipsa est
          nesciunt natus.
        </p>
         {
          !user &&
          (<button className="headerBtn">Sign in /Register</button>)
         }
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going ?"
              className="headerSearchInput"
              onChange={ e => setDestination(e.target.value)}
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setOpendate(!openDate)}
              className="headerSearchText"
            >{`${format(dates[0].startDate, "MM/dd/yyyy")} to  ${format(
              dates[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDates([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dates}
                className="date"
                minDate={new Date()}
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span  onClick={()=> setOpenoption(!openOption)} className="headerSearchText">{`${options.adult} adult . ${options.children} children . ${options.Room} Room`}</span>
             {openOption &&          <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button className="optionCounterButton" onClick={ ()=> handleOption("adult","d")} disabled={options.adult <=1}>-</button>
                  <span className="optionCounterNumber">{options["adult"]}</span>
                  <button className="optionCounterButton" onClick={ ()=> handleOption("adult","i")} >+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button className="optionCounterButton"  onClick={ ()=> handleOption("children","d")} disabled={options.children <=0}>-</button>
                  <span className="optionCounterNumber">{options["children"]}</span>
                  <button className="optionCounterButton" onClick={ ()=> handleOption("children","i")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                  <button className="optionCounterButton" onClick={ ()=> handleOption("Room","d")} disabled={options.Room <=1}>-</button>
                  <span className="optionCounterNumber">{options["Room"]}</span>
                  <button className="optionCounterButton"  onClick={ ()=> handleOption("Room","i")}>+</button>
                </div>
              </div>
            </div>}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn"  onClick={ handlSearch}>Search</button>
          </div>
        </div>
        </>
}
      </div>
    </div>
  );
};

export default Header;
