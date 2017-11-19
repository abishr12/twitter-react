var client = require("../config/client.js");

var twitterRoute = "statuses/user_timeline";

var twitterSearch = function(twitterHandle, callback) {
  var params = { screen_name: twitterHandle };
  client.get(twitterRoute, params, function(error, tweets, response) {
    callback(tweets);
  });
};

module.exports = twitterSearch;
