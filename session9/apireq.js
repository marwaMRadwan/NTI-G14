// http - https
const https = require("https");
const apiURL = "https://jsonplaceholder.typicode.com/users"
const myApiReq = (apiURL, cb)=> {
    const req = https.request(apiURL, (res)=>{
        let myResponse = ""
        res.on("data", (val)=> myResponse+=val.toString())
        res.on("end", ()=> cb(false, JSON.parse(myResponse)))
    })
    req.on('error', (err)=> cb(err, false) )
    req.end()
}

myApiReq(apiURL, ( err, result)=> {
    if(err) {
        console.log(err)
        console.log("error in api data")
    }
    else console.log(result)
})