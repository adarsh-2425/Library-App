const express = require('express');
const BookData = require('./src/model/bookData');
const cors = require('cors');
var bodyparser=require('body-parser');
var app = new express();
app.use(cors());
app.use(bodyparser.json());

app.get('/books',function(req,res){

    // res.header is for development mode. no need in live application
    res.header("Access-Control-Allow-Origin","*") 
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTIONS');
    BookData.find()
                .then(function(books){
                    res.send(books);
                });
});

app.listen(3000, function(){
    console.log('listening to port 3000');
});