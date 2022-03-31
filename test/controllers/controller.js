const Album = require("../db/models/model");

getAllMusic = async (req, res) => {
    Album.find({}, function (err, albums) {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }

        if (!albums.length) {
            return res.status(404).json({ success: false, error: "No albums found" });
        }

        return res.status(200).json({ success: true, data: albums });
    });
};

getMusicByID = async (req, res) => {
    Album.findById(req.params.id, function (err, album) {
        if (err) {
            return res.status(400).json({success: false, error: err});
        }
        if (!album) {
            return res
                .status(404)
                .json({success: false, error: "Album not found."});
        }
        return res.status(200).json({success: true, data: album});
    });
}
createAlbum =  function(req, res){
    const  body= req.body;
    if(!body){return res.status(400).json({success:false , error:"specify info"})}

    const album = new Album(body);
    if(!album){return res.status(400).json({success:false , error:"creation failed"})}


    album.save().then(()=>{return res.status(201) .json({success:true, id: album._id,message:"Album created" })})
        .catch(error=>{return res.status(400).json({success:false , error:"Album not created"})})
};
updateAlbum = async (req, res) =>{
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
}


deleteAlbum = async (req, res)=> {
    Album.findOneAndDelete({_id: req.params.id}, (err, album) => {
        if (err) { return res.status(400).json({success: false, error: err})}
        if (!Album) { return res.status(400).json({success: false, error: "Album not found"})}
        return res.status(200).json({success:true, data:album})
    })
}
module.exports = {
    getAllMusic,
    getMusicByID,
    createAlbum,
    updateAlbum,
    deleteAlbum,
}