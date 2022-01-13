// const mongodb = require('mongodb')
const {MongoClient} = require("mongodb")
const dbURL = "mongodb://127.0.0.1:27017"
const dbName = "g14"
MongoClient.connect(dbURL, {}, (err, client)=>{
    if(err) return console.log("unable to connect")
    const db = client.db(dbName)
    // db.collection('data').insertOne(
    //     {name:"ahme", age:25},
    //     (error, result)=>{
    //         if(error) return console.log("error in inserting")
    //         console.log(result)
    //         client.close()
    //     }
    // )
    // db.collection('data').insertMany(
    //     [{name:"ahme", age:25}, {name:"a", s:1}],
    //     (error, result)=>{
    //         if(error) return console.log("error in inserting")
    //         console.log(result)
    //         client.close()
    //     }
    // )
    db.collection('data').find({name:"ahme"}).toArray((error,result)=>{
        if(error) return console.log("error fetching data")
        console.table(result)
        client.close()
    })
})