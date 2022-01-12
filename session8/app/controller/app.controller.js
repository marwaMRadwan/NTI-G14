const fs = require("fs")
const ValiadtorController= require("./validator.controller")
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
        const user = {name:"", email:"", age:"", address:""}
        res.render("addPost", {pageTitle:"add new user(post)", user, errors:{}})
    }
    static addUserLogic = (req,res)=>{
        let user = req.body
        let errors ={}
        //"" 0 +> false     12+=> true
        if(!ValiadtorController.isEmptyString(user.name)) 
            errors.name="name is required"
        if(!ValiadtorController.isValidEmail(user.email)) 
            errors.email="enter a valid mail"
        if(Object.keys(errors).length>0) 
            return res.render('addPost', {
                pageTitle:"add new user",
                errors,
                user
            })
        const data = readFromJSON()
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
        let isNotFound = false
        const id = req.params.id
        const data = readFromJSON()
        const userIndex = this.searchUserByID(id, data)
        if(userIndex==-1) isNotFound=true
        res.render("single", {
            pageTitle:"User Details", 
            user:data[userIndex], 
            isNotFound
        })
    }

    static editUser = (req,res)=>{
        let isNotFound = false
        const id = req.params.id
        const data = readFromJSON()
        const userIndex = this.searchUserByID(id, data)
        if(userIndex==-1) isNotFound=true
        res.render("edit", {
            pageTitle:"Edit User Details", 
            user:data[userIndex], 
            isNotFound
        })
//{name:"a"} user = {...x, id:1} {name:a, id:1}
    }

    static deleteUser = (req,res)=>{
        const id = req.params.id
        const data = readFromJSON()
        const userIndex = this.searchUserByID(id, data)
        if(userIndex !=-1){
            data.splice(userIndex, 1 )
            writeDataToJSON(data)
            res.redirect("/")    
        }
        else res.redirect('/err')
    }
}
module.exports = User