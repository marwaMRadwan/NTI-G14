const DealWithJSON = require("./dealWithJson")
const chalk = require("chalk")
const validator=require("validator")
checkUniqueEmail= (email, data)=>{
    return data.find(ele=> email==ele.email)
}
searchUser = (attr, val, data)=>{
    return data.findIndex(ele=> val == ele[attr])
}
class User{   
    static addUser(userData, fileName){
        try{
            const data = DealWithJSON.readFromJSON(fileName)
            if(!validator.isEmail(userData.email)) throw new Error("invalid email format")
            // if(checkUniqueEmail(userData.email, data)) throw new Error("Email used before")
            if(searchUser('email',userData.email, data)!=-1) throw new Error("Email used before")
            data.push(userData)
            DealWithJSON.writeDataToJSON(fileName, data)
            console.log(chalk.bgGreen.white(`user added successfully`))
        }
        catch(e){
            console.log(chalk.bgRed.white(`an error accoured - ${e.message}`))
        }
    }
}
module.exports = User