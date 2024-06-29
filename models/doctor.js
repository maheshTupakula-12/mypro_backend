const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    qualifications:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model("doctor",doctorSchema)