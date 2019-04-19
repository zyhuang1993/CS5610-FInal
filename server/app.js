module.exports = function(app) {
  require('./services/user.service.server')(app);
  require('./services/movie.service.server')(app);
  // require('./services/review.service.server')(app);
};
