var express = require('express');
var router = express.Router();
var m = require('../models')

/* GET mats listing. */
router.get('/', function(req, res, next) {
  m.Mat.findAll().then(function(rows) {
    res.json('200', rows);
  });
});

module.exports = router;
