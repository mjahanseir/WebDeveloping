const express=require('express'),
    backend= express(),
    bodyParser= require("body-parser"),
    mongoose=require('mongoose');

const db= "mongodb://localhost:27017/music";
mongoose.connect(db);
backend.use('express.json()');

const musicSchema= new mongoose.Schema({
    album:{type:string , required:false},
    artist:{type:string , required:false},
    year:{type:number , required:false},
    artwork:{type:string , required:false},
})
const Album= mongoose.model("Album", musicSchema)


backend.get('/',(req,res)=>{
    res.redirect("/music")
})

backend.get('/music',(req,res)=>{
    Album.find({}, (err,album)=>{
        if(err){return res.status(400).json({succes:false , error: err}) }
        if(!album){ return res.status(404).jason({succes:false, error: "Album not found"}) }
        return res.status(200).jason({succes:true, data:album})
    });
})
backend.get('/music/:id' , function(req, res){
    Album.findById(req.params.id, (err,album)=>{
        if(err){return res.status(400).json({success:false , error:err})}
        if(!album){return res.status(404).json({success:false , error:"Album not found"})}
        return res.status(200).json({success:true , data:album})
    });
});

backend.post('/music/:id' , function(req, res){
    const  body= req.body;
    if(!body){return res.status(400).json({success:false , error:"specify info"})}

    const album = new Album(body);
    if(!album){return res.status(400).json({success:false , error:"creation failed"})}


    album.save().then(()=>{return res.status(201) .json({success:true, id: album._id,message:"Album created" })})
        .catch(error=>{return res.status(400).json({success:false , error:"Album not created"})})
});

backend.put('/music/:id' , function(req, res) {
    const body = req.body;
    if (!body) {
        return res.status(400).json({success: false, error: "specify info"})
    }

    Album.findOne({_id: req.params.id}, (err, album) => {
        if (err) { return res.status(400).json({success: false, error: err})}
        if (!Album) { return res.status(400).json({success: false, error: "Album not found"})}

        album.title=body.title;
        album.artist=body.artist;
        album.year=body.year;
        album.artwork=body.artwork;

        album.save().then(()=>{return res.status(200).jso({success:true, id:album._id, message:"success"})})
            .catch((error)=> {return res.status(404).json({error, message:"fail"})})
    })
})


backend.delete('/music/:id' , function(req, res) {
    Album.findOneAndDelete({_id: req.params.id}, (err, album) => {
        if (err) { return res.status(400).json({success: false, error: err})}
        if (!Album) { return res.status(400).json({success: false, error: "Album not found"})}
        return res.status(200).json({success:true, data:album})
    })
})




backend.listen(3010,()=> {console.log("serverStarted")})
