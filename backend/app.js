/*
  Main code of backend
*/

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysqlDB = require('./db_connector');

// ========================================
//            ROUTER DECLARATION
// ========================================
// index page router (needs modify)
var indexRouter = require('./routes/index');
// account management files' router
var joinRouter = require('./routes/account/signup');
var loginRouter = require('./routes/account/login');

// ========================================
var app = express();

// ========================================
const port = 3000;

mysqlDB.connect();

// ========================================
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('connect-history-api-fallback')());

// ========================================
//            ROUTER ROUTING
// ========================================
app.use('/api/account/join', joinRouter);
app.use('/api/account/login', loginRouter);
app.use('/', indexRouter);

// ========================================
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;