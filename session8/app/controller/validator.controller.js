const validator = require("validator")
class ValiadtorController{
    static isEmptyString = (val)=>{
        return val.length //0=false >0 =true
    }
    static isValidEmail = (val) => {
        return validator.isEmail(val)  //true false
    }
}
module.exports = ValiadtorController