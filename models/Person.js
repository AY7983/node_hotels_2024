const mongoose = require('mongoose');

// Define the Person schema for hotel
const personSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true   //it is used when a person is going to save his record then it gives error.Itmandatory 
  },
  age:{
    type: Number,
  },
  work: {
    type: String,
    enum: ('chef','waiter','manager'),  //it shows that bs inme se hi value honi chaiye.
    required: true  //mandatory field
  },
  mobile: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true       //personal and unique emailid.
  },
  address: {
    type: String
  },
  salary: {
    type: Number,
    required: true  
  }
});

//Create Person Model
const Person = mongoose.model('Person',personSchema);
module.exports = Person;