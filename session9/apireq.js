// http - https
const https = require("https");
const apiURL = "https://jsonplaceholder.typicode.com/users"
const req = https.request(apiURL, (res)=>{
    let myResponse = ""
    res.on("data", (val)=>{
        myResponse+=val.toString()
    })
    res.on("end", ()=>{
        console.log(JSON.parse(myResponse))
    })
})

req.on('error', (err)=> console.log(err))
req.end()