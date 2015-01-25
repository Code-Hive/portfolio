'use strict';

describe('Directive: projectCard', function () {

  // load the directive's module
  beforeEach(module('angularFoundationApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<project-card></project-card>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the projectCard directive');
  }));
});
