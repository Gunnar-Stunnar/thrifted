var express = require('express');
var router = express.Router();
const multer  = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const saleComplete = require('./controllers/saleComplete.controller');
const imageUpload = require('./controllers/imageUpload.controller');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  next()
});
// define the saleComplete
router.post('/saleComplete', saleComplete);
router.post('/imageUpload', upload.single('addimage'),imageUpload);


module.exports = router;
