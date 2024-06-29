const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the patient schema 
const patientSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  gmail:{
    type:String,
    required:true
  }
});

// Create and export the User model
const User = mongoose.model('patient', patientSchema);
module.exports = User;
