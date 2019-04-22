
// Get the dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
var mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist/CS5610-final')));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

var cookieParser = require('cookie-parser');
var session = require('express-session');
app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET || 'webfinal'
}));

var passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || '4200';
app.set('port', port);


mongoose.Promise = global.Promise;
//var connectionString = 'mongodb://localhost:27017/webfinal';
var connectionString = 'mongodb://heroku_p1dr3dp9:3kpum3ptca8ab0l1braf1dh5l7@ds135456.mlab.com:35456/heroku_p1dr3dp9';
const client = mongoose.connect( connectionString, { useNewUrlParser: true });
var db = mongoose.connection;

// let isHeroku = false;
// if (isHeroku) {
//   const db = mongoose.connect('mongodb://heroku_p1dr3dp9:3kpum3ptca8ab0l1braf1dh5l7@ds135456.mlab.com:35456/heroku_p1dr3dp9', {useNewUrlParser: true});
// } else {
//   const db = mongoose.connect('mongodb://localhost:27017/webfinal', {useNewUrlParser: true});
// }
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
require('./server/app')(app);

// Create HTTP server
const server = http.createServer(app);
server.listen( port , () => console.log('Running on port 4200'));
