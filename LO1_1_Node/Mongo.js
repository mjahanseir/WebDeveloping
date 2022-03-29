const express= require("express");
const server= express();

const bodyParser= require('body-parser');
const mongoose= require('mongoose');

mongoose.connect("mongodb://localhost:27017/movie" , {useNewUrlParser:true})

server.use(bodyParser.json());

var movieSchema= new mongoose.Schema({
    title:{type:String , required: false},
    year:{type:Number , required: false},
    imdb:{type:String , required: false},
    type:{type:String , required: false},
});

var Movie= mongoose.model("Movie", movieSchema);

// ROUTE
server.get('/' , (req, res)=> res.redirect("/movie"));
server.get('/movie' , (req, res)=> {
    Movie.find({}, (err,movies)=>{
        if(err) return res.status(400).json({success:false , error:err});
        if(!movies.length) return res.status(404).json({success:false , error:"No Movies Found"});
        return res.status(200).json({access:true , date:movies});
    })
});



//set up server to listen for connection
server.listen(3010,function(){
    console.log("Server started....")
});