//npm i --g nodemon
const express= require("express")
const path = require("path")
const app = express()
const publicDir = path.join(__dirname, "public")
app.use(express.static(publicDir))
//__dirname , __filename => buildin variables
//routes
app.get("/", (req, res)=>{
    res.send("hello from index page")
})
app.get("/hi", (req, res)=>{
    res.send("hello")
})
app.get("/json", (req,res)=>{
    let user = { name: "marwa"} 
    res.send(user)
})
app.get("/test", (req,res)=>{
    // res.sendFile("index.html")
    let link = path.join(__dirname, "index.html")
    res.sendFile(link)
})
app.listen(3000) //localhost:3000 3001