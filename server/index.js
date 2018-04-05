const express = require('express');
const path = require('path');
//http is a native node library
//sets up some low-level handling of http requests
//forwards any incoming requests onto app, our express instance.
//In order to support the full spectrum of possible HTTP applications, Node.js's HTTP API is very low-level. It deals with stream handling and message parsing only. It parses a message into headers and body but it does not parse the actual headers or the body.
const http = require('http');
const bodyParser = require('body-parser');
//HTTP request logger middleware for node.js
const morgan = require('morgan');
//imports our router file that routes the incoming requests to their proper controllers
const router = require('./router');
const mongoose = require('mongoose');

const keys = require('../config/keys');

mongoose.connect(keys.mongoURI);

const app = express();

//express middlewares
//morgan is a logging framework, use it for debugging
//The predefined combined string creates standard Apache combined log output that will show up in the console for debugging.
app.use(morgan('combined'));

//Parse incoming request bodies in a middleware before your handlers, available under the req.body property. In this case we are parsing json.
//The type option is passed in with two wild cards for the type/subtype, allowing for any mime type to be parsed, but if it is not json, then an error will be thrown.
app.use(bodyParser.json({ type: '*/*' }));

//calls our router function, and passes the express instance as an arg.
router(app);

//____________________________________________All addditional Routes above this line_________________________________________
if (process.env.NODE_ENV !== 'production') {
  console.log('Dev');

  //Only want to require these resources if we are in a development environment

  //watches for incoming requests and then hands them off to webpack
  const webpackMiddleware = require('webpack-dev-middleware');
  //webpack library - compiles application assets
  const webpack = require('webpack');
  //config file that I created - instructs webpack how to run correctly
  const webpackConfig = require('../webpack.config.js');
  //interecepts incoming requests and responds with the compiled javascript application
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  //IF IN PRODUCTION ENVIRONMENT
  //opens up the dist directory for anyone who requests files from it
  app.use(express.static('dist'));
  //If a get requests comes in for any route on our server, send abck the index.html file.
  //This is used specifically for/with react router's browserhistory module
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => console.log('Listening'));
