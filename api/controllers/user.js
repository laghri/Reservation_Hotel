import Users from "../models/Users.js";


export const updateUsers =async (req,res,next) =>{

    try {
        const updateUsers =await Users.findByIdAndUpdate(req.params.id ,
            { $set :req.body},
            {new: true}
            
            )
        res.status(200).json(updateUsers)
    } catch (error) {
        // res.status(500).json(err)
      next(error);
    }
}

export const deleteUsers =async (req,res,next) =>{
try {
    const updateUsers =await Users.findByIdAndDelete(req.params.id ,
        );
    res.status(200).json("Users has been deleted")
} catch (error) {
    // res.status(500).json(err)
     next(error)
}

}

export const getUsers =async (req,res,next) =>{
    try {
        const Users =await Users.findByIdAndDelete(req.params.id ,
            );
        res.status(200).json(Users)
    } catch (error) {
        // res.status(500).json(err)
        
        next(error)
    }
}

export const getAllUsers =async (req,res,next) =>{
    try {
        const Userss =await Users.find();
        res.status(200).json(Userss)
    } catch (error) {
        // res.status(500).json(err)
        // console.log("errrr")
        next(error)
    }
}