/*
var express = require('express');
var fs = require('fs');
var http = require('http');
var https = require('https');
var subdomain = require('express-subdomain');

var privateKey = fs.readFileSync('/etc/letsencrypt/live/ssr.nikitindev.ru/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/etc/letsencrypt/live/ssr.nikitindev.ru/fullchain.pem', 'utf8');
var credentials = {key: privateKey, cert: certificate};


var app = express();
var router = express.Router();

var handleRender = require('./build/app.js');

router.use(express.static('build/assets'));
router.use('/', handleRender);

app.use(subdomain('ssr', router));

// your express configuration here

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);
*/

const express = require('express');
var handleRender = require('./build/app.js');

const app = express();
app.use(express.static('build/assets'));
app.use('/', handleRender);

app.listen(8443);