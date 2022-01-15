const router = require('express').Router()
const UserModel = require('../models/user.model')

router.post('/addUser', (req, res)=>{
    const data = new UserModel(req.body)
    data.save()
    .then(()=>res.send({
        data,
        message:"data inserted successfuly"
    }))
    .catch(e=> res.send({
        data:e.message,
        message:"error inserting data"
    }))
})

module.exports=router