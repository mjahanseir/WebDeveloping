const express = require('express');
const backend = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


backend.listen(3010, ()=>{
    console.log("server started")
})