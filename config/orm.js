// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, tableInput, function(err, result) {
        // console.log(result)
        if (err) throw err;
          cb(result)
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
  
// Export the orm object for the model (burger.js).
  module.exports = orm;