;(function(){
  'use strict';

angular.module('batApp')
  .config(function($routeProvider){
    $routeProvider.when('/newsession',
      {
        templateUrl: 'views/dashboard/newsession.html',
        controller: 'TimeController',
        controllerAs: 'time',
        reloadOnSearch: false
      }
    );
    $routeProvider.when('/newcodeset',
      {
        templateUrl: 'views/dashboard/newcodeset.html',
        /*controller: 'CodeSetController',
        controllerAs: 'codeSet', */
        reloadOnSearch: false
      }
    );
    $routeProvider.when('/editcodesets',
      {
        templateUrl: 'views/dashboard/editcodesets.html',
        /*controller: 'CodeSetController',
        controllerAs: 'codeSet', */
        reloadOnSearch: false
      }
    );
    $routeProvider.when('/sessiondata',
      {
        templateUrl: 'views/dashboard/sessiondata.html',
        controller: 'TimeController',
        controllerAs: 'time',
        reloadOnSearch: false
      }
    );
  })
}());
