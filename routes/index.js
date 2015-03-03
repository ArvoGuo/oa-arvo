var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/login');
});
router.get('/test', function(req, res) {
  res.render('test', {message: "test"});
});
router.get('/login', function(req, res) {
  res.render('login');
});
router.get('/index', function(req, res) {
  res.render('index');
});
router.post('/login/login', function(req, res) {
  // res.send({
  //   code: '200',
  //   message: 'login success'
  // });
  res.redirect('/index');
});


module.exports = router;
