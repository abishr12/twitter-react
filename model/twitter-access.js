twitterSearch = function(twitterHandle) {
  var client = new Twitter({
    consumer_key: apiKeys.twitterKeys.consumer_key,
    consumer_secret: apiKeys.twitterKeys.consumer_secret,
    access_token_key: apiKeys.twitterKeys.access_token_key,
    access_token_secret: apiKeys.twitterKeys.access_token_secret
  });
  var params = { screen_name: twitterHandle };
  client.get("statuses/user_timeline", params, function(
    error,
    tweets,
    response
  ) {
    if (!error) {
      for (var i = 0; i < 10; i++) {
        console.log(tweets[i]);
        //console.log(tweets[i].created_at, "\n", tweets[i].text);
      }
    }
  });
};

module.exports = twitterSearch;
