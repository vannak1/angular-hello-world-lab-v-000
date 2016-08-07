function MainController ($scope){
  $scope.name = "name";
  $scope.email = "email";
  $scope.phone = "8675309";
}

angular.module('app')
  .controller('MainController', MainController);
