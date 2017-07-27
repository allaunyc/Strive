const express = require('express');
var router = express.Router();
const models = require('.././models/models');
var User = models.User;
var Admin = models.Admin;
const expressValidator = require('express-validator');

module.exports = function(passport) {
/* GET users listing. */
  router.use(expressValidator());

  router.get('/login', function(req,res) {
    res.render('login');
  });

  router.post('/login', passport.authenticate('local', {
    successRedirect: '/feed',
    failureRedirect: '/login'
}));

  router.get('/logout', function(req,res) {
    req.logout();
    res.redirect('/login');
});


  return router;
};
