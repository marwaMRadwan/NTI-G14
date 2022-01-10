//process args - yargs - fetch api - nodemon
// console.log(process.argv)
// com = process.argv[2]
// console.log(com)

const yargs = require("yargs")
yargs.command({
    command:"a",
    describe:"test command",
    builder:{
        name:{
            describe:"name",
            type: "string",
            demandOption: true
        },
        age:{
            describe:"age",
            type:"number",
            demandOption:true
        }
    },
    handler: function(argv){
        console.log(`name: ${argv.name} - age: ${argv.age}`)
    }
})

yargs.argv