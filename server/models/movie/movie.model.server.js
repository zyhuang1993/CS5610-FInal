var mongoose = require('mongoose');
var movieSchema = require('./movie.schema.server');

var movieModel = mongoose.model('Movie', movieSchema);

movieModel.createMovie = createMovie;
movieModel.findMovieByDbId = findMovieByDbId;
movieModel.findMovieById = findMovieById;
movieModel.createReviewInMovie = createReviewInMovie;
movieModel.deleteReviewInMovie = deleteReviewInMovie;
movieModel.updateReviewInMovie = updateReviewInMovie;


module.exports = movieModel;

function createMovie(movie) {
  return movieModel.create(movie);
}

function findMovieByDbId(dbId) {
  return movieModel.findOne({db_id: dbId});
}

function findMovieById(movieId) {
  return movieModel.findById(movieId);
}

function createReviewInMovie(dbId, review) {
  return movieModel.findMovieByDbId(dbId)
    .then((movie)=> {
      movie.reviews.push(review);
      movie.save();
    });
  // return movieModel.findOneAndUpdate({db_id: dbId},
  //   {$push: {"reviews": review}},
  //   {safe: true, upsert: true},
  //   (err) => {
  //     console.log(err);
  //   }
  //   );
}

function deleteReviewInMovie(dbId, reviewId) {
  return movieModel.findMovieByDbId(dbId)
    .then((movie)=> {
      for(let i = 0; i < movie.reviews.length; i++) {
        if (movie.reviews[i]._id.equals(reviewId)) {
          movie.reviews.splice(i, 1);
          return movie.save();
        }
      }
    });
  // return movieModel.findOneAndUpdate({db_id: dbId},
  //   {$pull: {"reviews": {_id: reviewId}}},
  //   {safe: true, new: true},
  //   (err) => {
  //   console.log(err);
  //   }
  //   );
}

function updateReviewInMovie(dbId, review) {
  return movieModel.findMovieByDbId(dbId)
    .then((movie) => {
      if (movie !== null) {
        const index = findIndex(movie.reviews, review);
        movie.reviews.splice(index,1);
        movie.reviews.splice(index,0,review);
        return movie.save();
      }
  });
}

function findIndex(array, target) {
  for (let i = 0;i<array.length;i++) {
    if (array[i]._id.equals(target._id)) {
      return i;
    }
  }
  return -1;
}


