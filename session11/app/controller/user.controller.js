const userModel = require("../../models/user.model")
class User{
    static addUser = async(req, res)=>{
        try{
            let user = new userModel(req.body)
            await user.save()
            res.send(user)
        }
        catch(e){
            res.send(e)
        }
    }
}
module.exports = User