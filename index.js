'use strict';

const server = require('./server.js');
require('dotenv').config();

const port = process.env.PORT ||3030;
server.startPort(port);