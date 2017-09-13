var express = require('express');
var router = express.Router();
var petikMangga = require('../cron-manggo')
/* GET home page. */
router.get('/',petikMangga.cronMangga)

module.exports = router;
