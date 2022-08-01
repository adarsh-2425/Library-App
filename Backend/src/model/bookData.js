const mongoose = require('mongoose');
const url = `mongodb+srv://admin:mongo@librarycluster.dbfgaja.mongodb.net/LibraryDB?retryWrites=true&w=majority`;
const connectionParams={
    useNewUrlParser: true,
    
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the Book atlas database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })
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