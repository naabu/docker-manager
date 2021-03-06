angular.module('manager',['ngRoute','ngResource','ui.bootstrap','manager.services',
                          'manager.filters','manager.navbar','manager.dashboard',
                          'manager.components'])
 .config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'static/application/dashboard/dashboard.html',
        controller: 'dashboardCtrl'
      })
     .when('/images',{
        templateUrl: 'static/application/images/images.html',
        controller: 'imagesCtrl'
     } )
     .otherwise({ redirectTo: '/' });
 } ])
 .constant('APPLICATION_NAME','Docker Manager')
 .constant('APPLICATION_VERSION','v1.0.0')
 .constant('DOCKER_ENDPOINT','dockerapi')
 .constant('DOCKER_PORT','')
 .constant('DOCKER_API_VERSION','v1.19');