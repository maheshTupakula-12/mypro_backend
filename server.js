const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 8080;

app.use(cors())

app.get('/',(req,res)=>{
    return res.end("welcome")
})



mongoose.connect(process.env.connection_string)

const patient = require('./routes/patient_router')
const doctor = require('./routes/doctor_router')

app.use("/doctor",doctor)
app.use("/patient",patient)

app.listen(PORT,()=>{
    console.log(`connected to server running on port:${PORT}`)
})