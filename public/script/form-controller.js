var app = angular.module('myApp', []);
app.controller('formController', function($scope,$http) {
  $scope.name = "";
  
  $http.get("http://localhost:3000/")
  .then(function(response) {
    $scope.data = response.data;
  });


    

  $scope.showAlert = function(){
      console.log($scope.name);
  }
});