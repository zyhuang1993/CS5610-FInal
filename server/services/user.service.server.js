module.exports = function (app) {
  var userModel = require('../models/user/user.model.server');
  var passport = require('passport');
  var bcrypt = require("bcrypt-nodejs");
  var reviewModel = require('../models/review/review.model.server');
  var LocalStrategy = require('passport-local').Strategy;
  var FacebookStrategy = require('passport-facebook').Strategy;
  var facebookConfig = {
    clientID : process.env.FACEBOOK_CLIENT_ID || 384989495419774,
    clientSecret : process.env.FACEBOOK_CLIENT_SECRET || '2a4b389fb0be50876d0b038616845c26',
    callbackURL : process.env.FACEBOOK_CALLBACK_URL || '/auth/facebook/callback'
  };

  passport.serializeUser(serializeUser);
  function serializeUser(user, done) {
    done(null, user);
  }

  passport.deserializeUser(deserializeUser);
  function deserializeUser(user, done) {
    userModel.findUserById(user._id)
      .then(
        function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        } );
  }

  passport.use(new LocalStrategy(localStrategy));

  function localStrategy(username, password, done) {
    userModel.findUserByUsername(username)
      .then(
        function(user) {
          if(user && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          } else {
            return done(null, false); } },
        function(err) {
          if (err) {
            return done(err);
          }
        });
  }


  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

  app.post('/api/user', createUser);
  app.post('/api/login', login);
  app.post('/api/logout', logout);
  app.post ('/api/register', register);
  app.get('/api/user/username/:username', findUserByUserName);
  app.get('/api/user', findUserByCredentials);
  app.get('/api/user/:uid', findUserById);
  app.put('/api/user/:uid', updateUserById);
  app.delete('/api/user/:uid', deleteUserById);
  app.post('/api/loggedIn', loggedIn);
  app.get ('/facebook/login', passport.authenticate('facebook', { scope : 'email' }));
  app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/#/profile', failureRedirect: '/#/login' }));
  app.get('/api/follower/:currUser/following/:target', follow);
  app.delete('/api/follower/:currUser/following/:target', unfollow);
  app.get('/api/allUsers', findAllUsers);
  app.get('/api/allFollowers/:username', findAllFollowers);
  app.get('/api/allFollowings/:username', findAllFollowings);
  app.get('/api/user/:userId/favorite/:movieId', addToFavorite);
  app.delete('/api/user/:userId/favorite/:movieId', deleteFavorite);
  app.get('/api/user/:userId/favorite/:movieId', addToFavorite);
  app.delete('/api/user/:userId/favorite/:movieId', deleteFavorite);
  app.get('/api/user/:userId/review/:reviewId/', addReview);
  app.delete('/api/user/:userId/review/:reviewId/', deleteReview);
  app.get('/api/user/:userId/likeReview/:reviewId/', likeReview);
  app.delete('/api/user/:userId/likeReview/:reviewId/', unlikeReview);

  function follow(req, res) {
    var currUser = req.params['currUser'];
    var target = req.params['target'];

    userModel.followUser(currUser, target)
      .then(
        function (response) {
          res.status(200).send({message:"follow successfully"});
        },
        function (err) {
          console.log(err);
          res.status(200).send({message:"follow unsuccessfully"})
        }
      );
  }

  function unfollow(req, res) {
    var currUser = req.params['currUser'];
    var target = req.params['target'];

    userModel.unfollowUser(currUser, target)
      .then(
        function (response) {
          res.status(200).send({message:"follow successfully"});
        },
        function (err) {
          console.log(err);
          res.status(200).send({message:"follow unsuccessfully"});
        }
      );
  }

  function findAllFollowers(req, res) {
    var username = req.params['username'];
    userModel
      .findUserByUsername(username)
      .then(function (target) {
          let followers = [];
          let index = 0;
          let now = userModel.findUserById(target.follower[index]);
          for (var i = 1; i < target.follower.length; i++) {
            now = now
              .then((user) => {
                followers.push(user);
                index++;
                return userModel.findUserById(target.follower[index]);
              })
          }
          return now
            .then((user) => {
                if (user) {
                  followers.push(user);
                }
                res.json(followers);
              }
            )
        },
        function (err) {
          console.log(err);
          res.status(500).send(err);
        });
  }

  function findAllFollowings(req, res) {
    var username = req.params['username'];
    userModel
      .findUserByUsername(username)
      .then(function (target) {
          let followings = [];
          let index = 0;
          let now = userModel.findUserById(target.following[index]);
          for (var i = 1; i < target.following.length; i++) {
            now = now
              .then((user) => {
                followings.push(user);
                index++;
                return userModel.findUserById(target.following[index]);
              })
          }
          return now
            .then((user) => {
                if (user) {
                  followings.push(user);
                }
                res.json(followings);
              }
            )
        },
        function (err) {
          console.log(err);
          res.status(500).send(err);
        });
  }

  function facebookStrategy(token, refreshToken, profile, done) {
    userModel.findUserByFacebookId(profile.id)
      .then(
        function(user) {
          if(user) {
            return done(null, user);
          } else {
            var names = profile.displayName.split(" ");
            var newFacebookUser = {
              username: names[0] + " " + names[1],
              img: "https://images.unsplash.com/photo-1483691278019-cb7253bee49f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
              facebook: { id: profile.id, token: token },
              type: "Unpaid"};
            return userModel.createUser(newFacebookUser); } },
        function(err) {
          if (err) {
            return done(err);
          }
        })
      .then(
        function(user){
          return done(null, user);
        },
        function(err){
          if (err) {
            return done(err);
          }
        });
  }

  function loggedIn(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  function login(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(200).send({message: 'User not found or Wrong password!'});
      }
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        return res.json(user);
      });
    })(req, res, next);
  }

  function logout(req, res) {
    req.logOut();
    res.status(200).send();
  }

  function register(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);

    userModel.findUserByUsername(user.username).then(
      function(response) {
        if (!response) {
          userModel.createUser(user)
            .then(
              function (user) {
                if (user) {
                  req.logIn(user,
                    function (err) {
                      if (err) {
                        res.status(200).send({message: 'User is already exist!'});
                      } else {
                        res.json(user);
                      }
                    });
                }
              }
            );
        } else {
          res.status(200).send({message: 'User is already exist!'});
        }
      });
  }

  function createUser(req, res) {
    var user = new Object();
    user.username = req.body.username;
    user.password = req.body.password;
    user.img = req.body.img;
    user.type = req.body.type;
    userModel.findUserByUsername(user.username).then(
      function(response) {
        if (!response) {
          userModel
            .createUser(user)
            .then(function(user) {
              res.status(200).send(user);
            }, function(error){
              console.log('create user error: ' + error);
              res.status(200).send({message: 'User is already exist!'});
            });
        } else {
          res.status(200).send({message: 'User is already exist!'});
        }
      }
    );
  }

  function findUserByUserName(req, res) {
    let username = req.params['username'];
    userModel
      .findUserByUsername(username)
      .then(function(user) {
        res.status(200).send(user);
      }, function(error){
        console.log('find user by username error: ' + error);
        res.status(200).send({message: 'User not found!'});
      });
  }

  function findUserByCredentials(req, res) {
    let username = req.query.username;
    let password = req.query.password;
    userModel
      .findUserByCredentials(username, password)
      .then(function(user) {
        res.status(200).send(user);
      }, function(error){
        console.log('find user by credentials error: ' + error);
        res.status(200).send({message: 'User not found or Wrong password!'});
      });
  }

  function findUserById(req, res) {
    var userId = req.params['uid'];
    userModel
      .findUserById(userId)
      .then(function(user) {
        res.status(200).send(user);
      }, function(error){
        console.log('find user by Id error: ' + error);
        res.status(200).send({message: 'User does exist!'});
      });
  }

  function updateUserById(req, res) {
    var userId = req.params['uid'];
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel
      .updateUser(userId, user)
      .then(function(user) {
          let index = 0;
          let now = reviewModel.updateReview(user.reviews[index]._id, user.reviews[index]);
          for (let i = 1; i < user.reviews.length; i++) {
            now = now
              .then((review) => {
                index++;
                return reviewModel.updateReview(user.reviews[index]._id, user.reviews[index]);
              })
          }
          return now
            .then((review) => {
                res.json(user);
              }
            )
        }, function(error){
        console.log('update user by Id error: ' + error);
        res.status(200).send({message: 'User not found!'});
      });
  }

  function deleteUserById(req, res) {
    var userId = req.params['uid'];
    userModel.findUserById(userId)
      .then()
    userModel
      .deleteUser(userId)
      .then(function(user) {
        res.status(200).send(user);
      }, function(error){
        console.log('delete user by Id error: ' + error);
        res.status(200).send({message: 'User not found!'});
      });
  }

  function findAllUsers(req, res) {
    userModel.findAllUsers()
      .then(
        function(users) {
          res.json(users);
        },
        function (err) {
          console.log(err);
          res.status(500).send(err);
        }
      )
  }

  function addToFavorite(req, res) {
    var userId = req.params['userId'];
    var movieId = req.params['movieId'];
    userModel.addToFavorite(userId, movieId)
      .then(
        function (response) {
          res.status(200).send({message: 'Add to favorite!'});
        },
        function (err) {
          console.log(err);
          res.status(500).send(err);
        }
      )
  }

  function deleteFavorite(req, res) {
    var userId = req.params['userId'];
    var movieId = req.params['movieId'];
    userModel.deleteFavorite(userId, movieId)
      .then(
        function (response) {
          res.status(200).send({message: 'Delete favorite!'});
        },
        function (err) {
          console.log(err);
          res.status(500).send(err);
        }
      )
  }

  function addReview(req, res) {
    var userId = req.params['userId'];
    var reviewId = req.params['reviewId'];
    userModel.addReview(userId, reviewId)
      .then(
        function (response) {
          res.status(200).send({message: 'Add Review!'});
        },
        function (err) {
          console.log(err);
          res.status(500).send(err);
        }
      )
  }

  function deleteReview(req, res) {
    var userId = req.params['userId'];
    var reviewId = req.params['reviewId'];
    userModel.deleteReview(userId, reviewId)
      .then(
        function (response) {
          res.status(200).send({message: 'Delete Review!'});
        },
        function (err) {
          console.log(err);
          res.status(500).send(err);
        }
      )
  }

  function likeReview(req, res) {
    var userId = req.params['userId'];
    var reviewId = req.params['reviewId'];
    userModel.likeReview(userId, reviewId)
      .then(
        function (response) {
          res.status(200).send({message: 'Like the review!'});
        },
        function (err) {
          console.log(err);
          res.status(500).send(err);
        }
      )
  }

  function unlikeReview(req, res) {
    var userId = req.params['userId'];
    var reviewId = req.params['reviewId'];
    userModel.unlikeReview(userId, reviewId)
      .then(
        function (response) {
          res.status(200).send({message: 'Unlike the review!'});
        },
        function (err) {
          console.log(err);
          res.status(500).send(err);
        }
      )
  }
}
