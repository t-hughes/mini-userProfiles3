angular.module('userProfiles').controller('MainController', function($scope, mainService) {
  $scope.getUsers = function() {
    mainService.getUsers().then(function(dataFromService) {
      // $scope.users = dataFromService.data.data;//Rather than filter the data out in our controller we can use $q to filter it out as we pull it through our service.
      $scope.users = dataFromService;
    });
  };

  $scope.getUsers();

});
