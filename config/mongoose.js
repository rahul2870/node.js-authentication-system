const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/auth_db');

// p/w : BIc5jqHCowP6e6fG
mongoose.connect('mongodb+srv://2870rahul:BIc5jqHCowP6e6fG@cluster0.pzhj0yj.mongodb.net/?retryWrites=true&w=majority');


//accuire the connectiontion
const db = mongoose.connection;


//error
db.on('error', console.error.bind(console, 'error in connecting to db'));

//up and runnning
db.once('open', function () {
    console.log("successfully connected to the databasef");
});