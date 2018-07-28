var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey = fs.readFileSync('/etc/letsencrypt/live/nikitindev.ru/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/etc/letsencrypt/live/nikitindev.ru/fullchain.pem', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

var handleRender = require('./build/app.js');
app.get('*', handleRender);

/*app.get('/', function (req, res) {
  res.send('Привет, Человек!!! А я работаю на Ноде');
});*/


// your express configuration here

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);
