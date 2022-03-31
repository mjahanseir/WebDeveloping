//////////     1-    setting server file  & setup mongo db connection   ///////////////
const express= require("express"),
    backend= express(),
    bodyParser= require("body-parser"),
    mongoose= require("mongoose");


///////////     2-    CREATE A CONNECTION TO THE MONGODB    ///////////////////////////
const DB ="mongodb://192.168.75.128:27017/music_app";

mongoose.connect(DB)

backend.use(express.json());


///////////     3-    Mongoose set up      //////////////////////////////////////////

/* DEFINE SCHEMA OBJECT CORRESPONDING TO DB COLLECTION
   in our table(collections) of movie we have 4 fields:
        ALBUM:STRING    ARTIST:STRING  YEAR: NUMBER   ARTWORK:STRING
   we make a connection to DB with schema       */
const  musicSchema= new mongoose.Schema({
    album:  {type: String,     required:false},
    artist: {type: String,     required:false},
    year:   {type: Number,     required:false},
    artwork:{type: String,     required:false},
});


///////////     4-     CREATE MODEL OBJECT      //////////////////////////////////////
// CREATE MODEL OBJECT BASED ON THE ABOVE SCHEMA OBJECT

const Album= mongoose.model("Album" , musicSchema);


///////////     5-     Routes      ///////////////////////////////////////////////////
// 5-1- ROUTES
// 5-2- INDEX ROUTE
// 5-3- SHOW ROUTES
// 5-4- GET ALL
// 5-5- GET ONE
// 5-6- CREATE ROUTE
// 5-7- UPDATE ROUTE
// 5-8- DELETE ROUTE



// 5-1- ROUTES
// 5-2- INDEX ROUTE
backend.get(  '/', function(req,res){
    res.redirect("/music");
})

// 5-3- SHOW ROUTES
// 5-4- GET ALL
backend.get(  '/music', function(req,res){
    Album.find({} , function( err , albums ){

        if(err) {                      //if(err) { return res.status(....).json( ..... ); }
            return res
                .status(400)
                .json( { success : false , error : err } );
        }

        if( !albums.length){         //if(err) { return res.status(....).json( ..... ); }
            return res
                .status(404)
                .json( { success : false , error : "No albums found" } );
        }

        return res                  // return res.status(....).json( ..... );
            .status(200)
            .json( { success : true , data : albums} );
    });
})

// 5-6- GET ONE
backend.get('/music/:id' , function(req, res){
    Album.findById(req.params.id, function(err, album){
        if(err){
            return res
                .status(400)
                .json( { success : false, error:err } );
        }
        if(!album){
            return res
                .status(404)
                .json( { success : false , error: "Album not found." } );
        }
        return res
            .status(200)
            .json( { success : true ,  data: album});
    })
})


// 5-5- CREATE ROUTE
backend.post('/music', function(req,res){  //for form we use post

    const body = req.body;
    if(!body){
        return res
            .status(400)
            .json(  { success: false , error: "You must specify album information"});
    }

    const album = new Album (body);

    if( !album){
        return res
            .status(400)
            .json( { success : false , error : "Album creation failed" } );
    }

    album
        .save()
        //we have 2 : then and catch for get info for save a kind of try/catch in java
        .then(()=>{
            return res
                .status(201)
                .json( {
                    success:true,
                    id: album._id,
                    message:"Alnum created."
                } )
        })
        .catch(error => {
            return res
                .status(400)
                .json( {error, message:"Album not created"});
        })
});

// 5-7- UPDATE ROUTE


// 5-8- DELETE ROUTE





//GET LIST ALL ROUTE
backend.listen(3001, function(){
    console.log("Server started successfully");

})