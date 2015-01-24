'use strict';

/**
 * @ngdoc function
 * @name angularFoundationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularFoundationApp
 */
angular.module('angularFoundationApp')
  .controller('MainCtrl', function ($scope) {
    $scope.projects = [
        {title:'Learn AngularJS', cover: 'images/projects/port1.jpg', copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {title:'Learn AngularJS', cover: 'images/projects/port2.jpg', copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {title:'Learn AngularJS', cover: 'images/projects/port3.jpg', copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {title:'Learn AngularJS', cover: 'images/projects/port4.jpg', copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
    ];
  });
