import React from 'react'
import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
const Widget = ({ type }) => {
    let data;
    switch(type){
        case "user" :
            data={
                title:"USERS",
                isMoney:false,
                link:"See all users",
                icon: (
                    <PersonOutlineOutlinedIcon  className='icon'  style={{color:"crimson",backgroundColor:"rgba(255,0,0,0.2)"}}/>

                )
               
            }
            break;
            case "order" :
                data={
                    title:"ORDERS",
                    isMoney:false,
                    link:"See all ordes",
                    icon: (
                        <ShoppingBagOutlinedIcon  className='icon'   style={{color:"green ",backgroundColor:"rgba(0,128,0,0.2)"}}/>
    
                    )
                   
                }
                break;
                case "balance" :
            data={
                title:"BALANCE",
                isMoney:true,
                link:"See details",
                icon: (
                    <AccountBalanceOutlinedIcon  className='icon'  style={{color:"purple",backgroundColor:"rgba(128,128,0,0.2)"}}/>

                )
               
            }
            break;
            case "erarning" :
            data={
                title:"ERANRNING",
                isMoney:true,
                link:"View net eraningd",
                icon: (
                    <MonetizationOnOutlinedIcon    style={{color:"goldenrod",backgroundColor:"rgba(218,165,32,0.2)"}} />

                )
               
            }
            break;
        default:
                break;
    }
//tempory
    const amount=100;
    const diff=20;
  return (
     <div className="widget">
        <div className="left">
           <span className="title">{data.title}</span>
           <span className="counter">{data.isMoney && "$"} {amount }</span>
           <span className="link">{data.link}</span>
        </div>
        <div className="right">
              <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon />
                {diff}%
              </div>
              {data.icon}

        </div>
     </div>
  )
}

export default Widget