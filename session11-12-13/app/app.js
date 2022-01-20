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

app.use("/user",userRoutes)
app.use('/project', projectRoutes)

module.exports = app