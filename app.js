var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use("/stylesheets",express.static(__dirname + "/stylesheets"));
app.use("/scripts",express.static(__dirname + "/scripts"));
app.use("/semantic",express.static(__dirname + "/semantic"));
app.use("/speakers_images",express.static(__dirname + "/speakers_images"));

app.get("/", function(req, res){
	res.render("main");
})

// app.listen(port, function() {
//     console.log('Unicon2018 is running:' + port);
// });

app.listen(process.env.PORT, process.env.IP);

// app.listen(3000);
