var myApp = angular.module('myApp', []);
//crates a module named myApp with empty array

myApp.controller('angctrl', ['$scope', '$http', function($scope, $http){
//crates a module named 'ok' with empty array
console.log("Hello from controller1");
$scope.contactlist = [];
//hello defines the route to the server
//then defines "if success"

$http.get('hello').then(function(response){
	console.log("myApp.js recieved the data from the server");
  $scope.contactlist = response.data;
});


}]

);
