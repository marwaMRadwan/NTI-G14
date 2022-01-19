const router = require("express").Router()
const req = require("express/lib/request")
const auth = require("../middleware/auth")
const projectModel = require("../models/project.model")
router.post("/add",auth, async(req,res)=>{
    try{
        const pro = new projectModel({
            userId:req.user._id,
            ...req.body 
        })
        await pro.save()
        res.send(pro)
    }
    catch(e){
        res.send(e.message)
    }
})

module.exports= router

