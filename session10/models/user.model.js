const mongoose = require('mongoose')
try{
    mongoose.connect('mongodb://127.0.0.1:27017/mydbg14')
}
catch(e){
    console.log("db error : ", e)
}

const User = mongoose.model("User", {
    name:{},
    age:{},
    email:{}
})

let me = new User({
    name:"marwa",
    age:36,
    email:'marwa@marwa.com',
    j:"gfgfg"
})

me.save()
.then(()=>console.log('inserted'))
.catch(e=>console.log(e))