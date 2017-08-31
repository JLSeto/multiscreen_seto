var app = angular.module('app', []);
//creates a module named myApp with empty array

app.controller('pcctrl', function($scope, socket){
  var socket = io.connect();
  console.log('hello from sockets');
  socket.on('showmecode', function(data){
    socket.emit('showmecode', data);
    $scope.code = data.code;
    console.log("I recieved the data :)");
  });
});
