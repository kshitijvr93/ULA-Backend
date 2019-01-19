var express = require('express');
let val = require('./upload');
var con = val.con;
var router = express.Router();


router.put("/:id", function(req, res) {
    
    var response = { };
    con.query("UPDATE rating SET Name = "+req.body.Name+"WHERE Id = "+req.params.id, function (err, result) {
    console.log("1 record updated");
  });
    
  
  
    
    
  });

  module.exports = router;