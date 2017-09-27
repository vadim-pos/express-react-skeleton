const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

// Create express app
const app = express();

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setup router for root '/' route
app.use('/', routes);

// Set server port
app.set('port', process.env.PORT || 4200);

// Start app
const server = app.listen(app.get('port'), () => console.log(`Express running → PORT ${server.address().port}`));