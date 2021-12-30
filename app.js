const express=require("express");
const bodyParser=require("body-parser");
var nodemailer = require('nodemailer');


const app=express();

var path = require("path");

var port=process.env.PORT || 7000;

app.use(express.static(__dirname + '/public'));


app.use(bodyParser.urlencoded({
  extended:true
}));
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "opusbotics@gmail.com",
    pass: "opusbotics123"
  }
});





app.get("/", function(req,res){
    res.sendFile(path.join(__dirname+ '/index.html'));
  });
  
 
  
  app.post("/", function(req,res){
   
      
      var mailOptions = {
        from: "opusbotics@gmail.com",
        to: "20bec024@iiitdwd.ac.in,20bec023@iiitdwd.ac.in",
        subject: req.body.subject+' customer email: '+req.body.email,
        text: req.body.name+req.body.message
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          
          console.log('Email sent: ' + info.response);
          
        }
      });
      res.sendFile(path.join(__dirname+ '/index.html'));
  });
  
//   app.post("/login", function(req,res){
//     const username=req.body.username;
//     const password=req.body.password;
  
//     User.findOne({email:username}, function(err, foundUser){
//       if (err){
//         console.log(err);
//       }else{
//         if (foundUser){
//           if (foundUser.password===password){
//             res.sendFile(path.join(__dirname+ '/chillpill2.html'));
//           }
//       }
//       }
//     });
//   });

app.listen(port,function() {
    console.log("Server started on port 7000.");
  });



//   var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'youremail@gmail.com',
//       pass: 'yourpassword'
//     }
//   });
  
//   var mailOptions = {
//     from: 'youremail@gmail.com',
//     to: 'myfriend@yahoo.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
//   };
  
//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });