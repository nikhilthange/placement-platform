require('dotenv').config();

const connectDb = require('./config/db');
const express = require('express');
const cors = require('cors');
const authRoutes = require("./routes/authRoutes");



const app=express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
connectDb();

app.get('/',(req,res)=>{
    res.json({
        message:'Backend is working'
    });
})
module.exports=app;