angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};

  $scope.getAll = function () {
      // console.log('get all success')
    Links.getAll($scope.link) //data binding
      .then(function (link) {
        // do something
        console.log('HELLLLOOO', link)
        $scope.data.links = link;
      })
      .catch(function (error) {

        console.log('GET ALL ERROR')
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
  // $scope.getAll();

});
