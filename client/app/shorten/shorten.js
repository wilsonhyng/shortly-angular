angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {}; // this is not storage
  $scope.test = 'Testie McTester';
  $scope.data = {}; 

  $scope.addLink = function() {
    Links.addLink($scope.link)
    .then(function (respObj) {
      console.log(respObj);
      // do something
      $scope.data= respObj.data.baseUrl + '/' + respObj.data.code;



    })
    .catch(function (error) {
      console.error(error);
    });
  };
});
