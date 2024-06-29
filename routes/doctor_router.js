const user = require('../models/doctor');
const router = require('express').Router();

router.route("/").get((req,res)=>{
    return res.end("welcome doctor")
})

router.route("/:doctor/:qualification").post(async(req,res)=>{
    const {doctor,qualification} = req.params;
    const createdRow = await user.create({
        name:doctor,qualifications:qualification
    })
    return res.json(createdRow)
})


router.route("/delete").delete(async(req,res)=>{
    await user.deleteOne({_id:"667da0ea7edc4c8819210e36"})
    res.json({message:"deleted"})
})

module.exports = router;