'use strict';

/**
 * @ngdoc service
 * @name pokedexApp.Config
 * @description
 * # Config
 * Service in the pokedexApp.
 */
angular.module('pokedexApp')
  .constant('Config', {
    // AngularJS will instantiate a singleton by calling "new" on this function
    URL: 'http://pokeapi.co/api/v2/',
    POKEMON_LIST: 'pokemon/?limit=1000',
    POKEMON_DETAIL: 'pokemon/',
    POKEMON_SPECIE: 'pokemon-species/',
    POKEMON_TYPES: 'type/',
    POKEMON_FORM: 'pokemon-form/',
    POKEMON_EVOLUTION: 'evolution-chain/',
  });
