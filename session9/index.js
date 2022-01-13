const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const dbURL = "mongodb://127.0.0.1:27017"
const dbName = "g14"
MongoClient.connect(dbURL, {}, (err, client)=>{
    if(err) return console.log("unable to connect")
    const db = client.db(dbName)
    db.collection('data').insertOne(
        {name:"ahme", age:25},
        (error, result)=>{
            if(error) return console.log("error in inserting")
            console.log(result)
        }
    )
})