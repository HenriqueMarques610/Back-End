var express = require('express');
var indexController=require('../controllers/indexController')
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function (req, res) {
  res.render('login.ejs', { message: req.flash("loginMessage") }); // load the index.ejs file
});

router.get('/signup', function (req, res) {
  res.render('signup.ejs', { message: req.flash("signupMessage") }); // load the index.ejs file
});

router.get('/profile', function (req, res) {
  res.render('profile.ejs', { user: req.user }); // get the user out of session and pass to template
});

router.post('/login',indexController.login)

router.post('/signup',indexController.signup)

module.exports = router;