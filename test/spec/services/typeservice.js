'use strict';

describe('Service: TypeService', function () {

  // load the service's module
  beforeEach(module('pokedexApp'));

  // instantiate service
  var TypeService;
  beforeEach(inject(function (_TypeService_) {
    TypeService = _TypeService_;
  }));

  it('should do something', function () {
    expect(!!TypeService).toBe(true);
  });

});
