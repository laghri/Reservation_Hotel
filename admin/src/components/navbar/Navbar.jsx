import React, { useContext } from 'react'
import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { DarkModeContext } from '../../context/darkModeContext';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
const Navbar = () => {
    const {dispatch ,darkMode} =useContext(DarkModeContext);
  return (
   <div className="navbar">
       <div className="wrapper">
          <div className="search">
            <input type="text" placeholder='search ....' />
            <SearchOutlinedIcon />
          </div>
          <div className="items">
            <div  className="item">
                <LanguageOutlinedIcon  className='icon'/>
                English
            </div>
            <div  className="item" onClick={()=>dispatch({type: "TOGGLE"})}>
                {darkMode? <WbSunnyIcon className='icon'/>  : <DarkModeOutlinedIcon  className='icon' />}
             
            </div>
            <div  className="item">
                <FullscreenExitOutlinedIcon  className='icon' />
                
            </div>
            <div  className="item">
                <NotificationsNoneOutlinedIcon   className='icon'/>
                <div className="counter">1</div>
            
            </div>
            <div  className="item">
                <ChatBubbleOutlineOutlinedIcon  className='icon'/>
                <div className="counter">2</div>
              
            </div>
            <div  className="item">
                <ListOutlinedIcon className='icon' />
          
            </div>
            <div className="item">
               <img src="https://www.intelizon.com/wp-content/uploads/2019/10/users-vector-icon-png_260862-300x300.jpg" alt="" className='avatar' />
            </div>
          </div>
       </div>
   </div>
  )
}

export default Navbar