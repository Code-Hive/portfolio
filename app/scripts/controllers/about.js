'use strict';

/**
 * @ngdoc function
 * @name angularFoundationApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularFoundationApp
 */
angular.module('angularFoundationApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.about = [
        {copy: 'This is some about text'}
    ];
  });
