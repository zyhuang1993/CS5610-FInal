var mongoose =  require('mongoose');
var userSchema = require('./user.schema.server');

var userModel = mongoose.model('User', userSchema);

userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findUserByUsername = findUserByUsername;
userModel.findUserByCredentials = findUserByCredentials;
userModel.updateUser = updateUser;
userModel.deleteUser = deleteUser;
userModel.findUserByFacebookId = findUserByFacebookId;
userModel.followUser = followUser;
userModel.unfollowUser = unfollowUser;

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
  return userModel.findByIdAndUpdate(userId,user,{new: true, safe: true});
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
            if (target.follower[i].username === curr) {
              target.follower.splice(i, 1);
              target.save();
              break;
            }
          }
          for (var i = 0; i < currUser.following.length; i++) {
            if (currUser.following[i].username === target) {
              currUser.following.splice(i, 1);
              currUser.save();
              break;
            }
          }
        })
    });
}

module.exports = userModel;
