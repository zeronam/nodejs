var express = require('express');
var app= express();
app.listen(3000);

// npm install body-parser
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// multer upload file
var multer = require('multer');

// config EJS
app.set("view engine", "ejs");
app.set("views", "./views");

// app.get("/home", function(req,res){
//   res.render("home");
// })
//
// app.get("/login", function(req, res){
//   res.send("<font color=red>Test</font>");
// });
// app.get("/login",urlencodedParser, function(req, res){
//   var user = req.body.username;
//   var password = req.body.password;
//   res.send("Username: " + user + " Password: " + password);
// });
//
// app.get("/tintuc/:id", function (req, res){
//   var i = req.params.id;
//   res.send(i);
// })
//
// app.get("/detail", function(req, res){
//   res.render("detail", {hoten: "Nam Nguyen", namsinh: ["1989", "1990"]});
// });

app.get("/form", function(req,res){
  res.render("form");
})

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})

var upload = multer({ storage: storage });
app.post('/upload', upload.single('file'), function(req,res){
  if (req.file) {
   console.log(req.file);
   return res.send('Thank you for the file');
 }
 res.send('Missing file');
})
