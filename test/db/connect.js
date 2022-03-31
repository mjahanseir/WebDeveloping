mongoose=require('mongoose');

const db= "mongodb://localhost:27017/music";
mongoose
    .connect(db)
    .then(() => {
        console.log("Batabase connection  successful.");
    })
    .catch((e) => {
        console.error("connection error", e.message);
    });

const dbase = mongoose.connection;

module.exports = dbase;
