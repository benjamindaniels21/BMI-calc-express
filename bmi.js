const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  let height = Number(req.body.height);
  let weight = Number(req.body.weight);
  let bmi = (703 * weight) / (height * height);
  let message;

  if (bmi >= 25) {
    message = "You could lose a bit";
  } else if (bmi > 18.5 && bmi < 25) {
    message = "You're in a healthy range";
  } else {
    message = "You're underweight";
  }

  res.send(`Your current BMI is ${bmi}. ${message}.`);
});

app.listen(3000, function () {
  console.log("server running on port 3000");
});
