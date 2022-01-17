const router = require('express').Router()
const userController = require("../app/controller/user.controller")
router.post("/register", userController.addUser)
module.exports = router