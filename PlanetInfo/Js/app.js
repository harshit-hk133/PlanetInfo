var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope, $http) {
  $http
    .get("https://api.le-systeme-solaire.net/rest/bodies/")
    .then(function (response) {
      var planets = response.data.bodies.filter(function (body) {
        return body.isPlanet === true;
      });
      $scope.planets = planets;
    })
    .catch(function (error) {
      console.error("Error fetching data:", error);
    });
  $scope.filterPlanets = function (planet) {
    if (!$scope.searchText) {
      return true;
    }
    return planet.englishName
      .toLowerCase()
      .includes($scope.searchText.toLowerCase());
  };
});
