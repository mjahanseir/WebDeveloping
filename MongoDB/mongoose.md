# mongoDB setup
<hr>

###  CREATE A CONNECTION TO THE MONGO DB

        mongoose.connect("mongodb://192.168.75.128
                                (or localhost):27017/movie",
                                {useNewUrlParser:true})
        server.use(bodyParser.json());

### DEFINE SCHEMA OBJECT CORRESPONDING TO DB COLLECTION
        var movieSchema= new mongoose.Schema({
            title:{type: String, required:false},
            year: {type: Number, required:false},
            imdb: {type: String, required:false},
            type: {type: String, required:false}
        });
### CREATE MODEL OBJECT BASED ON THE ABOVE SCHEMA OBJECT
        var Movie= mongoose.model("Movie" , movieSchema);