const DealWithJSON = require("./dealWithJson")
class User{
    static showAll(fileName){
        console.log(DealWithJSON.readFromJSON(fileName))
    }
    static writeData(fileName, data){
        DealWithJSON.writeDataToJSON(fileName, data)
    }
}
module.exports = User