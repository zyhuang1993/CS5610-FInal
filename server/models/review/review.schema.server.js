var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    title: String,
    description: String,
    reviewer: {type: mongoose.Schema.ObjectId, ref: "User"},
    movie: {type: mongoose.Schema.ObjectId, ref: "Movie"},
    dateCreated: {type:Date, default: Date.now()},
  },
  {collection:'Reviews'}
);

module.exports = reviewSchema;
