;(function(){
  'use strict';

  angular.module('batApp')
  .factory('codeSetFactory', function($rootScope, FIREBASE_URL, $http, $location) {

    function _batUrl(id){
      if (id) {
        return FIREBASE_URL + 'users/' + $rootScope.user.uid +
        '/codeSets/' + id + '.json?auth=' + $rootScope.user.token;
      } else {
        return FIREBASE_URL + 'users/' + $rootScope.user.uid +
        '/codeSets.json?auth=' + $rootScope.user.token;
      }
    }

    function createCodeSet(inputs, cb){
      $http.post(_batUrl(), inputs)
      .success(function(data){
        console.log('data sent to FB');
        cb(data);
      })
      .error(function(err){
        console.log(err);
      });
    }

    return {
      createCodeSet: createCodeSet
    };

  })
}());
