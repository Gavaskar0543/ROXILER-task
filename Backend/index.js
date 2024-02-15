const express = require('express');
const port = 8000;
const server = express();

server.use('/',require('./router'));

server.listen(port,(err)=>{
    if(err){
        console.log("Error in creating server",err.message);
        return;
    }
    console.log(`Server upon port:${port}`);
});