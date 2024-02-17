const express = require('express');
const port = 8000;
const server = express();
//database stup
const db = require('./config/Database');
//controller to seed database
const products = require('./controller/api/v1');
/**for seeding database from thirdparty URL */
//products.products_transactions();


//json body parser
server.use(express.json());
//url body parser
server.use(express.urlencoded({extended:true}));


//router middleware
server.use('/',require('./router'));

server.listen(port,(err)=>{
    if(err){
        console.log("Error in creating server",err.message);
        return;
    }
    console.log(`Server upon port:${port}`);
});