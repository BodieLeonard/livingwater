'use strict';

var angular = require('angular'); // That's right! We can just require angular as if we were in node

var displayUsage = require('./helpers/water_gauge');

var WelcomeCtrl = require('./controllers/WelcomeCtrl'); // We can use our WelcomeCtrl.js as a module. Rainbows.

var app = angular.module('myApp', []);

document.addEventListener('DOMContentLoaded', function(event) {
    displayUsage('#water-path');
});

app.controller('WelcomeCtrl', ['$scope', WelcomeCtrl]);
