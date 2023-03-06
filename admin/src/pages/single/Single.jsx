import React from 'react'
import './single.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from '../../components/chart/Chart'
import List from "../../components/table/Table"
const Single = () => {
  return (
    <div className='single'>
              <Sidebar />
              <div className="singleContainer">
                  <Navbar />
                  <div className="top">
                    <div className="left">
                      <div className="editButton">Edit</div>
                       <h1 className="title">Information</h1>
                       <div className="item">
                         <img src="https://www.intelizon.com/wp-content/uploads/2019/10/users-vector-icon-png_260862-300x300.jpg" alt="" className='itemImg' />
                         <div className="details">
                             <h1 className="itemTitle">Ahmed LGR</h1>
                             <div className="detailItem">
                                 <span className="itemkey">Email:</span>
                                 <span className="itemValue">lgr@gmail.com</span>
                             </div>
                             <div className="detailItem">
                                 <span className="itemkey">PhOne:</span>
                                 <span className="itemValue">068237933789</span>
                             </div>
                             <div className="detailItem">
                                 <span className="itemkey">Address:</span>
                                 <span className="itemValue">fesvMaroc rue 12</span>
                             </div>
                             <div className="detailItem">
                                 <span className="itemkey">Coutry:</span>
                                 <span className="itemValue">Maroc</span>
                             </div>
                         </div>
                       </div>
                    </div>
                    <div className="right">
                      <Chart  aspect={3/1} title={"User Spending (last 6 Months)"}/>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="title">Last Transactions</div>
                     <List />
                  </div>
              </div>
    </div>
  )
}

export default Single