
const user = require('../models/patient')
const router = require('express').Router();
router.route("/").get((req,res)=>{
    return res.end("welcome patient")
})

module.exports = router;