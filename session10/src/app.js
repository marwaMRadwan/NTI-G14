const express = require("express")
const app = express()

require('../db/connection')

app.use(express.json())

app.use( require('../routes/user.routes') )

module.exports = app