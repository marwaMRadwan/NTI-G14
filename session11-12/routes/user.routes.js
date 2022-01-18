const router = require('express').Router()
const userController = require("../app/controller/user.controller")

router.post("/register", userController.addUser)
router.get("/all", userController.showAll)
router.get("/all/:id", userController.showSingle)
router.delete("/all", userController.deleteAll)
router.delete("/all/:id", userController.deleteSingle)


module.exports = router