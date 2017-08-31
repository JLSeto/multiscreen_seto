var dt = require('./myfirstmodule');
var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var crypto = require('crypto');

var socketCodes = {};

app.use(express.static(__dirname + '/public'));


app.get('/hello', function(req, res){
  //res.send(dt.myDateTime());
  console.log("I received a GET request");

  person3 ={
  	name: "loolol",
  	email: "lol@gmail.com",
  	number: "3333"
  };

  var contactlist = [person3];
  res.json(contactlist);

});

app.get('/hello2', function(req, res){
  //res.send(dt.myDateTime());
  console.log("I received a GET request2");

  person1 ={
  	name: "asdfasdf",
  	email: "lol@gmail.com",
  	number: "3333"
  };

  var contactlist2 = [person1];
  res.json(contactlist2);

});

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('devicet', function(msg){
    console.log('device type: ', msg);

    if(msg == 'pc'){
      var code = crypto.randomBytes(3).toString('hex');
      socketCodes[code] = this;
      socket.code = code;
      console.log({code: code});
      //Show code on PC
      //socket.emit('showmecode',{code: code});
    }

  });
});


http.listen(process.env.PORT || 8000, function(){
  console.log('listening on *:8000');
});
