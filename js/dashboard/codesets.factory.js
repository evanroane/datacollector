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

    function getCodeSet(id, cb){
      $http.get(_batUrl(id))
      .success(function(data){
        cb(data);
      })
      .error(function(err){
        console.log(err);
      });
    }

    function editCodeSet(id, codeSetId){
      $http.put(_batUrl(id), codeSetId)
      .success(function(data){
        $location.path('/viewcodesets');
      })
      .error(function(err){
        console.log(err);
      });
    }

    return {
      createCodeSet: createCodeSet,
      getCodeSet: getCodeSet,
      editCodeSet: editCodeSet
    };

  })
}());
