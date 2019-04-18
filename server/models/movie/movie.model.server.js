var mongoose = require('mongoose');
var movieSchema = require('./movie.schema.server');

var movieModel = mongoose.model('Movie', movieSchema);

movieModel.createMovie = createMovie;
movieModel.findMovieByDbId = findMovieByDbId;
movieModel.createReviewInMovie = createReviewInMovie;
movieModel.deleteReviewInMovie = deleteReviewInMovie;



module.exports = movieModel;

function createMovie(movie) {
  return movieModel.create(movie);
}

function findMovieByDbId(dbId) {
  return movieModel.findOne({db_id: dbId});
}

function createReviewInMovie(dbId, review) {
  return movieModel.findOneAndUpdate({"db_id": dbId},
    {$push: {"reviews": review}},
    {safe: true, upsert: true},
    (err) => {
      console.log(err);
    }
    );
}

function deleteReviewInMovie(dbId, reviewId) {
  return movieModel.findOneAndUpdate({"db_id": dbId},
    {$pull: {"reviews": {_id: reviewId}}},
    {safe: true, new: true},
    (err) => {
    console.log(err);
    }
    );
}
