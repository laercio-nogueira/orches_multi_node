const mustacheExpress = require('mustache-express')
const express = require('express')
const path = require('path')
const app = express();

app.set('views', `${__dirname}/../views`);
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());
app.use('/static', express.static(path.resolve('./static')))

module.exports = app