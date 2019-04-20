var mongoose = require('mongoose');
var reviewSchema = require('../review/review.schema.server');

var movieSchema = new mongoose.Schema({
    title: String,
    db_id: String,
    reviews: [reviewSchema],
    release_date: String,
    poster_path: String,
    overview: String,
    favoriteStatus: {type: String, default: 'Favorite'},
    dateCreated: {type:Date, default: Date.now()},
  },
  {collection:'Movies'}
);

module.exports = movieSchema;
