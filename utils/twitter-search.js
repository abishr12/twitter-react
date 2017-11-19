var Twitter = require("twitter");
var twitterKeys = require("./keys.js");
var client = require("../config/client.js");

var twitterSearch = function(twitterHandle, callback) {
  var params = { screen_name: twitterHandle };
  client.get("statuses/user_timeline", params, function(
    error,
    tweets,
    response
  ) {
    callback(tweets);
  });
};

module.exports = twitterSearch;
