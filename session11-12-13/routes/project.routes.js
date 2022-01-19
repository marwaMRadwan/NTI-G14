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
router.get("/myPro", auth,async(req,res)=>{
    try{
        let pros = await projectModel.find({userId: req.user._id})
        res.send(pros)
    }
    catch(e){
        res.send(e)
    }
})
router.get('/myVpro', auth, async(req,res)=>{
    await req.user.populate("myProjects")
    res.send(req.user.myProjects)
})
module.exports= router

