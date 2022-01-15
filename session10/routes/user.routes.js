const router = require('express').Router()
const userController = require("../controller/user.controller")
//add user then catch
router.post('/addUser', userController.addUser)
//add user async
router.post('/add', userController.add)
//show all
router.get('/all', userController.showAll)
//single user
router.get("/all/:id", userController.single)
//delete one
    
//edit 

module.exports = router