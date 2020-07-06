// Entry point for the application
var express = require('express'); //use express
var surveyController = require('./surveyController');
var app = express(); 
app.set('view engine', 'ejs'); //html content
app.use('/public/', express.static('public')); //use images and css

// fire function from surveyController
surveyController(app);

app.listen(3000);
console.log('listening port 3000');
