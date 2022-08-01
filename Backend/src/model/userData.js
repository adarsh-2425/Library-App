const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/LibraryDB');
const Schema = mongoose.Schema;

var NewUserSchema = new Schema({
    First_Name : String,
    Last_name : String,
    email : String,
    password : String
    
});

var Userdata = mongoose.model('user', NewUserSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Userdata;