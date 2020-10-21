// complete...
const express = require("express");
var router = express.Router();

var burger = require("../models/burger");

router.get("", (req, res) => {
    burger.selectAll((data) => {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    })
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne(
        ["burger_name"],
        [req.body.burger_name],
        (result) => {
            res.json({ id: result.insertId })
        });
});

router.put("/api/burgers/:id", (req, res) => {
    var condition = "id = " + req.params.id;
    burger.updateOne({ devoured: true }, condition, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
});

module.exports = router;