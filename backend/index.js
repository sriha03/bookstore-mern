import express, { request } from "express";
import  {PORT,mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import {Book} from './models/bookModel.js'
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app =express() ;
app.use(cors());
//middleware to parse request body
app.use(express.json());
app.use('/books',booksRoute)


// //middleware to handle cors policy
// app.use(
//     cors({
//         origin:"http://localhost:3000",
//         methods:["GET","POST","DELETE","PUT"],
//         allowedHeaders:["Content-Type"],
//     })
// )

mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log("connected to mongodb");
    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`);
    })
    
}).catch((err)=>{
    console.log(err);
})