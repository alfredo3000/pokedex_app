'use strict';

describe('Controller: ListadotiposCtrl', function () {

  // load the controller's module
  beforeEach(module('pokedexApp'));

  var ListadotiposCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListadotiposCtrl = $controller('ListadotiposCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListadotiposCtrl.awesomeThings.length).toBe(3);
  });
});
