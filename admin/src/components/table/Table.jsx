import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './table.scss'
const List = () => {
     
    const rows =[
        {
            id:114,
            product:"Acer Nitro s",
            img:"https://m.media-amazon.com/images/I/819XYUimTuL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
            customer :"ahmed lgr",
            date:"1march",
            amount:785,
            method:"cash on delevery ",
            status:"Approved"

        },
        {
            id:114,
            product:"Acer Nitro s",
            img:"https://m.media-amazon.com/images/I/819XYUimTuL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
            customer :"ahmed lgr",
            date:"1march",
            amount:785,
            method:"online ",
            status:"Approved"

        },
        {
            id:114,
            product:"Acer Nitro s",
            img:"https://m.media-amazon.com/images/I/819XYUimTuL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
            customer :"ahmed lgr",
            date:"1march",
            amount:785,
            method:"cash on delevery ",
            status:"Approved"

        },
        {
            id:114,
            product:"Acer Nitro s",
            img:"https://m.media-amazon.com/images/I/819XYUimTuL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
            customer :"ahmed lgr",
            date:"1march",
            amount:785,
            method:"cash on delevery ",
            status:"Approved"

        },
        {
            id:114,
            product:"Acer Nitro s",
            img:"https://m.media-amazon.com/images/I/819XYUimTuL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
            customer :"ahmed lgr",
            date:"1march",
            amount:785,
            method:"cash on delevery ",
            status:"Pending"

        },
        {
            id:114,
            product:"Acer Nitro s",
            img:"https://m.media-amazon.com/images/I/819XYUimTuL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
            customer :"ahmed lgr",
            date:"1march",
            amount:785,
            method:"cash on delevery ",
            status:"Approved"

        },
        {
            id:114,
            product:"Acer Nitro s",
            img:"https://m.media-amazon.com/images/I/819XYUimTuL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
            customer :"ahmed lgr",
            date:"1march",
            amount:785,
            method:"cash on delevery ",
            status:"Pending"

        },
    ]
    
  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table" >
      <TableHead>
        <TableRow >
          <TableCell className="tableCell">Tracking Id</TableCell>
          <TableCell className="tableCell">product</TableCell>
          <TableCell className="tableCell">Customer</TableCell>
          <TableCell className="tableCell"> Date</TableCell>
          <TableCell className="tableCell">Amount</TableCell>
          <TableCell className="tableCell">Payment method</TableCell>
          <TableCell className="tableCell">status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow className='tableRow'
            key={row.id}>
            <TableCell >
              {row.id}
            </TableCell>
            <TableCell className="tableCell" >
                <div className="Cellwraper">
                     <img src={row.img} alt="" />
                    {row.product}
                </div>
            </TableCell>
            <TableCell className="tableCell"  >{row.customer}</TableCell>
            <TableCell className="tableCell" >{row.date}</TableCell>
            <TableCell  className="tableCell" >{row.amount}</TableCell>
            <TableCell  className="tableCell" >{row.method}</TableCell>
            <TableCell  className="tableCell"  >
                <span className={`status ${row.status}`}>{row.status}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default List