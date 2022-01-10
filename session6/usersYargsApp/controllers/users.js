const DealWithJSON = require("./dealWithJson")
const chalk = require("chalk")
class User{
    static addUser(userData, fileName){
        try{
            const data = DealWithJSON.readFromJSON()
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