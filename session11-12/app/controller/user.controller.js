const userModel = require("../../models/user.model")
class User {
    static addUser = async (req, res) => {
        try {
            let user = new userModel(req.body)
            await user.save()
            res.status(200).send({
                apiStatus: true,
                data: user,
                message: "data inserted successfuly"
            })
        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: "error adding user data"
            })
        }
    }
    static showAll = async (req, res) => {
        try {
            const allData = await userModel.find()
            res.status(200).send({
                apiStatus: true,
                data: allData,
                message: "data inserted successfuly"
            })
        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: "error adding user data"
            })
        }
    }
    static showSingle = async (req, res) => {
        try {
            const user = await userModel.findById(req.params.id)
            let message= "data inserted successfuly"
            let mStatus = 200
            if(!user){ message="user not found"; mStatus=404 } 
            res.status(mStatus).send({
                apiStatus: true,
                data: user,
                message
            })
        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: "error adding user data"
            })
        }

    }
    static deleteAll = async (req, res) => {
        try{
            const data = await userModel.deleteMany()
            res.status(200).send({apiStatus:true,data,message:"deleted"})
        }
        catch(e){
            res.status(500).send({apiStatus:false, data:e.message, message:"delete error"})
        }
    }
    static deleteSingle = async (req, res) => {
        try{
            const data = await userModel.findByIdAndDelete(req.params.id)
            let message="deleted"
            let mStatus=200
            if(!data){message="user Not Found"; mStatus=404}
            res.status(mStatus).send({apiStatus:true,data,message:message})
        }
        catch(e){
            res.status(500).send({apiStatus:false, data:e.message, message:"delete error"})
        }

    }
    static login = async(req, res)=>{
        try{
            let user = await userModel.loginUser(req.body.email, req.body.password)
            let token = await user.generateToken()
            res.status(200).send({apiStatus:true, data:{user, token}, message:"logged in"})
        }
        catch(e){
            res.status(500).send({apiStatus:false, data:e.message, message:"invalid data"})
        }
    }
    static me = async(req,res)=>{
        res.status(200).send({apiStatus:true, data:req.user, message:"data featched"})
    }
}
module.exports = User