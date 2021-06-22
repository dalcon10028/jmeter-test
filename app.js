var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const { swaggerUi, specs } = require('./modules/swagger');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var appleRouters = [];
var bananaRouters = [];
var catRouters = [];
var dogRouters = [];
var elephantRouters = [];

for (let i = 1; i <= 5; i++) {
  appleRouters[i] = require(`./routes/apple/apple${i}`);
  bananaRouters[i] = require(`./routes/apple/apple${i}`);
  catRouters[i] = require(`./routes/apple/apple${i}`);
  dogRouters[i] = require(`./routes/apple/apple${i}`);
  elephantRouters[i] = require(`./routes/apple/apple${i}`);
}

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/users', usersRouter);

for (let i = 1; i <= 5; i++) {
  app.use(`/apple${i}`, appleRouters[i]);  
  app.use(`/banana${i}`, bananaRouters[i]);
  app.use(`/cat${i}`, catRouters[i]);
  app.use(`/dog${i}`, dogRouters[i]);
  app.use(`/elephant${i}`, elephantRouters[i]);
}


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
