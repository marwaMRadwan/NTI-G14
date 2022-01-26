const express = require("express")
const app = express()
const cors = require('cors')

require("dotenv").config()
require("../models/dbconnection/dbconnection")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const userRoutes = require("../routes/user.routes")
const projectRoutes = require("../routes/project.routes")

app.use("/api/user",userRoutes)
app.use('/api/project', projectRoutes)
const path = require('path')
app.get('/files/:ext/:imgPath', async(req,res)=>{
    let filePath= `../${req.params.ext}/${req.params.imgPath}`
    res.sendFile(path.join(__dirname, filePath))
})
module.exports = app