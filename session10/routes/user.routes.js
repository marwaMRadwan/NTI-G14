const router = require('express').Router()
const UserModel = require('../models/user.model')

router.post('/addUser', (req, res)=>{
    const data = new UserModel(req.body)
    data.save()
    .then(()=>res.send('inserted'))
    .catch(e=> res.send(e))
})

module.exports=router