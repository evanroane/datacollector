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
    $routeProvider.when('/newrepertoire',
      {
        templateUrl: 'views/newrepertoire.html',
        reloadOnSearch: false
      }
    );
    $routeProvider.when('/editrepertoire',
      {
        templateUrl: 'views/repertoirelist.html',
        reloadOnSearch: false
      }
    );
    $routeProvider.when('/sessiondata',
      {
        templateUrl: 'views/sessiondata.html',
        reloadOnSearch: false
      }
    );
  })
}());
