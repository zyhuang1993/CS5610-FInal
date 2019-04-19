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
        res.status(404).send(err);
      });
  }

  function createMovie(req, res) {
    const movie =req.body;
    movieModel.createMovie(movie)
      .then((movie) => {
        res.json(movie);
      }, (err) => {
        res.status(404).send(err);
      });
  }

};
