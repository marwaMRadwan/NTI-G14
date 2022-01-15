const router = require('express').Router()
const userController = require("../controller/user.controller")
router.post('/addUser', userController.addUser)
router.post('/add', userController.add)
module.exports = router