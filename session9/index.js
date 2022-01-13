// const mongodb = require('mongodb')
const {MongoClient, ObjectId} = require("mongodb")
// const MongoClient = mongodb.MongoClient
// const ObjectId = mongodb.ObjectId
const dbURL = "mongodb://127.0.0.1:27017"
const dbName = "g14"
MongoClient.connect(dbURL, {}, (err, client)=>{
    if(err) return console.log("unable to connect")
    const db = client.db(dbName)
  //insert single  
    // db.collection('data').insertOne(
    //     {name:"ahme", age:25},
    //     (error, result)=>{
    //         if(error) return console.log("error in inserting")
    //         console.log(result)
    //         client.close()
    //     }
    // )
//insert many
    // db.collection('data').insertMany(
    //     [{name:"ahme", age:25}, {name:"a", s:1}],
    //     (error, result)=>{
    //         if(error) return console.log("error in inserting")
    //         console.log(result)
    //         client.close()
    //     }
    // )
//show all
    // db.collection('data').find({name:"ahme"}).toArray((error,result)=>{
    //     if(error) return console.log("error fetching data")
    //     console.table(result)
    //     client.close()
    // })
//show Single
    // db.collection('data').findOne(
    //     { _id:new ObjectId("61dfee883415c2838a803476") },
    //     // {name:"a"},
    //     (error, result)=>{
    //         if(error) return console.log("error in fetching")
    //         console.log(result)
    //         client.close()
    //     }
    // )

//delete
    // db.collection('data').deleteOne({ _id:new ObjectId("61dfee883415c2838a803476") } )
    // .then(res=> {
    //     console.log(res)
    //     client.close()
    // })
    // .catch(error=> {
    //     console.log(error)
    //     client.close()
    // })

    //update 
    db.collection('data').updateMany(
        {},
        {
            // $set:{
            //     name:"ahmed mohammed"
            // }
            $inc:{
                age:1
            }
        }
    )
    .then(result=>{
        console.log(result)
        client.close()
    })
    .catch(error=>{
        console.log(error)
        client.close()
    })
})