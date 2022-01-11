const express = require("express")
const hbs = require('hbs')
const path = require("path")
const app = express()

const publicDir = path.join(__dirname, "public")
const viewsDir = path.join(__dirname, "frontEnd/views")
const layOutsDir = path.join(__dirname, "frontEnd/layouts")

app.use( express.static(publicDir) )
app.set('view engine', 'hbs')
app.set('views', viewsDir)
hbs.registerPartials(layOutsDir)

app.get("/", (req, res)=>{
    res.render('home', {name:"marwa"})
})
app.get("/about", (req, res)=>{
    res.render('about')
})

app.listen(3000, ()=>console.log("server on http://localhost:3000"))
