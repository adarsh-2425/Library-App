const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/LibraryDB');
const Schema = mongoose.Schema;

var NewBookSchema = new Schema({
    bookId : Number,
    bookName : String,
    genre : String,
    authorName : String,
    imageUrl : String
});

var Bookdata = mongoose.model('book', NewBookSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Bookdata;