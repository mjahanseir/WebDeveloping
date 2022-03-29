const express= require("express");
const app= express();

app.get('/', function (req,res){
    res.send("This is the home page!!")
})
app.get('/content', function (req,res){
    res.send("This is the <h1>content</h1> page!!")
})
app.get('/content:id', function (req,res){
    var myVar= req.params.id;
    res.send(" this is a message with " + myVar + " content")
})

//express running
app.listen(3010, function (){
    console.log("server started....")
})