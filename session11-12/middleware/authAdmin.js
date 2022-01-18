const adminAuth = function(req,res,next){
    console.log("admin auth")
    console.log(req.user._id)
    try{
        if(user.type!="admin") throw new Error()
    next()
    }
    catch(e){
        res.send("not admin")
    }
}

module.exports =  adminAuth