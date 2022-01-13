const { redirect } = require('express/lib/response')
const dbConnection = require('../../models/dbcon')
const ValiadtorController = require("./validator.controller")
class User {
    static showAll = (req, res) => {
        dbConnection((err, client, db) => {
            db.collection('data').find().toArray((error, result) => {
                if (error) return redirect('/err')
                const data = result
                const isEmpty = data.length == 0
                client.close()
                res.render("all", { pageTitle: "All Users", data, isEmpty })
            })
        })
    }
    //post method
    static addUserPost = (req, res) => {
        const user = { name: "", email: "", age: "", address: "" }
        res.render("addPost", { pageTitle: "add new user(post)", user, errors: {} })
    }
    static addUserLogic = (req, res) => {
        let user = req.body
        let errors = {}
        //"" 0 +> false     12+=> true
        if (!ValiadtorController.isEmptyString(user.name))
            errors.name = "name is required"
        if (!ValiadtorController.isValidEmail(user.email))
            errors.email = "enter a valid mail"
        if (Object.keys(errors).length > 0)
            return res.render('addPost', {
                pageTitle: "add new user",
                errors,
                user
            })
        dbConnection((err, client, db) => {
            db.collection('data').insertOne(user,(error, result)=>{
            if(err) return res.redirect("/err")
            client.close()
            res.redirect("/")
        })
    })
    }
    static searchUserByID = (id, data) => {
        let userIndex = data.findIndex(el => el.id == id)
        return userIndex
    }
    static singleUser = (req, res) => {
        let isNotFound = false
        const id = req.params.id
        const data = readFromJSON()
        const userIndex = this.searchUserByID(id, data)
        if (userIndex == -1) isNotFound = true
        res.render("single", {
            pageTitle: "User Details",
            user: data[userIndex],
            isNotFound
        })
    }

    static editUser = (req, res) => {
        let isNotFound = false
        const id = req.params.id
        const data = readFromJSON()
        const userIndex = this.searchUserByID(id, data)
        if (userIndex == -1) isNotFound = true
        res.render("edit", {
            pageTitle: "Edit User Details",
            user: data[userIndex],
            isNotFound
        })
        //{name:"a"} user = {...x, id:1} {name:a, id:1}
    }

    static deleteUser = (req, res) => {
        const id = req.params.id
        const data = readFromJSON()
        const userIndex = this.searchUserByID(id, data)
        if (userIndex != -1) {
            data.splice(userIndex, 1)
            writeDataToJSON(data)
            res.redirect("/")
        }
        else res.redirect('/err')
    }
}
module.exports = User