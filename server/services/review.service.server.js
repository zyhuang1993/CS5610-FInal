module.exports=function (app) {
  app.post('/api/:dbId/review', createReview);
  app.delete('/api/review/:reviewId', deleteReview);
  app.put('/api/review/:reviewId/increaseLikes', increaseLike);
  app.put('/api/review/:reviewId/decreaseLikes', decreaseLike);
  app.delete('/api/:userId/review', deleteUserReviews);

  var reviewModel = require('../models/review/review.model.server');

  function createReview(req, res) {
    const review = req.body;
    const dbId = req.params.dbId;
    reviewModel.createReview(dbId, review)
      .then((newReview) => {
        res.json(newReview);
      }, (err) => {
        res.status(500).send(err);
      });
  }

  function deleteReview(req, res) {
    const reviewId = req.params['reviewId'];
    reviewModel.deleteReview(reviewId)
      .then((data) => {
        res.json(data);
      }, (err) => {
        res.status(500).send(err);
      });
  }

  //only update likes in review
  function increaseLike(req, res) {
    const reviewId = req.params['reviewId'];
    reviewModel.increaseLike(reviewId)
      .then((review) => {
        res.json(review);
      }, (err) => {
        res.status(500).send(err);
      });
  }

  function decreaseLike(req, res) {
    const reviewId = req.params['reviewId'];
    reviewModel.decreaseLike(reviewId)
      .then((review) => {
        res.json(review);
      }, (err) => {
        res.status(500).send(err);
      });
  }


  function deleteUserReviews(req, res) {
    const userId = req.params.userId;
    reviewModel.deleteUserReviews(userId)
      .then((data) => {
        res.json(data);
      }, (err) => {
        res.status(500).send(err);
      });
  }


};
