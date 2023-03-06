import React, { useContext } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import FilterFramesTwoToneIcon from '@mui/icons-material/FilterFramesTwoTone';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import LoginIcon from '@mui/icons-material/Login';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import './Sidebar.scss'
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
const Sidebar = () => {
    const {dispatch} =useContext(DarkModeContext);
  return (
    <div className="sidebar">
        <div className="top">
           <Link  to="/" style={{textDecoration:"none"}} >
             <span className='logo'>LGTAdmin</span>
           </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icon"    />
                    <span>Dashboard</span>
                </li>
                
                <p className="title">LISTS</p>
                <Link  to="/users" style={{textDecoration:"none"}} >
                  <li>
                    <SupervisedUserCircleIcon className="icon"  />
                   
                    <span>Users</span>
                   
                 
                </li>
                </Link>
                <Link  to="/hotels" style={{textDecoration:"none"}} >
                <li>
                    <ProductionQuantityLimitsIcon  className="icon" />
                  
                      <span>Hotels</span>
                 
                    
                </li>
                </Link>
                <Link  to="/rooms" style={{textDecoration:"none"}} >
                <li>
                    <FilterFramesTwoToneIcon  className="icon" />
                    <span>Rooms</span>
                </li>
                </Link>
                <li>
                    <DeliveryDiningIcon  className="icon" />
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <QueryStatsIcon className="icon"  />
                    <span>Stats</span>
                </li>
                <li>
                    <CircleNotificationsIcon className="icon"  />
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <WysiwygIcon  className="icon" />
                    <span>System Health</span>
                </li>
                <li>
                    <LoginIcon className="icon"  />
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsApplicationsIcon className="icon"  />
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountBoxIcon  className="icon" />
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon  className="icon" />
                    <span>logout</span>
                </li>
                
            </ul>
        </div>
        <div className="bottom">
                <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
                <div className="colorOption"  onClick={()=>dispatch({type:"DARK"})}></div>
              
        </div>
    </div>
  )
}

export default Sidebar