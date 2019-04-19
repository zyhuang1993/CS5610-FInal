var mongoose = require('mongoose');
var reviewSchema = require('./review.schema.server');

var reviewModel = mongoose.model('Review', reviewSchema);
var movieModel = require('../movie/movie.model.server');

reviewModel.createReview = createReview;
reviewModel.deleteReview = deleteReview;
reviewModel.updateReview = updateReview;
reviewModel.findReviewById = findReviewById;

module.exports = reviewModel;

function createReview(dbId, review) {
  return reviewModel.create(review)
    .then((newReview) => {
      createReviewInMovie(dbId, newReview);
      return newReview;
    });
}

function deleteReview(reviewId) {
  deleteReviewInMovie(reviewId);
  return reviewModel.findByIdAndRemove(reviewId);
}

function updateReview(reviewId) {
  updateReviewInMovie();
  return reviewModel.findByIdAndUpdate(reviewId,
    {$inc: {"likes": 1}},
    {safe: true, new: true}
    ).then((newReview) => {
      updateReviewInMovie(reviewId, newReview);
      return newReview;
  });
}

function findReviewById(reviewId) {
  return reviewModel.findById(reviewId);
}

function createReviewInMovie(dbId, newReview) {
  movieModel.createReviewInMovie(dbId, newReview);
}

function deleteReviewInMovie(reviewId) {
  reviewModel.findReviewById(reviewId)
    .then((review) => {
      movieModel.deleteReviewInMovie(review.db_id, reviewId);
    });
}

function updateReviewInMovie(reviewId, review) {
  reviewModel.findReviewById(reviewId)
    .then((review) => {
      movieModel.updateReviewInMovie(review.db_id, review)
    });
}
