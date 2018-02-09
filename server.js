var serverPort = process.env.PORT || 5000;
var isOnline = true;

var express = require('express');
var app = express();


var server = require('http').Server(app);
var engines		 = require('consolidate');
var jquery = require('jquery');

app.set('serverPort', (process.env.PORT || 5000));

app.use(express.static('public', {index: false, redirect: false}));
app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');




 app.get('/', function(request, response) {
    response.render('index');
});

server.listen(serverPort, function(){
  console.log('Server is running on port: '+serverPort);
});
