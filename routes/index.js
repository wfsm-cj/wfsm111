var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 // res.sendFile('header.html');
  res.render('index');
  // res.render("footer")
});

module.exports = router;
