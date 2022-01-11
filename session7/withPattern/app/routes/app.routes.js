const router = require("express").Router()

router.get("/", (req,res)=> {
    res.render("test")
})
router.get("/me", (req,res)=> res.send("new test"))

module.exports = router
