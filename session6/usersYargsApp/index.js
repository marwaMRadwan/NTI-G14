const User = require("./controllers/users")
const yargs = require("yargs")

yargs.command({
    command:"addNewUser",
    handler: function(argv){
        console.log("addNewUser")
    }
})
yargs.command({
    command:"singleUserData",
    handler: function(argv){
        console.log("singleUserData")
    }
})
yargs.command({
    command:"showAll",
    handler: function(argv){
        console.log("showAll")
    }
})
yargs.command({
    command:"delUser",
    handler: function(argv){
        console.log("delUser")
    }
})
yargs.command({
    command:"editUser",
    handler: function(argv){
        console.log("EditUser")
    }
})

yargs.argv


User.writeData('ahmed', "gdgshg")