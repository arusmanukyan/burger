var express = require("express");

var router = expreess.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){
	res.redirect("/burgers");
});

router.get("/burgers", function(req, res){
	burger.selectAll(function(data){
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsOject);
	});
});

router.post("/burgers/update/:id", function(req, res){
	burger.create([
		"name", "devoured"
		],[
			res.redirect("/burgers");
		]);
});

router.put("/burger/update/:id", function(req, res){
	var condition = "id = " + req.params.id;
	console.log("condition", condition);

	burgers.update({
		devoured: req.body.devoured
	}, condition, function(){
		res.redirect("/burgers");
	});
});

module.exports = router;