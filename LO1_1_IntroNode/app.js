const express= require("express");
const app= express();

app.get('/', function (req,res){
    res.send("This is the home page!!")
})
app.listen(3010, function (){
    console.log("server started....")
})