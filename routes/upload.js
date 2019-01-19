var express = require('express');
var router = express.Router();
var mysql = require('mysql')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "edurate"
});


router.post("/", function(req, res) {

    

  console.log("somebody is trying..");
  var sql = "INSERT INTO rating(Name,Quiz_Difficulty,Quiz_Frequency, HW_Difficulty , HW_Frequency , Test_Difficulty, Test_Frequency) VALUES ('John', "+5+","+5+","+5+","+5+","+5+","+5+" )";
  con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");
  });
  
  
});






module.exports = router;
module.exports.con = con;