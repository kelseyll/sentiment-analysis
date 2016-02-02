// Import app dependancies
var express = require('express'); // framework we will use for the webapp
var http = require('http'); // needed to server our webapp
var sentiment = require('sentiment'); //require sentiment

// initialize express
var app = express();
app.use(express.static('public')); // make files in /public available

// respond with index.html when a user performs a get request at '/'
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/:query', function(req, res) {
  var sent = sentiment(req.params.query);
  res.send(sent);
});

// serves our app
var http_server = http.Server(app);

// have our HTTP server listen for requests on port 8080
http_server.listen(8080, function() {
	console.log('listening on *:8080');
});
