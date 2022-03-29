const express = require('express');
const backend = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



const db= "mongodb://localhost:27017/musicApp";
mongoose.connect(DB)
backend.use(express.json());

const musicSchema= new mongoose.Schema(
    {
        album:{type: String,  required:false},
        artist:{type: String,  required:false},
        year:{type: number,  required:false},
        artwork:{type: String,  required:false}
    }
)

backend.listen(3010, ()=>{
    console.log("server started")
})