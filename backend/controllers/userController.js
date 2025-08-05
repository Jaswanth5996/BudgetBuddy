import User from '../models/User'

export const createUser = async(req,res) => {
    try{
        const user = await User.create(req.body)
        return res.status(201).json({success:true,data:user})
    }
    catch(error){
        return res.status(400).json({success:false,message:error.message})
    }
} 

