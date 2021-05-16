'use strict';

const express = require('express');
const app = express();

const errorHandler = require('./error-handlers/500');
const notFoundHandler = require('./error-handlers/404');

//routes
app.get('/', homeHandler);
app.get('/bad', badHandler);

app.get('*', notFoundHandler);
app.use(errorHandler);



//functions

function homeHandler(req, res) {
  res.send('welcome in server.js :)');
}

function badHandler(req, res) {
  throw new Error('something went wrong!');
}


function startPort(port) {
  app.listen(port, () => {
    console.log(`you are listening on port ${port}`);
  });
}


module.exports = {
  app: app,
  startPort: startPort
}