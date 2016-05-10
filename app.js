var express = require('express');
var app = express();

var morgan = require('morgan');
var bodyParser = require('body-parser');

var swig = require('swig');
var path = require('path');

module.exports = app;

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
swig.setDefaults({ cache: false });

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res, next){
    res.render('index', {});
})

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(err.status || 500).send(err.message);
    //res.reder('error', {})
})
