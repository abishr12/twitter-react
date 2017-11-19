var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var twitterSearch = require("../models/twitter-search.js");

// Create all our routes and set up logic within those routes where required.

router.get("/api/:twitterName", function(req, res) {
  //console.log(req.params);

  twitterName = req.params.twitterName;

  twitterSearch(twitterName, function(result) {
    res.json(result);
  });
});

// Export routes for server.js to use.
module.exports = router;
