var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("main");
})

app.listen(port, function() {
    console.log('Unicon2018 is running:' + port);
});