// var orm = require("../config/orm.js");

// var burger = {
//   all: function (cb) {
//     orm.all("burgers", function (res) {
//       cb(res);
//     });
//   },
//   create: function (name, cb) {
//     orm.create("burgers", [
//       "burger_name", "devoured"
//     ], [
//       name, false
//     ], cb);
//   },
//   update: function (id, cb) {
//     var condition = "id=" + id;
//     orm.update("burgers", {
//       devoured: true
//     }, condition, cb);
//   }
// };

// module.exports = burger;

// import the ORM to create functions that will interact with the database. 
var orm = require('../config/orm.js')

var burger = {
  all: function (cb) {
    orm.selectAll('burgers', function (res) {
      cb(res);
    })
  }, create: function (cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, function (res) {
      cb(res);
    });
  }, update: function (condition, cb) {
    orm.updateOne('burgers', condition, function (res) {
      cb(res);
    });
  }
};

module.exports = burger;