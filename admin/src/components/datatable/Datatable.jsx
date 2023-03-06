import React, { useState } from 'react'
import './datatable.scss'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {hotelColums, roomColums, userColums ,userRows} from '../../../src/datatablesource.js';
import { Link, useLocation } from 'react-router-dom';
import useFetch from '../../hook/useFetch';
import { useEffect } from 'react';
import axios from 'axios';

  
const Datatable = () => {
  const location=useLocation()
  const path=location.pathname.split("/")[1]
const [list,setList] =useState([])

 const {data,loading,error} =useFetch(`/${path}`)
useEffect(()=>{
  setList(data)
},[data])
  const Delete =async(id)=>{
    try {
      <popupSup />
     await axios.delete(`/${path}/${id}`)   
    } catch (error) {
      
    }
          setList(list.filter(item=>item._id !==id));
  } 
    const actionColumn =[
        {field :"action" ,headerName:"Action" , width:200,renderCell :(params)=>(
              <div className='cellAction'>
                  <Link  to="/users/test" style={{textDecoration:"none"}} >
                   <div className='viewButton'>View</div>
                   </Link>
                   <div className='DeleteButton' onClick={()=>Delete(params.row._id)}>Delete</div>
              </div>
        )}
    ]
  return (
    <div className='datatable'>
      <div className="datatableTitle">
         {path}
        
        
        <Link  to={`/${path}/New`} style={{textDecoration:"none"}}    className="link">
             Add New
        </Link>
      </div>

<DataGrid
className='datagrid'
        rows={list}
        columns={path==="users"?userColums.concat(actionColumn):path==="hotels"?hotelColums.concat(actionColumn):path==="rooms"?roomColums.concat(actionColumn):""}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={row=>row._id}
      />
    </div>
  )
}

export default Datatable
