var express = require('express');
let val = require('./upload');
var con = val.con;
var router = express.Router();


router.get("/", function(req, res) {

    
    var response = { };
    con.query("SELECT * FROM image", function (err, result) {
    if (err) throw err;
    var ranking = 1;
    result.forEach(function(element) {
    response[ranking] = {
        Id: element.Id, Description: element.Description, Score: element.Score
    };
    ranking += 1;
    });
    res.json(response);
  });
    
  
  
    
    
  });







module.exports = router;
