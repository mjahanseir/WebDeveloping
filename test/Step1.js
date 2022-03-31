const express = require('express');
const server = express();

const bodyParser =require('body-parser');
const mongoose =require('mongoose');

// CREATE A CONNECTION TO THE MONGO DB
//At home   localhost:27017/movie
mongoose.connect("mongodb://192.168.75.128:27017/movie",{useNewUrlParser:true})

server.use(bodyParser.json());

// DEFINE SCHEMA OBJECT CORRESPONDING TO DB COLLECTOIN
var movieSchema= new mongoose.Schema({
    title:{type: String, required:false},
    year:{type: Number, required:false},
    imdb:{type: String, required:false},
    type:{type: String, required:false}
});

// CREATE MODEL OBJECT BASED ON THE ABOVE SCHEMA OBJECT
var Movie= mongoose.model("Movie" , movieSchema);



//CREATING ROUTE

//ROUTE FOR OUR BACKEND

server.get('/', function(req,res){
    res.redirect("/movie");
})

//GET LIST ALL ROUTE

server.get('/movie', function(req,res){
    Movie.find({} , function( err , movies ){

        if(err){
            return res
                .status(400)
                .json( { success : false , error : err } );
        }

        if( !movies.length){
            return res
                .status(404)
                .json({ success : false , error : "No movies found"});
        }

        return res
            .status(200)
            .json({ success : true , data : movies});
    });

});



//set up server to listen for connection
server.listen(3010,function(){
    console.log("Server started....")
});