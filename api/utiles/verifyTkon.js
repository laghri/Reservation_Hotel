import jwt from "jsonwebtoken";
import { createErreur } from "./erreur.js";

export const verifyToken =(req, res ,next) =>{
    const token =req.cookies.access_token;
    if(!token){
        return next(createErreur(401,"you are not authenticated"));

    }
    jwt.verify(token,process.env.JWT, (err,user)=>{
        if(!user) return next(createErreur(403,"Token is not valid !"));
        req.user=user;
        next();
    })
    jwt.verify(token,process.env.jwt)
}

export const verifyUser =(req,res,next)=>{
    verifyToken(req,res,next ,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }
        else{
            if(err) return next(createErreur(403,"you are not authorized!"))
        }
    })
}

export const verifyAdmin =(req,res,next)=>{
    verifyToken(req,res,next ,()=>{
        if( req.user.isAdmin){
            next()
        }
        else{
            if(err) return next(createErreur(403,"you are not authorized!"))
        }
    })
}