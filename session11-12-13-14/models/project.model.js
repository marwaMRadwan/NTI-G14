const mongoose = require('mongoose')
const projectSchema = new mongoose.Schema({
    title:{type:String, required:true,unique:true, minlength:2, maxlength:50},
    content:{type:String, required:true},
    startDate:{type:Date},
    dueDate:{type:Date},
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    }
},
{timestamps:true})

const Project = mongoose.model("Project", projectSchema)
module.exports = Project