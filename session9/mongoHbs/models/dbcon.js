const MongoClient = require("mongodb").MongoClient
const myConnection = (cb)=>{
    MongoClient.connect("mongodb://127.0.0.1:27017", {}, (err, client)=>{
        if(err) return cb(err,false, false)
        const db = client.db("hbsG14")
        cb(false,client, db)
    })
}
module.exports = myConnection
