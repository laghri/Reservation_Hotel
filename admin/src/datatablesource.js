export const userColums =[
    {field :"id" ,headerName:"ID",width:70,},
    {field:"user",headerName:"User" ,width:230,renderCell :(params)=>{
        return (
            <div className="cellWithImg">
                <img  src={params.row.img || "https://www.lippertmusic.com/wp-content/uploads/2017/08/no_photo_available-male.jpg"}  alt="avatar"  className="CellImg"/>
                {params.row.username}
            </div>
        )
    }},
    {field:"email" ,headerName:"Email",width:230},
    {field:"country" ,headerName:"Country",width:100},
    {field:"city" ,headerName:"City",width:100},
    {field:"phone" ,headerName:"Phone",width:130},
    // {field:"status" ,headerName:"Status",width:160,renderCell :(params)=>{
    //     return (
    //         <div className={`celWithStatus ${params.row.status}`}>
    //                 {params.row.status}
    //         </div>
    //     )
    // }},

]
export const hotelColums=[
    {field :"_id" ,headerName:"ID",width:250},
    {field :"name" ,headerName:"Name",width:100},
    {field :"type" ,headerName:"Type",width:100},
    {field :"title" ,headerName:"Title",width:100},
    {field :"city" ,headerName:"City",width:100}
]

export const roomColums=[
    {field :"_id" ,headerName:"ID",width:250},
    {field :"title" ,headerName:"Title",width:230},
    {field :"desc" ,headerName:"Description",width:100},
    {field :"price" ,headerName:"Price",width:100},
    {field :"maxPeople" ,headerName:"Max People",width:100}
]

// export const userRows =[

//    {
//     id:1,
//     username:"Ahmed",
//     img:"https://www.intelizon.com/wp-content/uploads/2019/10/users-vector-icon-png_260862-300x300.jpg",
//     status:"active",
//     email:"lgr@gmail.com",
//     age:21
//    },
//    {
//     id:2,
//     username:"Ahmed",
//     img:"https://www.intelizon.com/wp-content/uploads/2019/10/users-vector-icon-png_260862-300x300.jpg",
//     status:"pending",
//     email:"lgr@gmail.com",
//     age:21
//    },
//    {
//     id:3,
//     username:"Ahmed",
//     img:"https://www.intelizon.com/wp-content/uploads/2019/10/users-vector-icon-png_260862-300x300.jpg",
//     status:"passive",
//     email:"lgr@gmail.com",
//     age:21
//    },
//    {
//     id:4,
//     username:"Ahmed",
//     img:"https://www.intelizon.com/wp-content/uploads/2019/10/users-vector-icon-png_260862-300x300.jpg",
//     status:"active",
//     email:"lgr@gmail.com",
//     age:21
//    },
//    {
//     id:5,
//     username:"Ahmed",
//     img:"https://www.intelizon.com/wp-content/uploads/2019/10/users-vector-icon-png_260862-300x300.jpg",
//     status:"active",
//     email:"lgr@gmail.com",
//     age:21
//    },
//    {
//     id:6,
//     username:"Ahmed",
//     img:"https://www.intelizon.com/wp-content/uploads/2019/10/users-vector-icon-png_260862-300x300.jpg",
//     status:"pending",
//     email:"lgr@gmail.com",
//     age:21
//    },

// ]