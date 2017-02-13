angular.module('myApp', ['ngRoute', 'myApp.controllers'])
    .config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'pages/index.html',
            controller: 'IndexCtrl'
        }).otherwise('/');


    });