var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, socket){


socket.on('connect', function(){
	socket.emit('devicet', window.deviceType);
});

socket.on('roomcreated', function(data){

$scope.cryptcode = data;

});

});




/* Services */
app.factory('socket', function ($rootScope) {
  var socket = io.connect();
  return {
    on: function (eventName, callback) {
      socket.on(eventName, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      })
    }
  };
});
