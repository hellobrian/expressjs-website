var express = require('express');
var app = express();
// var path = require('path');
// var cons = require('consolidate');
// var dust = require('dustjs-linkedin');

// app.set('views', path.join(__dirname, 'views'));
// app.engine('dust', cons.dust);
// app.set('view engine', 'dust');

app.use(express.static(__dirname + '/', { extensions: ['html'] }));
app.use(express.static(__dirname + 'public'));

app.get('/', function(req, res) {
  res.sendFile('index.html');
  // res.render('index', { layout: 'main-template' });
});

app.get('/about', function(req, res) {
  res.sendFile('about.html');
  // res.render('about', { layout: 'main-template' });
});

var host = (process.env.VCAP_APP_HOST || 'localhost');
var port = (process.env.VCAP_APP_PORT || 5000);
 
app.listen(port, host);
console.log('App started on port ' + port);