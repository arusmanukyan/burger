var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){
	res.redirect("/burger");
});

router.get("/burger", function(req, res){
	burger.selectAll(function(data){
		var hbsObject = {
			burg: data
		};
		console.log(hbsObject);
		res.render("index", hbsOject);
	});
});

router.post("/burger/update/:id", function(req, res){
	burger.create([
		"name", "devoured"
		],[
			res.redirect("/burger")
		]);
});

router.put("/burger/update/:id", function(req, res){
	var condition = "id = " + req.params.id;
	console.log("condition", condition);

	burger.update({
		devoured: req.body.devoured
	}, condition, function(){
		res.redirect("/burger");
	});
});

module.exports = router;