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

const authIsMale = require("../middleware/isMale")
router.post("/setMalStatus",auth, authIsMale, async(req,res)=>{
    res.send("hello")
})

module.exports = router