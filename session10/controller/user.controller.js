const UserModel = require('../models/user.model')
class User{
    //add then catch
    static addUser = (req, res) => {
        const data = new UserModel(req.body)
        data.save()
            .then(() => res.send({
                data,
                message: "data inserted successfuly"
            }))
            .catch(e => res.send({
                data: e.message,
                message: "error inserting data"
            }))
    }
    //add async 
    static add = async (req, res) => {
        try {
            const data = new UserModel(req.body)
            await data.save()
            res.send({
                data,
                message: "data inserted successfuly"
            })
        }
        catch (e) {
            res.send({
                data: e.message,
                message: "error adding data"
            })
        }
    }
    //show all
    static showAll = async(req, res)=>{
        try{
            const data = await UserModel.find()
            res.send({
                data,
                message:"data fetched"
            })
        }
        catch(e){
            res.send({
                data:e.message,
                message:"error in fetching"
            })
        }
    }
    //single user
    static single = async(req, res)=>{
        try{
            const data = await UserModel.findById(req.params.id)
            if(!data) res.send({
                data,
                message:"user not found"
            })
            res.send({
                data,
                message:"data fetched"
            })
        }
        catch(e){
            res.send({
                data:e.message,
                message:"error in fetching"
            })
        }
    }
    //delete one
    static delUser = async(req,res)=>{
        try{
            const data = await UserModel.findByIdAndDelete(req.params.id)
            if(!data) res.send({
                data,
                message:"user not found"
            })
            res.send({
                data,
                message:"data deleted"
            })
        }
        catch(e){
            res.send({
                data:e.message,
                message:"error in fetching"
            })
        }
    }
    //edit 
    static editUser=async(req,res)=>{
        try{
            const data = await UserModel.findByIdAndUpdate(
                req.params.id,
                req.body,
                {runValidators:true}
            )
            if(!data) res.send({
                data,
                message:"user not found"
            })
            res.send({
                data,
                message:"data deleted"
            })
        }
        catch(e){
            res.send({
                data:e.message,
                message:"error in fetching"
            })
        }
    }
}
module.exports=User