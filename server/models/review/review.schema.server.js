var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    title: String,
    description: String,
    rate: Number,
    reviewer: {type: mongoose.Schema.ObjectId, ref: "User"},
    db_id: String,
    likes: Number,
    poster_path: String,
    likeStatus: {type:String, default: 'Like'},
    dateCreated: {type:Date, default: Date.now()}
  },
  {collection:'Reviews'}
);

module.exports = reviewSchema;
