'use strict';

describe('Controller: NewendpointCtrl', function () {

  // load the controller's module
  beforeEach(module('angularfullstackappApp'));

  var NewendpointCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewendpointCtrl = $controller('NewendpointCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
