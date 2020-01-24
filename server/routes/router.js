var express = require('express');
var router = express.Router();

const saleComplete = require('./controllers/saleComplete.controller');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  next()
})
// define the saleComplete
router.get('/saleComplete', saleComplete);



module.exports = router
