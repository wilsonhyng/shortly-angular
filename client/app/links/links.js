angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.link = {};
  $scope.data = {};

  $scope.getAll = function () {
    Links.getAll($scope.link) //data binding
      .then(function (link) {
        // do something
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.addOne = function () {
    Links.addOne($scope.link)
      .then(function (link) {
        //do something
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
