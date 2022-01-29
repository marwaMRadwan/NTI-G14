const isMale = function(req,res,next){
    try{
        if(req.user.gender!="male") throw new Error("you are not male")
        next()
    }
    catch(e){
        res.status(500).send({apiStatus:false, data:e.message, message:"no permission"})
    }
}
module.exports = isMale