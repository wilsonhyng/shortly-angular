angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function() {
    Links.addLink($scope.link)
    .then(function (link) {
      // do something
    })
    .catch(function (error) {
      console.error(error);
    });
  };
});
