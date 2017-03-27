'use strict';

describe('Service: PokemonService', function () {

  // load the service's module
  beforeEach(module('pokedexApp'));

  // instantiate service
  var PokemonService;
  beforeEach(inject(function (_PokemonService_) {
    PokemonService = _PokemonService_;
  }));

  it('should do something', function () {
    expect(!!PokemonService).toBe(true);
  });

});
