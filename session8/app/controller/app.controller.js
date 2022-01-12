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
    static searchUserByID = (id, data)=>{
        let userIndex = data.findIndex(el=> el.id == id)
        return userIndex
    }
    static singleUser = (req,res) => {
        const id = req.params.id
        const data = readFromJSON()
        const userIndex = this.searchUserByID(id, data)
        res.render("single", {pageTitle:"User Details", user:data[userIndex]})
    }

    static editUser = (req,res)=>{
        const id = req.params.id
        const data = readFromJSON()
        const userIndex = this.searchUserByID(id, data)
        res.render("edit", {pageTitle:"Edit user", user:data[userIndex]})
    }

    static deleteUser = (req,res)=>{
        const id = req.params.id
        const data = readFromJSON()
        const userIndex = this.searchUserByID(id, data)
        if(userIndex !=-1){
            data.splice(userIndex, 1)
            writeDataToJSON(data)
            res.redirect("/")    
        }
    }
}
module.exports = User