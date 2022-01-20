const multer = require("multer")
const upload = multer({ dest: 'images/' })

module.exports = upload