'use strict';

/**
 * @ngdoc directive
 * @name angularFoundationApp.directive:projectCard
 * @description
 * # projectCard
 */
angular.module('angularFoundationApp')
  .directive('projectCard', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the projectCard directive');
      }
    };
  });
