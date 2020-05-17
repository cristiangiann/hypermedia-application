var express = require("express");
var app = express();
app.use(express.static('public'));

const mysql = require('mysql');
const dotenv = require('dotenv').config();

var con = mysql.createPool({
  connectionLimit : process.env.DB_CONLIMIT,
  host            : process.env.DB_HOST,
  user            : process.env.DB_USER ,
  password        : process.env.DB_PASSWORD ,
  database        : process.env.DB_DATABASE 
});

function validId(id){
  var letters = /^[0-9]+$/;
  if(id.match(letters)) return true;
  else{
    console.log("error in id: " + id);
    return false;
  }
}

app.get("/", function(req, res) {
} )

app.get("/association", function(req, res) {
    res.sendFile(__dirname + "/public/pages/association.html");
} )

app.get("/people", function(req, res) {
  res.sendFile(__dirname + "/public/pages/people.html");
} )

app.get("/musical-instruments", function(req, res) {
  res.sendFile(__dirname + "/public/pages/musical-instruments.html");
} )

app.get("/courses", function(req, res) {

    con.query('SELECT * FROM Musical_Instrument', function(err, result, fields){
        if(err) {
          console.log("errore")
          res.send(err);
        }
        if(result) res.send(result);
    })
    con.end();
})

app.get("/events", function(req, res) {
  res.sendFile(__dirname + "/public/pages/events.html");
} )

app.get("/contacts", function(req, res) {
  res.sendFile(__dirname + "/public/pages/contacts.html");
} )

app.get("/api/people", function(req, res) {
  con.query('SELECT * FROM Person', function(err, result, fields){
    if(err) {
      console.log("errore")
      res.send(err);
    }
    if(result) res.send(result);
  })
} )

app.get("/api/people/:id", function(req, res) {
  id = req.params.id;
  if(validId(id)){
    query = "SELECT * FROM Person WHERE id = " + req.params.id;
    console.log(query);
    con.query(query, function(err, result, fields){
      if(err) {
        console.log("errore")
        res.send(err);
      }
      if(result) res.send(result);
    })
  }
  else{
    res.send("Object not found");
  }
} )

app.get("/api/courses", function(req, res) {
  con.query('SELECT * FROM Course', function(err, result, fields){
    if(err) {
      console.log("errore")
      res.send(err);
    }
    if(result) res.send(result);
  })
} )

app.get("/api/courses/:id", function(req, res) {
  id = req.params.id;
  if(validId(id)){
    query = "SELECT * FROM Course WHERE id = " + req.params.id;
    con.query(query, function(err, result, fields){
      if(err) {
        console.log("errore")
        res.send(err);
      }
      if(result) res.send(result);
    })
  }
  else{
    res.send("Object not found");
  }
} )

app.get("/api/events", function(req, res) {
  con.query('SELECT * FROM Event', function(err, result, fields){
    if(err) {
      res.send(err);
    }
    if(result) res.send(result);
  })
} )

app.get("/api/events/:id", function(req, res) {
  id = req.params.id;
  if(validId(id)){
    query = "SELECT * FROM Event WHERE id = " + req.params.id;
    con.query(query, function(err, result, fields){
      if(err) {
        console.log("errore")
        res.send(err);
      }
      if(result) res.send(result);
    })
  }
  else{
    res.send("Object not found");
  }
} )

app.get("/api/musical-instruments", function(req, res) {
  con.query('SELECT * FROM Musical_Instrument', function(err, result, fields){
    if(err) {
      console.log("errore")
      res.send(err);
    }
    if(result) res.send(result);
  })
} )

app.get("/api/musical-instruments/:id", function(req, res) {
  id = req.params.id;
  if(validId(id)){
    query = "SELECT * FROM Musical_Instrument WHERE id = " + id;
    con.query(query, function(err, result, fields){
      if(err) {
        console.log("errore")
        res.send(err);
      }
      if(result) res.send(result);
    })
  }
  else{
    res.send("Object not found");
  }
} )

app.get("/api/*", function(req, res){
  res.send("404 API not found");
})

app.get("*", function(req, res){
    res.send("404 not found");
})

app.listen(3000, process.env.IP, function() {
    console.log("Sever is listening");
});
