
// Get the dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('./server/app')(app);


// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist/CS5610-final')));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

const port = process.env.PORT || '4200';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);
server.listen( port , () => console.log('Running on port 4200'));


var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let isHeroku = false;
if (isHeroku) {
  const db = mongoose.connect('mongodb://heroku_p1dr3dp9:3kpum3ptca8ab0l1braf1dh5l7@ds135456.mlab.com:35456/heroku_p1dr3dp9', {useNewUrlParser: true});
} else {
  const db = mongoose.connect('mongodb://localhost:27017/webfinal', {useNewUrlParser: true});
}


