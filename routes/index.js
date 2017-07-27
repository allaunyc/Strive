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
//
// router.post('/feed', function(req,res){
//   $.ajax({
//     url: '/submission',
//     method: 'post',
//     data: $(this).serialize(),
//     //
//     // data: {
//     //   var name = req.body.name;
//     //   var email = req.body.email;
//     //   var role = req.body.role;
//     //   var time = Date.now();
//     //   var referrer = Document.referrer();
//     // }
//     // var newUser = new User({
//     //   name:name,
//     //   email:email,
//     //   role:role,
//     //   time:time,
//     //   referrer: referrer
//     // });
//     // newUser.save(function(error, savedUser){
//     //   if(error){
//     //     res.json({failure: error})
//     //   }else{
//     //     res.json({success: true, response: savedUser})
//     //   }
//     // });
//
//     success: function(response) {
//       if (response.err) {
//         alert("Error in submitting")
//       } else {
//         $(".submission-received").css("visibility", "visible");
//       }
//     }
//   })
// });
//
module.exports = router;
