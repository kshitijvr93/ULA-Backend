var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var bodyParser = require("body-parser");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "edurate"
});


// Body Parser Middleware

router.use(bodyParser.json());

router.post("/", function(req, res) {
     
  var sql = "INSERT INTO rating(Name,Quiz_Difficulty,Quiz_Frequency, HW_Difficulty , HW_Frequency , Test_Difficulty, Test_Frequency) VALUES ('"+req.body.Name+"',"+parseInt(req.body.Quiz_Difficulty)+","+ parseInt(req.body.Quiz_Frequency) +","+ parseInt(req.body.HW_Difficulty) +","+ parseInt(req.body.HW_Frequency) +","+ parseInt(req.body.Test_Difficulty)+","+ parseInt(req.body.Test_Frequency)+" )";
  con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");
  });
  
  
});






module.exports = router;
module.exports.con = con;