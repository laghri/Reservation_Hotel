import Users from "../models/Users.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { createErreur } from "../utiles/erreur.js";
export const register = async( req,res,next)=>{
      try {
     
        const salt =bcrypt.genSaltSync(10);
        const hash =bcrypt.hashSync(req.body.password,salt);
        const newUser =new Users({
            ...req.body,  
            password:hash,
        });
        await newUser.save();
        res.status(200).send("User has been created")

      } catch (error) {
        next(error);
      }}


      export const login = async( req,res,next)=>{
     
        try {
           const user= await Users.findOne({
            username:req.body.username
           });
           if(!user) return next(createErreur(404,"User not found"));
           const isPasswordCorrect= await bcrypt.compare(req.body.password,user.password);
           if(!isPasswordCorrect) return next(createErreur(400,"wrong password or username"));
           const token =jwt.sign({id:user._id ,isAdmin:user.isAdmin}, process.env.JWT)
           const { password, isAdmin, ...otherDetails} =user._doc;
          res.cookie("access_token",token ,{httpOnly:true ,})
           .status(200).send({details:{...otherDetails},isAdmin})
  
        } catch (error) {
          next(error);
        }
}