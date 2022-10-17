import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
export const createHotel =async (req,res,next) =>{

    const newHotel =new Hotel(req.body)
    const failed=true;
 //    if(failed) return next(createErreur(401,"you are not authenticated"));
 
     try {
         const saveHotel =await newHotel.save()
         res.status(200).json(saveHotel)
     } catch (error) {
         // res.status(500).json(err)
         // console.log("errrr")
         next(error)
     }
}

export const updateHotel =async (req,res,next) =>{

    try {
        const updateHotel =await Hotel.findByIdAndUpdate(req.params.id ,
            { $set :req.body},
            {new: true}
            
            )
        res.status(200).json(updateHotel)
    } catch (error) {
        // res.status(500).json(err)
      next(error);
    }
}

export const deleteHotel =async (req,res,next) =>{
try {
    const updateHotel =await Hotel.findByIdAndDelete(req.params.id ,
        );
    res.status(200).json("hotel has been deleted")
} catch (error) {
    // res.status(500).json(err)
     next(error)
}

}

export const getHotel =async (req,res,next) =>{
    try {
        const hotel =await Hotel.findById(req.params.id )
        res.status(200).json(hotel)
    } catch (error) {
        // res.status(500).json(err)
        
        next(error)
    }
}

export const getHotels =async (req,res,next) =>{
    const {min,max,...others } =req.query;
    try {
        const hotels =await Hotel.find(req.query
            ).limit(req.query.limit);
        res.status(200).json(hotels)
    } catch (error) {
        // res.status(500).json(err)
        // console.log("errrr")
        next(error)
    }
}

export const countByCity =async (req,res,next) =>{
    const cities =req.query.cities.split(",");
    try {
        const list =await Promise.all(cities.map(city =>{
            return Hotel.countDocuments({City:city})
        }))
        res.status(200).json(list)
    } catch (error) {
        next(error)
    }
}



export const countByType =async (req,res,next) =>{
  
    try {
        const hotelCount = await Hotel.countDocuments({type:"hotel"});
        const appartementCount =  await Hotel.countDocuments({type:"apartment"});
        const resortsCount =await Hotel.countDocuments({type:"resort"});
        const villaCount =await Hotel.countDocuments({type:"villa"});
        const cabinCount =await Hotel.countDocuments({type:"cabin"});


        res.status(200).json([
            {type:"hotel",count:hotelCount},
            {type:"apartment",count:appartementCount},
            {type:"resort",count:resortsCount},
            {type:"villa",count:villaCount},
            {type:"cabin",count:cabinCount},
        ]);

    } catch (error) {
        next(error)
    }
}


export const getHotelRooms =async (req,res,next)=> {
    try {
        const hotel= await Hotel.findById(req.params.id);
   
        const list = await   Promise.all(hotel.rooms.map(room=>{
            return Room.findById(room)
        }));
        res.status(200).json(list);
    } catch (error) {
         next(error);
    }
}