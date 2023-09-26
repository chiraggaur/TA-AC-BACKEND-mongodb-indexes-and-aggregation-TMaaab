var express = require("express");
var router = express.Router();
var Article = require("../models/article");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.post("/new", function (req, res, next) {
  var data = req.body;
  // console.log(data);
  Article.create(data);
  res.send("data stored");
});
module.exports = router;
