
const musicSchema= new mongoose.Schema({
    album:{type:string , required:false},
    artist:{type:string , required:false},
    year:{type:number , required:false},
    artwork:{type:string , required:false},
})
const Album= mongoose.model("Album", musicSchema)

module.exports = Album;
