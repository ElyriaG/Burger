const express = require("express");
let burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        //   console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
            req.body.burger_name, req.body.devoured
        ], function (result) {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
        });
});


router.put("/api/burgers/:id/:devoured" , function (req, res) {
    var id = "id = " + req.params.id;
    let eaten = "devoured = " + req.params.devoured;

    console.log(id + " | " + eaten);
    
    if (req.body.devoured === false) {
        burger.update({
            devoured: true
        }, condition,
            function (result) {
                if (result.changedRows == 0) {
                    // If no rows were changed, then the ID must not exist, so 404
                    return res.status(404).end();
                } else {
                    res.status(200).end();
                }
            });
    } else {
        burger.update({
            devoured: false
        }, condition,
            function (result) {
                if (result.changedRows == 0) {
                    // If no rows were changed, then the ID must not exist, so 404
                    return res.status(404).end();
                } else {
                    res.status(200).end();
                }
            });
    }
});

module.exports = router;