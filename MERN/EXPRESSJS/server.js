const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/demo.html");
});

app.get("/home", (req, res) => {
  res.send("<h1>Hello Home page </h1>");
});

app.get("/myprofile", (req, res) => {
  res.send("<h1>Hello Profile page</h1>");
});

app.post("/", (req, res) => {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("THanks for posting here!! Result is =" + result);
});

//start the server
app.listen(3000, function() {
  console.log("<h1>The expressJs server has been started successfully !!</h1>");
});
