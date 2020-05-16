var express = require('express');
var router = express.Router();
var m = require('../models')

/* GET borders listing. */
router.get('/', function(req, res, next) {
  m.Border.findAll().then(function(rows) {
    res.json('200', rows)
  });
});

module.exports = router;
