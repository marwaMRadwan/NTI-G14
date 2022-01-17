const mongoose = require("mongoose")
const validator = require('validator')
const bcryptjs = require("bcryptjs")
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    age:{
        type:Number,
        min:21,
        required:true
    },
    password:{
        type:String,
        minlength:6,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error("invalid email format")
        }
    },
    gender:{
        type:String,
        trim:true,
        required:true,
        enum:["male", "female"]
    },
    malStatus:{
        type:String,
        trim:true,
        required: function(){ return this.gender=="male" }    
    },
    status:{
        type:Boolean,
        default:false
    },
    skills:[
        {
            type:String,
            trim:true
        }
    ],
    addresses:[
        {
            addrType:{
                type:String,
                required:true
            },
            addrContent:{}
        }
    ],
    img:{
        type:String
    }
},
{timestamps:true}
)

//update save
userSchema.pre("save", async function(){
    const user = this
    if(user.isModified("password"))
        user.password = await bcryptjs.hash(user.password, 12)
})


const User = mongoose.model("User", userSchema)
module.exports = User