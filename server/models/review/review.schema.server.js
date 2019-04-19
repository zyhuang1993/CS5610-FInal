var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    title: String,
    rate: Number,
    description: String,
    reviewer: {type: mongoose.Schema.ObjectId, ref: "User"},
    db_id: String,
    likes: Number,
    dateCreated: {type:Date, default: Date.now()}
  },
  {collection:'Reviews'}
);

module.exports = reviewSchema;
