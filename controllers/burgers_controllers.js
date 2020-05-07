var express = require('express');
var router = express.Router();

// import the model to use its database functions
var burger = require('../models/burger.js');

// create all our routes and set up logic within those routes
router.get('/', function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data
    };

    res.render('index', hbsObject);
    // ask about what is happening when we render hbsObject     
  });
});

router.post('/api/burgers/', function (req, res) {
  burger.create([
    'burger_name', 'devoured'
  ], [
    req.body.burger_name, '0'
  ], function (result) {
    // send back the ID of the new burger
    res.json({ id: result.insertId })
    // ask about how "result.insertId" works
  });
});

router.put('/api/burgers/:id', function (req, res) {
  var condition = `id = ${req.params.id}`
  burger.update(condition, function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;


// var express = require("express");

// var router = express.Router();
// var burger = require("../models/burger.js");

// // get route -> index
// router.get("/", function (req, res) {
//   res.redirect("/burgers");
// });

// router.get("/burgers", function (req, res) {
//   // express callback response by calling burger.selectAllBurger
//   burger.all(function (burgerData) {
//     // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
//     res.render("index", { burger_data: burgerData });
//   });
// });

// // post route -> back to index
// router.post("/burgers/create", function (req, res) {
//   // takes the request object using it as input for burger.addBurger
//   burger.create(req.body.burger_name, function (result) {
//     // wrapper for orm.js that using MySQL insert callback will return a log to console,
//     // render back to index with handle
//     console.log(result);
//     res.redirect("/");
//   });
// });

// // put route -> back to index
// router.put("/burgers/:id", function (req, res) {
//   burger.update(req.params.id, function (result) {
//     // wrapper for orm.js that using MySQL update callback will return a log to console,
//     // render back to index with handle
//     console.log(result);
//     // Send back response and let page reload from .then in Ajax
//     res.sendStatus(200);
//   });
// });

// module.exports = router;