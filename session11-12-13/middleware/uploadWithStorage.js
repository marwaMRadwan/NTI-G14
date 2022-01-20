const multer = require('multer')
const path=require('path')
const fs = require("fs")
const storage = multer.diskStorage({
        destination: function(req, file, cb){
            cb(null, "images")
        },
        filename: function(req,file, cb){
            const myFileName= Date.now()+path.extname(file.originalname)
            cb(null, myFileName)
        }
    })
    const upload = multer({
        storage,
        limits:{fileSize:200000000},
        fileFilter: function(req,file,cb){
            if(path.extname(file.originalname!='.pdf')) cb("invalid", null)
            cb(null, true)
        }
    })
    
module.exports = upload