const express = require('express');
const app = express();

//root ROUTE
app.get('/', function(req,res){
    res.send("This is the home page")
});

//Other ROUTE
app.get('/content', function(req,res){
    res.send("This is the content page")
});




//another ROUTE
app.get('/content/:myparam', function(req,res){
    var myvar= req.params.myparam;
    res.send("You send " + myvar + " to the server")
});



//set up app to listen for connection
app.listen(3010,function(){
    console.log("Server started....")
});
