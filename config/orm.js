// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput) {
        console.log(tableInput)
    //   var queryString = "SELECT * FROM ??";
      connection.query("SELECT * FROM ??", tableInput, function(err, result) {
        if (err) throw err;
        console.table(result);
      });
    },
    insertOne: function(table, name, devoured) {
      var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?, ?)";
      console.log(queryString);
      connection.query(queryString, [table, name, devoured], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    updateOne: function(table, devoured, id) {
      var queryString =
        "UPDATE ?? SET devoured = ? WHERE id = ?";
      connection.query(
        queryString, [table, devoured, id], function(err, result) {
          if (err) throw err;
          console.log(result);
        }
      );
    }
  };
  

  module.exports = orm;