var mongoose = require('mongoose');
var reviewSchema = require('../review/review.schema.server');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    img: String,
    type: {type: String, enum: ['Admin', 'Unpaid', 'Paid']},
    reviews : [reviewSchema],
    favorite: [String],
    follower: [mongoose.Schema.ObjectId],
    following: [mongoose.Schema.ObjectId],
    dateCreated: {type:Date, default: Date.now()},
    facebook: {id: String, token: String}
  },
  {collection:'Users'}
);

module.exports = userSchema;
