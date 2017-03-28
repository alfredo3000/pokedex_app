'use strict';

/**
 * @ngdoc service
 * @name pokedexApp.PokemonService
 * @description
 * # PokemonService
 * Service in the pokedexApp.
 */
angular.module('pokedexApp')
  .service('PokemonService', function (Config, $q, $http, $routeParams) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    function listado(id){
      var deferred = $q.defer();
      $http.get(Config.URL + Config.POKEMON_LIST)
       .then(function(response){
        deferred.resolve(response);
      });
      return deferred.promise;
    }

    function detallePokemon(){
      var deferred = $q.defer();
      $http.get(Config.URL + Config.POKEMON_DETAIL + $routeParams.id)
       .then(function(response){
        deferred.resolve(response);
      });
      return deferred.promise;
    }

    function especiePokemon(id){
      var deferred = $q.defer();
      $http.get(Config.URL + Config.POKEMON_SPECIE + id)
       .then(function(response){
        deferred.resolve(response);
      });
      return deferred.promise;
    }

    function evolucionPokemon(id){
      var deferred = $q.defer();
      $http.get(Config.URL + Config.POKEMON_EVOLUTION + id)
       .then(function(response){
        deferred.resolve(response);
      });
      return deferred.promise;
    }

    return{
      listado: listado,
      detallePokemon: detallePokemon,
      especiePokemon: especiePokemon,
      evolucionPokemon:evolucionPokemon
    }
  });
