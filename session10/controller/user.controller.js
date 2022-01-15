const UserModel = require('../models/user.model')
class User{
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
}
module.exports=User