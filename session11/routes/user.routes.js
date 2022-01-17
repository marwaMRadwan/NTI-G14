const router = require('express').Router()
const userController = require("../app/controller/user.controller")
const userModel = require("../models/user.model")
router.post("/register", async(req, res)=>{
    try{
        let user = new userModel(req.body)
        await user.save()
        res.send(user)
    }
    catch(e){
        res.send(e)
    }
})


module.exports = router