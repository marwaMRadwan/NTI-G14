const fs = require('fs')
const chalk = require("chalk")

const readFromJSON = () =>{
    let data
    try{
        data = JSON.parse(fs.readFileSync('data.json'))
        if(!Array.isArray(data)) throw new Error()
        console.log(chalk.blue("data featched"))
    }
    catch(e){
        data = []
        console.log(chalk.red("array rested"))
    }
    return data
}

class MyFunctions{
    static showAllData = () =>{
        const data = readFromJSON()
        console.table(data)
    }
}
module.exports = MyFunctions