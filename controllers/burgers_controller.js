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
    // create string appending another variable string
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
   console.log({devoured: req.body.devoured})
    // arguemnts are object, string, callback
    burger.updateOne({devoured: req.body.devoured}, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  router.post("/api/burgers/", function(req, res) {
    
  burger.insertOne(req.body.name, function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
    // console.log(result)
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("yep");
  cat.delete(condition, function(result){
    
      res.status(200).end();
    
  })
});
  
  module.exports = router;