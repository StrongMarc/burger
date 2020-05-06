var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var burgersObject = {
        burgers: data
      };
      res.render("index", burgersObject);
    });
  });

  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
    conditionId = parseInt(req.params.id)
    console.log("bc22")
    console.log(req.body.devoured)
    burger.updateOne({devoured: req.body.devoured}, conditionId, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  
  module.exports = router;