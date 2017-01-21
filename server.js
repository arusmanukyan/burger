// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var methodOverride = require("method-override");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

app.use(express.static(process.cwd() + "/public"));

app.use(methodOverride("_method"));
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultlayout: "main"}));
app.set("view engine", "handlebars");

var connection = require("./config/connection.js");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, function(){
	console.log("Listening to port " + PORT);
});