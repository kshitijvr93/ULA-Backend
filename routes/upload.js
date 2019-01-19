var express = require('express');
var router = express.Router();
var multer = require('multer');
var mysql = require('mysql')
const vision = require('@google-cloud/vision');
const crypto = require('crypto');
const client = new vision.ImageAnnotatorClient();
const fileName = "C:\\Users\\kshit\\Downloads\\backend\\backend\\Images\\"
var con = mysql.createConnection({
  host: "localhost",
  user: "",
  password: "",
  database: "test"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to mysql");
});

var Storage = multer.diskStorage({
  destination: function(req, file, callback) {
      callback(null, "./Images");
  },
  filename: function(req, file, callback) {
      console.log(crypto.createHmac('sha256', file.fieldname + "_" + req.d + "_" + file.originalname)
                .update('ATLHACK')
                .digest('hex')
               );
      callback(null,
               crypto.createHmac('sha256', file.fieldname + "_" + req.d + "_" + file.originalname)
                .update('ATLHACK')
                .digest('hex')
               );
  }
});

var upload = multer({storage: Storage}).single('upimg');


router.post("/", function(req, res) {

    

  console.log("somebody is trying..");

  
  var d = Date.now();
  req.d = d;

  
  

  upload(req, res, function(err) {
      if (err) {
 console.log(err);
          return res.end("Something went wrong!");
      }
          
      var path = crypto.createHmac('sha256', req.file.fieldname + "_" + d + "_" + req.file.originalname)
      .update('ATLHACK')
      .digest('hex'); 
                
     var flag = 1;
      client
      .webDetection(fileName+path)
      .then(results => {
        const webDetection = results[0].webDetection;        
    
        if (webDetection.webEntities.length) {

          console.log(`Web entities found: ${webDetection.webEntities.length}`);
          webDetection.webEntities.forEach(webEntity => {
            
            if(flag ==1){
              var val1 = webEntity.description;
              var val2 = webEntity.score;
              var sql = "INSERT INTO image (Images, Description, Score) VALUES ('" + path + "cvtd.png'" + ",'" + val1 + "','" + val2 + "' )";
              con.query(sql, function (err, result) {
              if (err) throw err;
              console.log("1 record inserted");
              });

            }
            flag = 0;
            
            console.log(webEntity.description);
            //console.log(`  Description: ${webEntity.description}`);
            //console.log(`  Score: ${webEntity.score}`);
            
          });
        }
    
        
      })
      .catch(err => {
        console.error('ERROR:', err);
      });

      
      /*
      
      
      */
       


      
     

      //return res.end("File uploaded sucessfully!.");
      res.redirect('/');
  });

  
  
      
  


  
  
});






module.exports = router;
module.exports.con = con;