angular.module('userProfiles').service('mainService', function($http, $q) {

  this.getUsers = function() {
    var deferred = $q.defer();
    $http({
        method: 'GET',
        url: 'http://reqres.in/api/users?page=1'
    }).then(function(response){
      var parsedResponse = response.data.data;
      for(var i = 0; i < parsedResponse.length; i++) {
        parsedResponse[i].first_name = 'Ralf';
        parsedResponse[i].last_name = 'Lauren';
        parsedResponse[i].avatar = 'http://memesvault.com/wp-content/uploads/Happy-Birthday-Meme-Nicolas-Cage-18.jpg';
      }
      deferred.resolve(parsedResponse);
    });
    return deferred.promise;
  };

});
