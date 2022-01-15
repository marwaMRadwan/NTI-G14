const mongoose = require('mongoose')
const validator = require("validator")
const User = mongoose.model("User", {
    name:{
        type: String,
        trim:true,
        required:true,
        lowercase:true,
        minlength:3,
        maxlength:20
    },
    age:{
        type:Number,
        min: 21, //maX:50
        default: 21
    },
    email:{
        type:String,
        lowercase:true,
        trim:true,
        required:true,
        unique:true,
        //isEmail
        validate(value){
            if(!validator.isEmail(value)) throw new Error("invalid email. format")
        }
    },
    password:{
        match:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/,
        type:String,
        required:true,
        trim:true,
    },
    gender:{
        type:String,
        enum:["male","female"]
    },
    status:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
})
module.exports = User