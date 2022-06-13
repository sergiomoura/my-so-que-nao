const multer = require('multer');
const upload = multer({dest:'public/img/avatares/'});


module.exports = upload.single('foto');
