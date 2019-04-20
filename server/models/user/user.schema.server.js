var mongoose = require('mongoose');
var movieSchema = require('../movie/movie.schema.server');
var reviewSchema = require('../review/review.schema.server');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    img: String,
    type: {type: String, enum: ['Admin', 'Unpaid', 'Paid']},
    reviews : [reviewSchema],
    favorite: [movieSchema],
    follower: [{type: mongoose.Schema.ObjectId, ref: 'Users'}],
    following: [{type: mongoose.Schema.ObjectId, ref: 'Users'}],
    dateCreated: {type:Date, default: Date.now()},
    facebook: {id: String, token: String}
  },
  {collection:'Users'}
);

module.exports = userSchema;
