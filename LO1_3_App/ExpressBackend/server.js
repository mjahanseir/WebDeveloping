const express = require("express"),
    backend = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

const db = "mongodb://localhost:27017/musicApp";
mongoose.connect(db);
backend.use(express.json());
const musicSchema = new mongoose.Schema({
    album: { type: String, required: false },
    artist: { type: String, required: false },
    year: { type: Number, required: false },
    artwork: { type: String, required: false },
});
const Album = mongoose.model("Album", musicSchema);
backend.get("/", (req, res) => res.redirect("/music"));

backend.listen(3010, () => {
    console.log("server started");
});
