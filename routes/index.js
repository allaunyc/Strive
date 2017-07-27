var express = require('express');
var router = express.Router();
var User = require('.././models/models').User;

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
});

router.get('/feed', function(req,res){
  User.find().exec()
  .then((users) => {
    res.render('feed', {
      users: users
    })
  })
});

router.post('/feed', function(req,res){

});

module.exports = router;
