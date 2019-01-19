var express = require('express');
let val = require('./upload');
var con = val.con;
var router = express.Router();


router.get("/", function(req, res) {

    
    var response = { };
    con.query("SELECT * FROM rating", function (err, result) {
    if (err) throw err;
    
    result.forEach(function(element) {
    response[element.Id] = {
        Name: element.Name , Quiz_Difficulty: element['Quiz_Difficulty'], Quiz_Frequency: element['Quiz_Frequency'], HW_Difficulty: element['HW_Difficulty'] , HW_Frequency: element['HW_Frequency'] , Test_Difficulty: element['Test_Difficulty'], Test_Frequency: element['Test_Frequency']
    };
    
    });
    res.json(response);
  });
    
  
  
    
    
  });

router.get("/:id", function(req, res) {

    
    var response = { };
    con.query("SELECT * FROM rating where Id ="+ req.params.id, function (err, result) {
    if (err) throw err;
    
    result.forEach(function(element) {
    response = {
        Name: element.Name , Quiz_Difficulty: element.Quiz_Difficulty, Quiz_Frequency: element.Quiz_Frequency, HW_Difficulty: element.HW_Difficulty , HW_Frequency: element.HW_Frequency , Test_Difficulty: element.Test_Difficulty, Test_Frequency: element.Test_Frequency};
    
    });
    res.json(response);
  });
    
  
  
    
    
  });





module.exports = router;
