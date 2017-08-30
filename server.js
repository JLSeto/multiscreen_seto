var dt = require('./myfirstmodule');
var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));


app.get('/hello', function(req, res){
  //res.send(dt.myDateTime());
  console.log("I received a GET request");

  person3 ={
  	name: "Tim",
  	email: "lol@gmail.com",
  	number: "3333"
  };

  var contactlist = [person3];
  res.json(contactlist);

});

io.on('connection', function(socket){
  console.log('a user connected');
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
