const mongoose = require('mongoose')
try{ mongoose.connect('mongodb://127.0.0.1:27017/userG14')}
catch(e){ console.log("db error : ", e) }