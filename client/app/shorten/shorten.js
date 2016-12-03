angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function() {
    Links.addLink($scope.link)
    console.log('ERRRRRRORRRORORORORORORO')
    .then(function (link) {
      // do something
    })
    .catch(function (error) {
      console.error(error);
    });
  };
});
