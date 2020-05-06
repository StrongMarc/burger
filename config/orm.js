// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, tableInput, function(err, result) {
        console.log("orm8")
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
      var queryString = "UPDATE " + table;

      queryString += " SET ";
      queryString += objToSql(devoured);
      queryString += " WHERE ";
      queryString += id;
    
      connection.query(
        queryString, [table, devoured, id], function(err, result) {
          if (err) throw err;
          console.log(result);
        }
      );
    }
  };
  
  // Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  // for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    // }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}
// Export the orm object for the model (burger.js).
  module.exports = orm;