const mongoose= require('mongoose');
console.log(process.env.MONGO_URI);
const connectDb=async()=>{
    try{
        
        await mongoose.connect(process.env.MONGO_URL)
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}
module.exports = connectDb;