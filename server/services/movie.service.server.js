module.exports=function (app) {
  app.get('/api/movie/:dbId', findMovieByDbId);
  app.post('/api/movie', createMovie);

  var movieModel = require('../models/movie/movie.model.server');

  function findMovieByDbId(req, res) {
    const dbId = req.params.dbId;
    movieModel.findMovieByDbId(dbId)
      .then((movie) => {
        res.json(movie);
      }, (err) => {
        res.status(500).send(err);
      });
  }

  function createMovie(req, res) {
    const movie = req.body;
    movieModel.createMovie(movie)
      .then((movie) => {
        res.json(movie);
      }, (err) => {
        res.status(500).send(err);
      });
  }


  function updateReviewUsernameInMovie(req, res) {
    const username = req.body.username;
    console.log(username);
    const userId = req.params.userId;
    movieModel.updateReviewUsernameInMovie(userId, username)
      .then((data) => {
        res.json(data);
      }, (err) => {
        res.status(500).send(err);
      });
  }

};
