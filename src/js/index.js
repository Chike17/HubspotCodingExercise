var allMedia = require('./data/data.json');
var utils = require('./utils/utils.js');
var allMedia = utils.sortByTitle(allMedia.media);
var axios = require('axios');

exports.home = (req, res) => {
  var media = allMedia;
  res.render('pages/index', {'media': media});
};

exports.books = (req, res) => {
  var media = allMedia;
  var books = media.filter((item) => {
    return item.type === 'book';
  });
  res.render('pages/books', {'books': books});
};

exports.movies = (req, res) => {
  var media = allMedia;
  var movies = media.filter((item) => {
    return item.type === 'movie';
  });
  res.render('pages/movies', {'movies': movies});
};

exports.chuckNorris = (req, res) => {
  axios.get('http://api.icndb.com/jokes/random/15')
  .then(function (response) {
    var jokes = response.data.value;
    res.render('api/chuck_norris', {'jokes': jokes});
  })
  .catch(function (error) {
    console.log(error);
  });
};

exports.error = (req, res) => {
  res.statusCode = 404;
  res.send('Error. This route does not exist');
};

