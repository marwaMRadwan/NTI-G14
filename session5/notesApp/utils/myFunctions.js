const fs = require('fs')
const chalk = require("chalk")

const readFromJSON = () =>{
    let data
    try{
        data = JSON.parse(fs.readFileSync('data.json'))
        if(!Array.isArray(data)) throw new Error()
        // console.log(chalk.blue("data featched"))
    }
    catch(e){
        data = []
        // console.log(chalk.red("array rested"))
    }
    return data
}
const writeDataToJSON = (data) =>{
    try{
        fs.writeFileSync("data.json", JSON.stringify(data))
    }
    catch(e){
        console.log(chalk.red(e.message))
    }
}

class MyFunctions{
    static showAllData = () =>{
        const data = readFromJSON()
        if(!data.length) return console.log(chalk.red("no users Found"))
        data.forEach((user, i)=> console.log(chalk.green(`${i+1}- name is ${user.name} and age is ${user.age}`)))
    }
    static addUser = (userData)=>{
        const data = readFromJSON()
        data.push({id:Date.now(),...userData})
        writeDataToJSON(data)
        console.log(chalk.green("data Added successfuly"))
    }
}
module.exports = MyFunctions