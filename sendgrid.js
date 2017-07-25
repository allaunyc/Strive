// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();


var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

router.post('/submission', function(req,res) {
  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: {
      personalizations: [
        {
          to: [
            {
              email: 'vcortes@berkeley.edu',
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
        email: 'test@example.com',
      },
      content: [
        {
          type: 'text/html',
          value: 'I\'m replacing the <strong>body tag</strong>',
        },
      ],
      'template_id': process.env.TEMPLATE_ID,
    },
    });

    sg.API(request, function(error, response) {
    if (error) {
      console.log('Error response received');
    }
    console.log(response);
    console.log(response.nameinput);
    console.log(response.emailinput);
    console.log(response.headers);
    });
  })

  module.exports = router;
