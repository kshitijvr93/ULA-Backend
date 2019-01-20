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
        
        Name: element.Name , Professor: element['Professor'], Difficulty: element['Difficulty'], Clarity: element['Clarity'] , Grade: element['Grade'] , Rating: element['Rating']
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
        Name: element.Name , Professor: element['Professor'], Difficulty: element['Difficulty'], Clarity: element['Clarity'] , Grade: element['Grade'] , Rating:element['Rating']
    }
    });
    res.json(response);
  });
    
  
  
    
    
  });





module.exports = router;
