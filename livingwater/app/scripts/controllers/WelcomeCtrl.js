"use strict";

var WelcomeCtrl = function($scope) {
  $scope.testVar = 'We running from a required module! ';

  $scope.menuItems = ["Thirst Gauge", "Why Water?", "Why Us?", "Take Action", "About Living Water", "Store"];
};

module.exports = WelcomeCtrl;

var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70
  });

  // Toggle button
  document.querySelector('.toggle-button').addEventListener('click', function() {
    slideout.toggle();
  });