var express = require('express');
let val = require('./upload');
var con = val.con;
var router = express.Router();



router.delete("/:id", function(req, res) {    
    
    con.query("DELETE FROM rating where Id ="+ req.params.id, function (err, result) {
    if (err) throw err;    
    console.log("1 record deleted");
  });    
    
  });


  module.exports = router;