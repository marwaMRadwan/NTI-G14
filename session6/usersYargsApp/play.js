// data = [1,2,3,4,5]
// let i=-1
// let d = data.find((ele, index)=>  {
//     i=index
//     return ele==3
// })

// console.log({
//     i, d
// })

x = ['a', 'b', 'c']
const yargs = require("yargs")
yargs.command({
    command:"test",
    handler: function(argv){
        let keys = Object.keys(argv)
        const newData = {}
        keys.forEach(element => {
            if(element=="$0"|| element=="_") continue;
            newData[element] = argv[element]
        });
    }
})
yargs.argv