const express = require("express")
const hbs = require('hbs')
const path = require("path")
const app = express()
const fs = require('fs')
const publicDir = path.join(__dirname, "public")
const viewsDir = path.join(__dirname, "frontEnd/views")
const layOutsDir = path.join(__dirname, "frontEnd/layouts")
app.use( express.static(publicDir) )
app.set('view engine', 'hbs')
app.set('views', viewsDir)
hbs.registerPartials(layOutsDir)
// app.get("/", (req, res)=>{
//     res.render('home', {name:"marwa"})
// })
// app.get("/about", (req, res)=>{
//     res.render('about')
// })
app.get("/", (req,res)=>{
    let data = { pageTitle: "Home Page"}
    data.allData = JSON.parse(fs.readFileSync("data.json"))
    // res.send(data)
    res.render('home', data)
})
//?x=5 =>query     /x =>param
app.get("/images/:id", (req,res)=>{
    // res.send(req.query) // req.params
    let data = { pageTitle: "single image Page"}
    let id = req.params.id 
    let allData = JSON.parse(fs.readFileSync("data.json"))
    data.img = allData.find(el=> el.id==id)
    if(!data.img) res.redirect('/error')
    res.render('single', data) // {pageTitle:"", img:{}}
})
app.get("/about", (req,res)=>{
    let data = { pageTitle: "About Page"}
    res.render('about', data)
})
app.get("*", (req,res)=>{
    res.render('err404', {pageTitle:"page not found"})
})
app.listen(3000, ()=>console.log("server on http://localhost:3000"))
