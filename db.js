//this js file is responsible for setting the connection between your node.js application and your MongoDB database using mongoose library.
const mongoose = require('mongoose');

//Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels' //Replace 'mydatabase/hotels' with your database name

//Set up MongoDB connection
mongoose.connect(mongoURL,{
  useNewUrlParser: true,
  useUnifiedTopology: true      //this is used for establing the connection with updated version of mongoose.
});

//Get the default connection
// Mongoose  maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;       //using this db we establish the bridge between mongodb and nodejs

//Define event listeners for database connection(connection,error,disconnected are the event listeners defined keyword which are unstandable by the mongoDB.)

db.on('connected', () =>{
  console.log('Connected to MongoDB server');
})
db.on('error', (err) =>{
  console.log('MongoDB connection error:',err);
})
db.on('disconnected', () =>{
  console.log('MongoDB disconnected');
})


//Abhi tk hmara database connect nhi hua isko export krke run krana pdega server file pr.
//Export the database connection
module.exports = db;   //db represents the mongoDB connection
