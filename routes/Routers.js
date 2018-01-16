var express = require('express');
var router = express.Router();

router.use('/',  require('./index'));

router.use('/',  require('./r_aboutus'));
module.exports = router;
