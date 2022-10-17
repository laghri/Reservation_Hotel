import express, { Router } from "express";
import { verifyAdmin, verifyToken,verifyUser } from "../utiles/verifyTkon.js";
import {createRoom, deleteRoom, getRoom, getRooms, updateRoom} from "../controllers/room.js"
const router =express.Router()

//creat
router.post("/:hotelid",verifyAdmin,createRoom)


router.put("/:id" ,verifyAdmin ,updateRoom);

//DELETE
router.delete("/:id/:hotelid" , verifyAdmin,deleteRoom);

//GET
router.get("/:id" ,getRoom );
//GET ALL
router.get("/" ,getRooms);


export default router