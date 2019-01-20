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

  var sql = "INSERT INTO rating(Name,Professor,Difficulty,Clarity,Grade,Rating) VALUES ('"+req.body.Name+"',"+parseInt(req.body.Professor)+","+ parseInt(req.body.Difficulty) +","+ parseInt(req.body.Clarity) +",'"+req.body.Grade+"',"+ req.body.Rating+" )";
  con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");
  });
  
  
});






module.exports = router;
module.exports.con = con;