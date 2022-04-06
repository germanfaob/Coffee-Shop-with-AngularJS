let SPA_App = angular.module('spa_app', ['ngRoute']);
SPA_App.config(function($routeProvider){
        $routeProvider
        .when("/",{templateUrl:"./pages/#",controller:"question1_controller"})
        .when("/question2",{templateUrl:"./pages/#",controller:"question2_controller"})
        .otherwise({templateUrl:"./pages/404.html"});
    });