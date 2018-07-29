const express = require('express');
const handleRender = require('./build/server.js');

const app = express();
app.use(express.static('build/assets'));
app.use('/', handleRender);

app.listen(8443);