var mongoose = require('mongoose');
var movieSchema = require('./movie.schema.server');

var movieModel = mongoose.model('Movie', movieSchema);

movieModel.createMovie = createMovie;
movieModel.findMovieByDbId = findMovieByDbId;



module.exports = movieModel;

function createMovie(movie) {
  return movieModel.create(movie);
}

function findMovieByDbId(dbId) {
  return movieModel.findOne({db_id: dbId});
}


