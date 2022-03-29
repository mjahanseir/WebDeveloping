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
backend.get("/music", (req, res) => {
    Album.find({}, (err, albums) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }
        if (!Album.length) {
            return res.status(404).json({ success: false, error: "No albums found" });
        }
        return res.status(200).json({ success: true, data: albums });
    });
});
backend.get("/music/:id", (req, res) => {
    Album.findById(req.params.id, (err, albums) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }
        if (!Album.length) {
            return res.status(404).json({ success: false, error: "No albums found" });
        }
        return res.status(200).json({ success: true, data: albums });
    });
});
backend.post("/music", (req, res) => {
    const body = req.body;
    if (!body) {
        return res
            .status(400)
            .json({ success: false, error: "You must specify album information" });
    }
    const album = new Album(body);
    if (!album) {
        return res
            .status(400)
            .json({ success: false, error: "Album creation failed." });
    }
    album
        .save()
        .then(() => {
            return res
                .status(201)
                .json({ success: true, id: album._id, message: "Album created." });
        })
        .catch((error) => {
            return res.status(400).json({ error, message: "Album not created" });
        });
});
backend.listen(3010, () => {
    console.log("server started");
});
