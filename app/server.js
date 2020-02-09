require("dotenv").config();
const express = require("express");
const app = express();
const keys = require("./config/keys");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");

//Allow cross domains
const allowCrossDomain = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // intercept OPTIONS method
  if ("OPTIONS" == req.method) {
    res.send(200);
  } else {
    next();
  }
};
app.use(allowCrossDomain);

const db = keys.databaseURI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected."))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routing
const api = require("./api/routes");
app.use("/api", api);



/*
const QRSchema = require('./database/models/QRCodes');

  function fill(times){
      i = 0;
      console.log("Entering loop")
      for(i = 0;i < times; i++){
          var authnum = (Math.random()*1000000000) + 8999999999;
          if(i%2 ==0){
              var point = 050
          }else{
             var point = 100
          }
          //console.log(Math.floor(authnum).toString())
          
          console.log("creating db object and assigning " + point.toString())
          const code = QRSchema({
              AuthToken: Math.floor(authnum).toString(),
              Points: point.toString()
          });
          code.save(function(err,code){
              if(err) throw err;
              console.log(code)
          });
          
      }
  
  }
  
  fill(50);
  */
  

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on Port " + PORT);
});
