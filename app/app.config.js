'use strict';
var app = angular.module("phonecatApp", ["ngRoute"]);
app.
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/main', {
          templateUrl: './views/main.html',
          controller:'mainController'
        }).
        otherwise('/phones');
    }
  ]);
