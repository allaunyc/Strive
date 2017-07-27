const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const auth = require ('./routes/auth');
const index = require ('./routes/index');

const session = require ('express-session');
const passport = require ('passport');
const LocalStrategy = require ('passport-local');
const mongoose = require ('mongoose');
const models = require ('./models/models');
var User = models.User;
var Admin = models.Admin;
const mongo = require('connect-mongo');
var MongoStore = mongo(session);
const routes = require('./sendgrid');

mongoose.Promise = global.Promise;

var app = express();
app.set('views', path.join(__dirname, 'views'));   //can grab all stuff from views like images and other css
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'rjgf3456y8wscv',
  store: new MongoStore({mongooseConnection: mongoose.connection})
}));

passport.serializeUser((admin,done) => {
  done(null, admin._id);
});

passport.deserializeUser((id, done) => {
  Admin.findById(id,(error, admin) => {
    done(error, admin);
  })
});


passport.use(new LocalStrategy(function(username, password, done){
  console.log("admin",username, password);
  Admin.findOne({username: username}, function(error, admin) {
    console.log(error, admin);
    if (error) {
      console.log("error", error);
      return done(error);
    }
    if (!admin) {
      console.log("admin", admin);
      return done(null, false);
    }
    if (admin.password !== password) {
      return done(null, false);
    }
    return done(null, admin);
  })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', auth(passport));

app.use('/', (req,res,next) => {  //checks user is logged in for all routes
  if (!req.user) {
    res.redirect('/login');
  } else {
    next();
  }
})

app.use('/', index);
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(process.env.PORT || '3000', function() {
  console.log('The server is up!');
})
