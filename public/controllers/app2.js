var app3 = angular.module('app3', []);
//crates a module named myApp with empty array

app3.controller('pcctrl3', ['$scope', '$http', function($scope, $http){
//crates a module named 'ok' with empty array
console.log("Hello from controller3");
$scope.contactlist2 = [];
//hello defines the route to the server
//then defines "if success"

$http.get('hello2').then(function(response){
	console.log("myApp3.js recieved the data from the server");
  $scope.contactlist2 = response.data;
});


}]

);
