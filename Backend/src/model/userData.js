const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:mongo@librarycluster.dbfgaja.mongodb.net/LibraryDB?retryWrites=true&w=majority')
.then( () => {
    console.log('Connected to the User atlas database')
  })
  .catch( (err) => console.error(err));

const Schema = mongoose.Schema;

var NewUserSchema = new Schema({
    First_Name : String,
    Last_name : String,
    email : String,
    password : String
    
});

var Userdata = mongoose.model('user', NewUserSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Userdata;