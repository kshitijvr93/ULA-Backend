var express = require('express');
let val = require('./upload');
var con = val.con;
var router = express.Router();



router.get("/", function(req, res) {

   console.log("blah!"); 
  // using spawn instead of exec, prefer a stream over a buffer
  // to avoid maxBuffer issue
  var spawn = require("child_process").spawn;
  var process = spawn('python', ["../test.py"]);
  process.stdout.on('data', function (data) {
    res.send(data.toString());
  });
    
  
  
    
});


module.exports = router;