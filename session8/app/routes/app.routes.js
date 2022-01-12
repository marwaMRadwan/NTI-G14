const router = require("express").Router()
const User = require("../controller/app.controller")

router.get("/", User.showAll)
router.get("/add", User.addUser)

router.get("/addPost", User.addUserPost)
router.post("/addPost", User.addUserLogic)

router.get("/edit/:id", User.editUser)
router.get("/delete/:id", User.deleteUser)
router.get("/single/:id", User.singleUser)
module.exports = router
