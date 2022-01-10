const fs = require("fs")
const chalk = require("chalk")
class DealWithJSON{
    static readFromJSON = (fileName) =>{
        let data
        try{
            const filePath= `./db/${fileName}.json`
            data = JSON.parse(fs.readFileSync(filePath))
            if(!Array.isArray(data)) throw new Error()
        }
        catch(e){
            data = []
        }
        return data
    }
    static writeDataToJSON = (fileName, data)=>{
        try{
            if(!Array.isArray(data)) throw new Error("data isn't array")
            const filePath= `./db/${fileName}.json`
            fs.writeFileSync(filePath, JSON.stringify(data))    
        }
        catch(e){
            console.log(chalk.bgRed.white(e.message))
        }
    }
}

module.exports = DealWithJSON