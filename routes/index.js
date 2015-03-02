var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(44123);
  next()
}, function(req,res){
  res.render('index', {title: "dddd"});
});

module.exports = router;
