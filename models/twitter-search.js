var Twitter = require("twitter");
var twitterKeys = require("./keys.js");

var twitterSearch = function(twitterHandle, cb) {
  var client = new Twitter({
    consumer_key: twitterKeys.consumer_key,
    consumer_secret: twitterKeys.consumer_secret,
    access_token_key: twitterKeys.access_token_key,
    access_token_secret: twitterKeys.access_token_secret
  });
  var params = { screen_name: twitterHandle };
  client.get("statuses/user_timeline", params, function(
    error,
    tweets,
    response
  ) {
    cb(tweets);
  });
};

module.exports = twitterSearch;
