;(function(){
  'use strict';

angular.module('batApp')
  .config(function($routeProvider){
    $routeProvider.when('/session',
      {
        templateUrl: 'views/dashboard/session.html',
        controller: 'TimeController',
        controllerAs: 'time',
        reloadOnSearch: false
      }
    );
    $routeProvider.when('/viewcodesets',
      {
        templateUrl: 'views/dashboard/viewcodesets.html',
        controller: 'ShowCodeSetController',
        controllerAs: 'viewCodeSet',
        reloadOnSearch: false
      }
    );
    $routeProvider.when('/newcodeset',
      {
        templateUrl: 'views/dashboard/newcodeset.html',
        controller: 'CodeSetController',
        controllerAs: 'codeSet',
        reloadOnSearch: false
      }
    );
    $routeProvider.when('/codeset/:id/edit',
    {
      templateUrl: 'views/dashboard/editcodeset.html',
      controller: 'EditCodeSetController',
      controllerAs: 'codeSet',
      reloadOnSearch: false
    }
    );
    $routeProvider.when('/codeset/:id',
      {
        templateUrl: 'views/session.html',
        controller: 'TimeController',
        controllerAs: 'time',
        reloadOnSearch: false
      }
    );
  })
}());
