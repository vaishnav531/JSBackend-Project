//require("dotenv").config({path: "./env"})

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({
    path: "./env"
});


connectDB();


/* Approach 1
import express from 'express';
//iife
( async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) 
       app.on("error", (error)=>{
            console.log("ERROR: ", error);
            throw error;
       })

       app.listen(process.env.PORT, () => {
            console.log(`App listening on port ${process.env.PORT}`);
            
       })

    } catch (error) {
        console.error("ERROR: ", error)
        throw error;
    }
})()
*/