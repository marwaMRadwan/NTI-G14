const router = require('express').Router()
const userController = require("../app/controller/user.controller")
router.get("/all", (req,res)=> res.send("hello"))
module.exports = router