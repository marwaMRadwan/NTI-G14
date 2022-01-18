/*
get authorization from header 
verify token =>{_id:xyz}
search inside db
if(!) unauthor
next
*/
const jwt = require("jsonwebtoken")
const userModel = require("../models/user.model")
const auth = async(req,res,next)=>{
    try{
        const token = req.header("Authorization").replace("bearer ","")
        const myDecodedToken = jwt.verify(token, "123") //{_id, iat}
        const user = await userModel.findOne({
            _id:myDecodedToken._id, 
            "tokens.token":token
        })
        if(!user) throw new Error("unauthorized")
        req.user = user
        req.token = token
        next()
    }
    catch(e){
        res.status(500).send({apiStatus:false, data:e.message, message:"unauthorized"})
    }
}

module.exports = auth