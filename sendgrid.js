// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var User = require('./models/models').User;
var config = require('./config/config.json')

var sg = require('sendgrid')(process.env._SENDGRID_API_KEY || config._SENDGRID_API_KEY);

router.post('/submission', function(req,res) {
  console.log(req.body);
  var name = req.body.nameinput;
    var email = req.body.emailinput;
    var role = !req.body.role ? 'parent' : 'student';
    var time = Date.now();
    var referrer = req.body.referrer;

  var newUser = new User({
    name:name,
    email:email,
    role:role,
    time:time,
    referrer: referrer
  });
  newUser.save(function(error, savedUser) {
  });


  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: {
      personalizations: [
        {
          to: [
            {
              email: process.env.SENDGRID_EMAIL || config.SENDGRID_EMAIL,
            },
          ],
          'substitutions': {
            '-name-': req.body.nameinput,
            '-email-': req.body.emailinput,
          },
          subject: 'New contact submission',
        },
      ],
      from: {
        email: 'site@madetostrive.com',
      },
      // content: [
      //   {
      //     type: 'text/html',
      //     value: 'I\'m replacing the <strong>body tag</strong>',
      //   },
      // ],
      'template_id': process.env.TEMPLATE_ID || config.TEMPLATE_ID,
    },
    });

    sg.API(request, function(error, response) {
    if (error) {
      console.log('Error response received');
      res.json({ err: true });
      return;
    }
    console.log(response);
    console.log(response.nameinput);
    console.log(response.emailinput);
    console.log(response.headers);
    res.json({ err: false });
    });
  })

  module.exports = router;
