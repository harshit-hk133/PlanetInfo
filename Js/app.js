var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope, $http) {

  $http
    .get("https://api.le-systeme-solaire.net/rest/bodies/")
    .then(function (response) {
      $scope.planets = response.data.bodies.filter(function(body) {
        return body.isPlanet === true;
    });
    })
    .catch(function (error) {
      console.error("Error fetching data:", error);
    });
});
