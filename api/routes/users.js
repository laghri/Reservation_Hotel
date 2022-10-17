import express, { Router } from "express";
import { deleteUsers, getAllUsers, getUsers, updateUsers } from "../controllers/user.js";
import { verifyAdmin, verifyToken,verifyUser } from "../utiles/verifyTkon.js";
const router =express.Router()

// router.get("/checkauthentication",verifyToken, (req,res,next)=>{
//     res.send("hello user you are authen")
// });


// router.get("/checkuser/:id",verifyUser, (req,res,next)=>{
//     res.send("hello user ,you are logged in and you can delete your account")
// });
// router.get("/checkAdmin/:id",verifyAdmin, (req,res,next)=>{
//     res.send("hello admin ,you are logged in and you can delete all account")
// });
router.put("/:id" ,verifyUser ,updateUsers);

//DELETE
router.delete("/:id" , verifyUser,deleteUsers);

//GET
router.get("/:id" , verifyUser,getUsers );
//GET ALL
router.get("/" , verifyAdmin,getAllUsers);



export default router