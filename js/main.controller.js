;(function(){
  'use strict';

angular.module('batApp')
  .controller('MainController', function($rootScope, $scope){

    $rootScope.$on('$routeChangeStart', function(){
      $rootScope.loading = true;
    });

    $rootScope.$on('$routeChangeSuccess', function(){
      $rootScope.loading = false;
    });

    $scope.lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel explicabo, aliquid eaque soluta nihil eligendi adipisci error, illum corrupti nam fuga omnis quod quaerat mollitia expedita impedit dolores ipsam. Obcaecati.';

  });

}());
