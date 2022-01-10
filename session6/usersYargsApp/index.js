const User = require("./controllers/users")
const yargs = require("yargs")
userMainData = ["name", "age", "email"]
yargs.command({
    command:"addNewUser",
    builder:{
        name:{type:"string", demandOption:true},
        age:{type:"number", default:20},        
        email:{type:"string", demandOption:true}    
    },
    handler: function(argv){
        try{
            userData={}
            userMainData.forEach(data=> userData[data]=argv[data])
            User.addUser(userData, "users")    
        }
        catch(e){
            console.log(e.message)
        }
    }
})
yargs.command({
    command:"singleUserData",
    builder:{
        data:{}
    },
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


// User.writeData('ahmed', "gdgshg")