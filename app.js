var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/semantic"));

app.get("/", function(req, res){
	res.render("main");
})

// app.listen(port, function() {
//     console.log('Unicon2018 is running:' + port);
// });

// app.listen(process.env.PORT, process.env.IP);

app.listen(3000);
