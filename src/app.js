var express = require ('express'); 

var app = express();

var path = require ('path');

app.set('view engine', 'ejs');

var routes = require('./js/index');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + '/views'));

app.get('/', routes.home);

app.get('/api/chuckNorris', routes.chuckNorris);

app.get('/books', routes.books);

app.get('/movies', routes.movies),

app.get('*', routes.error);

app.listen(3000, function() { console.log('Hubspot code exercise listening on port 3000.'); });
