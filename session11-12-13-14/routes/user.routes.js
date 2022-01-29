const router = require('express').Router()
const userController = require("../app/controller/user.controller")
const auth = require("../middleware/auth")
router.post("/register", userController.addUser)
router.post("/login", userController.login)
router.get("/all",auth,userController.showAll)
router.get("/all/:id",auth, userController.showSingle)
router.delete("/all",auth, userController.deleteAll)
router.delete("/all/:id",auth, userController.deleteSingle)
router.get("/me", auth, userController.me)
router.post("/logout", auth, userController.logOut)
router.post("/logoutAll", auth, userController.logOutAll)
router.get("/activate/:otp/:id", userController.activateUser)
router.post("/activateWithLogin",auth, userController.activateUserLoggedIN)
router.get("/sendOTP", auth, userController.sendOtp)
const authIsMale = require("../middleware/isMale")
router.post("/setMalStatus",auth, authIsMale, async(req,res)=>{
    res.send("hello")
})
const upload = require("../middleware/uploadFile")
const path=require("path")
const fs = require("fs")
router.post('/profile', auth,upload.single('image'), async function (req, res) {
    fs.rename(req.file.path, `${req.file.path}${path.extname(req.file.originalname)}`, ()=>{})
    req.user.img = `${req.file.path}${path.extname(req.file.originalname)}`
    await req.user.save()
    res.send(req.user)
})
const uploadWithStorage = require("../middleware/uploadWithStorage")
router.post("/myProfile", auth,uploadWithStorage.single('image'),async(req,res)=>{
    try{
        req.user.img=req.file.path
        await req.user.save()
        res.send(req.user)
    }
    catch(e){
        res.send(e.message)
    }
})
module.exports = router