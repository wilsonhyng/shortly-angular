angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {}; // this is not storage
  $scope.test = 'Testie McTester';
  $scope.data = {}; 

  $scope.addLink = function() {
    Links.addLink($scope.link) //what does this line do
    .then(function (respObj) {
      console.log(respObj);
      $scope.data = respObj.data.url+ ': ' + respObj.data.baseUrl + '/' + respObj.data.code;
    })
    .catch(function (error) {
      console.error(error);
    });
  };
});
