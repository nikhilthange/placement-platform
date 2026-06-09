const User=require("../models/User");

const adminMiddleware= async(req,res,next)=>{
    try{
        const user=await User.findById(req.user.id);
        if(user.role!=="admin"){
            return res.status(403).json({
                message:"Access denied"
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            message:"Internal server error"
        });
    }
}
module.exports=adminMiddleware;