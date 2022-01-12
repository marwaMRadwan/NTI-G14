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
        const data = readFromJSON()
        const isEmpty = data.length==0
        res.render("all", {pageTitle: "All Users", data, isEmpty})
    }
    //get method
    static addUser = (req, res)=>{
       if(Object.keys(req.query).length != 0) {
            const data = readFromJSON()
            let user = req.query
            if(data.length == 0) user.id=1
            else user.id = data[data.length-1].id +1
            data.push(user) 
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
        let user = req.body
        if(data.length == 0) user.id=1
        else user.id = data[data.length-1].id +1
        data.push(user) 
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