var mongoose = require('mongoose');
var reviewSchema = require('./review.schema.server');

var reviewModel = mongoose.model('Review', reviewSchema);
var movieModel = require('../movie/movie.model.server');

reviewModel.createReview = createReview;
reviewModel.deleteReview = deleteReview;
reviewModel.increaseLike = increaseLike;
reviewModel.decreaseLike = decreaseLike;
reviewModel.findReviewById = findReviewById;
reviewModel.updateReview = updateReview;

module.exports = reviewModel;

function createReview(dbId, review) {
  return reviewModel.create(review)
    .then((newReview) => {
      createReviewInMovie(dbId, newReview);
      return newReview;
    });
}

function updateReview(reviewId, review) {
  return reviewModel.findByIdAndUpdate(reviewId, review, {new: true, safe: true})
    .then(
      (newReview) => {
        updateReviewInMovie(reviewId, newReview);
        return newReview;
      }
    )
}

function deleteReview(reviewId) {
  deleteReviewInMovie(reviewId);
  return reviewModel.findByIdAndRemove(reviewId);
}

function increaseLike(reviewId) {
  return reviewModel.findByIdAndUpdate(reviewId,
    {$inc: {"likes": 1}},
    {safe: true, new: true}
    ).then((newReview) => {
      updateReviewInMovie(reviewId, newReview);
      return newReview;
  });
}

function decreaseLike(reviewId) {
  return reviewModel.findByIdAndUpdate(reviewId,
    {$inc: {"likes": -1}},
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
      if (review !== null) {
        movieModel.deleteReviewInMovie(review.db_id, reviewId);
      }
    });
}

function updateReviewInMovie(reviewId, review) {
  reviewModel.findReviewById(reviewId)
    .then((res) => {
      if (res !== null) {
        movieModel.updateReviewInMovie(res.db_id, review)
      }
    });
}
