class User{
    static showAll = (req, res) => {
        res.render("all", {pageTitle: "All Users"})
    }
    static addUser = (req, res)=>{
        res.render("add", {pageTitle:"Add New User"})
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