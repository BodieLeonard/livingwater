"use strict";

var applog = angular.module('myApp',['ngRoute']);

applog.config([ '$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.when('/donation', {
            templateUrl : 'form-fullNameAngular.html',
            controller : 'donationController'
        })
    }
]);

applog.controller("donationController", function($scope, $location) {
    $scope.fullName = function() {
        $location.path("/donation/name" );
    };
});