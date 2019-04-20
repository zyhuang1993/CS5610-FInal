module.exports=function (app) {
  app.post('/api/:dbId/review', createReview);
  app.delete('/api/review/:reviewId', deleteReview);
  app.put('/api/review/:reviewId', updateReview);
  app.put('/api/review/:reviewId/increaseLikes', increaseLike);
  app.put('/api/review/:reviewId/decreaseLikes', decreaseLike);

  var reviewModel = require('../models/review/review.model.server');

  function createReview(req, res) {
    const review = req.body;
    const dbId = req.params.dbId;
    reviewModel.createReview(dbId, review)
      .then((newReview) => {
        res.json(newReview);
      }, (err) => {
        res.status(404).send(err);
      });
  }

  function deleteReview(req, res) {
    const reviewId = req.reviewId;
    reviewModel.deleteReview(reviewId)
      .then((data) => {
        res.json(data);
      }, (err) => {
        res.status(404).send(err);
      });
  }

  //only update likes in review
  function increaseLike(req, res) {
    const reviewId = req.reviewId;
    reviewModel.updateReview(reviewId)
      .then((review) => {
        res.json(review);
      }, (err) => {
        res.status(400).send(err);
      });
  }

  function decreaseLike(req, res) {
    const reviewId = req.reviewId;
    reviewModel.updateReview(reviewId)
      .then((review) => {
        res.json(review);
      }, (err) => {
        res.status(400).send(err);
      });
  }

};
