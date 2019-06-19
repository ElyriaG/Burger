const express = require("express");
let burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
    //   console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });


router.delete("/api/burgers:id", function (req, res) {
    let condition = "id = " + req.params.id;

});

module.exports = router;