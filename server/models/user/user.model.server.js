var mongoose =  require('mongoose');
var userSchema = require('./user.schema.server');

var userModel = mongoose.model('User', userSchema);
var movieModel = require('../movie/movie.model.server');
var reviewModel = require('../review/review.model.server');

userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findUserByUsername = findUserByUsername;
userModel.findUserByCredentials = findUserByCredentials;
userModel.updateUser = updateUser;
userModel.deleteUser = deleteUser;
userModel.findUserByFacebookId = findUserByFacebookId;
userModel.followUser = followUser;
userModel.unfollowUser = unfollowUser;
userModel.findAllUsers = findAllUsers;
userModel.addToFavorite = addToFavorite;
userModel.deleteFavorite = deleteFavorite;
userModel.addReview = addReview;
userModel.deleteReview = deleteReview;
userModel.likeReview = likeReview;
userModel.unlikeReview = unlikeReview;

function createUser(user) {
  return userModel.create(user);
}

function findUserById(userId) {
  return userModel.findById(userId);
}

function findUserByFacebookId(facebookId) {
  return userModel.findOne({'facebook.id': facebookId});
}

function findUserByUsername(username) {
  return userModel.findOne({username:username});
}

function findUserByCredentials(username, password) {
  return userModel.findOne({username: username, password: password});
}

function updateUser(userId,user) {
  return userModel.findByIdAndUpdate(userId,user,{new: true, safe: true})
    .then((newUser) => {
      let newName = newUser.username;
      for (let i = 0; i < newUser.reviews.length; i++) {
        newUser.reviews[i].reviewerName = newName;
      }
      return newUser.save();
    });
}

function deleteUser(userId){
  return userModel.findByIdAndRemove(userId);
}

function followUser(curr, target) {
  return userModel.findOne({username:curr})
    .then(function (currUser) {
      userModel.findOne({username:target})
        .then(function (target) {
          currUser.following.push(target);
          target.follower.push(currUser);
          currUser.save();
          target.save();
        })
    })
}

function unfollowUser(curr, target) {
  return userModel.findOne({username:curr})
    .then(function (currUser) {
      userModel.findOne({username:target})
        .then(function (target) {
          for (var i = 0; i < target.follower.length; i++) {
            if (target.follower[i].equals(currUser._id)) {
              target.follower.splice(i, 1);
              target.save();
              break;
            }
          }
          for (var i = 0; i < currUser.following.length; i++) {
            if (currUser.following[i].equals(target._id)) {
              currUser.following.splice(i, 1);
              currUser.save();
              break;
            }
          }
        })
    });
}

function findAllUsers() {
  return userModel.find();
}

function addToFavorite(userId, movieId) {
  return userModel.findUserById(userId)
    .then( (user) => {
      movieModel.findMovieById(movieId)
        .then((movie) => {
          user.favorite.push(movie);
          user.save();
        })
    })
}

function deleteFavorite(userId, movieId) {
  return userModel.findUserById(userId)
    .then( (user) => {
      for (let i = 0; i < user.favorite.length; i++) {
        if (user.favorite[i]._id.equals(movieId)) {
          user.favorite.splice(i, 1);
          return user.save();
        }
      }
    })
}

function addReview(userId, reviewId) {
  return userModel.findUserById(userId)
    .then( (user) => {
      reviewModel.findReviewById(reviewId)
        .then((review) => {
          user.reviews.push(review);
          user.save();
        })
    });
}

function deleteReview(userId, reviewId) {
  return userModel.findUserById(userId)
    .then( (user) => {
      for (let i = 0; i < user.reviews.length; i++) {
        if (user.reviews[i]._id.equals(reviewId)) {
          user.reviews.splice(i, 1);
          return user.save();
        }
      }
    });
}

function likeReview(userId, reviewId) {
  return userModel.findUserById(userId)
    .then( (user) => {
      user.likedReview.push(reviewId);
      user.save();
    });
}

function unlikeReview(userId, reviewId) {
  return userModel.findUserById(userId)
    .then( (user) => {
      for (let i = 0; i < user.likedReview.length; i++) {
        if (user.likedReview[i].equals(reviewId)) {
          user.likedReview.splice(i, 1);
          return user.save();
        }
      }
    });
}



module.exports = userModel;
