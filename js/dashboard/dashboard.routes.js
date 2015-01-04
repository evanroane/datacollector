;(function(){
  'use strict';

angular.module('batApp')
  .config(function($routeProvider){
    $routeProvider.when('/newsession',
      {
        templateUrl: 'views/dashboard/newsession.html',
        controller: 'ShowCodeSetController',
        controllerAs: 'viewCodeSet',
        reloadOnSearch: false
      }
    );
    $routeProvider.when('/previoussessiondata',
      {
        templateUrl: 'views/dashboard/previoussessiondata.html',
        controller: 'SessionDataController',
        controllerAs: 'dataSet',
        reloadOnSearch: false
      }
    );
    $routeProvider.when('/viewcodesets',
      {
        templateUrl: 'views/dashboard/viewcodesets.html',
        controller: 'ShowCodeSetController',
        controllerAs: 'viewCodeSet'
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
        templateUrl: 'views/dashboard/session.html',
        controller: 'TimeController',
        controllerAs: 'time',
        reloadOnSearch: false
      }
    );
  })
}());
