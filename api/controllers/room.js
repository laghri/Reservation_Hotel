import Room from "../models/Room.js"
import Hotel from "../models/Hotel.js"
import { createErreur } from "../utiles/erreur.js"
import room from "../models/Room.js";



export const createRoom =async (req,res,next)=>{
    const hoteId =req.params.hotelid;
    const newRoom =new Room(req.body)

    try {
        const savedRoom =await newRoom.save()
        try {
             await Hotel.findByIdAndUpdate(hoteId,{
                $push:{ rooms :savedRoom._id}
             })
        } catch (error) {
             next(error)
        }
        res.status(200).json(savedRoom);
    } catch (error) {
        next(error);
    }
};


export const updateRoom  =async (req,res,next)=>{
    try {
        const updateRoom =await room.findByIdAndUpdate(
            req.params.id,
            {
                $set :req.body
            },
            {new :true}
        );
        res.status(200).json(updateRoom);
    } catch (error) {
        next(error)
    }
}

export const deleteRoom =async (req,res,next)=>{
    const hotelId=req.params.hotelid;
    try {
        await room.findByIdAndDelete(req.params.id);
        try {
             await Hotel.findByIdAndUpdate(hotelId,{
                $pull:{rooms:req.params.id}
             })
        } catch (error) {
            next(error)
        }
        res.status(200).json("Room has been deleted")
    
    } catch (error) {
        next(error)
    }
};
export const  getRoom =async (req,res,next)=>{
    try {
         const Room= await room.findById(req.params.id);
         res.status(200).json(Room);
    } catch (error) {
        next(error)
    }
}

export const getRooms = async (req,res,next)=>{
    try {
        const Rooms = await room.find();
        res.status(200).json(Rooms);
    } catch (error) {
        next(error)
    }
}