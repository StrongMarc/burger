// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(name, cb){
    // insertOne: function(name, devoured, cb){
        orm.insertOne("burgers", name, function(res) {
            cb(res);
        });
    },
    updateOne: function(devoured, id, cb){
        orm.updateOne("burgers", devoured, id, function(res) {
            cb(res);
        });
    }
}

// Export the database functions for the burger_controller.js
module.exports = burger;
