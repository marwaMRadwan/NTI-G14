const router = require('express').Router()
const userController = require("../app/controller/user.controller")
const auth = require("../middleware/auth")
const adminAuth = require("../middleware/authAdmin")

router.post("/register", userController.addUser)
router.post("/login", userController.login)

router.get("/all",auth,userController.showAll)
router.get("/all/:id",auth, userController.showSingle)
router.delete("/all",auth, userController.deleteAll)
router.delete("/all/:id",auth, userController.deleteSingle)
router.get("/me", auth, userController.me)

router.post("/logout", auth, async(req,res)=>{
    try{
        req.user.tokens = req.user.tokens.filter(t=>{
            return t.token != req.token
        })
        await req.user.save()
        res.send("logged out")
    }
    catch(e){
        res.status(500).send({apiStatus:false, data:e.message})
    }

})
router.post("/logoutAll", auth, async(req,res)=>{
    try{
        req.user.tokens = []
        await req.user.save()
        res.send("logged out")
    }
    catch(e){
        res.status(500).send({apiStatus:false, data:e.message})
    }
})

const authIsMale = require("../middleware/isMale")
router.post("/setMalStatus",auth, authIsMale, async(req,res)=>{
    res.send("hello")
})

module.exports = router