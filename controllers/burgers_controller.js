var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var burgersObject = {
        burgers: data
      };
      console.log(burgersObject);
      res.render("index", burgersObject);
    });
  });

  module.exports = router;