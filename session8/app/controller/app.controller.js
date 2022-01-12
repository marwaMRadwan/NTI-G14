const fs = require("fs")
const readFromJSON = () =>{
    let data
    try{
        data = JSON.parse(fs.readFileSync('./models/data.json'))
        if(!Array.isArray(data)) throw new Error()
    }
    catch(e){
        data = []
    }
    return data
}
const writeDataToJSON = (data) =>{
    try{
        fs.writeFileSync("./models/data.json", JSON.stringify(data))
    }
    catch(e){
        console.log(chalk.red(e.message))
    }
}
class User{
    static showAll = (req, res) => {
        res.render("all", {pageTitle: "All Users"})
    }
    //get method
    static addUser = (req, res)=>{
       if(Object.keys(req.query).length != 0) {
            const data = readFromJSON()
            data.push(req.query) 
            writeDataToJSON(data)
            res.redirect("/")
        }
        res.render("add", {pageTitle:"Add New User"})
    }
    //post method
    static addUserPost = (req, res)=>{
        res.render("addPost", {pageTitle:"add new user(post)"})
    }
    static addUserLogic = (req,res)=>{
        const data = readFromJSON()
        data.push(req.body) 
        writeDataToJSON(data)
        res.redirect("/")
    }
    static editUser = (req,res)=>{
        res.render("edit", {pageTitle:"Edit User"})
    }
    static deleteUser = (req,res)=>{
        res.send("delete")
    }
    static singleUser = (req,res)=>{
        res.render("single", {pageTitle:"User Details"})
    }
}
module.exports = User