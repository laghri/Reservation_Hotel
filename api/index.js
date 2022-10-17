import  express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser";
const app=express()

dotenv.config()
const connect =async ()=>{
try {
    await mongoose.connect(process.env.MONGO);
    console.log('connect to mongodb')
  } catch (error) {
     console.log("hhhhahhh err")
  }};

// mongoose.connection.on("disconnected" ,()=>{
//     console.log("mongodb disconnected")
// });
// mongoose.connection.on("connected" ,()=>{
//     console.log("mongodb connected")
// });
// app.get("/",(req,res)=>{
//   res.send("hello firest request")
// })

//midlewares
app.use(cookieParser());
app.use(express.json())
app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/rooms",roomsRoute);

app.use((err,req,res,next)=>{
  const errorStatus =err.status || 500
  const errorMessage =err.message || "something went wrong !"
    return res.status(errorStatus).json({
      success:false,
      status:errorStatus,
      message:errorMessage,
      stack:err.stack
    })
})

app.listen(8800, ()=>{
    connect()
    console.log("connected to backend!")
})