// Express configuration, routes initialization, request, response, and error handling.
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


var book = require('./routes/book');
var home = require('./routes/home');
var app = express();

// Create a database connecrion to mongodb using mongoose
mongoose.connect('mongodb://localhost/mern-crud')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));



// You can test the connection to MongoD
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'src')));


// Create routes
app.use('/', home);
app.use('/api/book', book);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //   res.render('error');
  next(err);
});

module.exports = app;