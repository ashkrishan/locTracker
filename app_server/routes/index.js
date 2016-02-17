var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');


//URL or route request
router.get('/', ctrlMain.index);

module.exports = router;
