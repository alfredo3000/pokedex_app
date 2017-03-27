'use strict';

/**
 * @ngdoc service
 * @name pokedexApp.TypeService
 * @description
 * # TypeService
 * Service in the pokedexApp.
 */
angular.module('pokedexApp')
  .service('TypeService', function (Config, $q, $http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    function listado(){
      var deferred = $q.defer();
      $http.get(Config.URL + Config.POKEMON_TYPES)
       .then(function(response){
        deferred.resolve(response);
      });
      return deferred.promise;
    }

    function listadoTipos(id){
      var deferred = $q.defer();
      $http.get(Config.URL + Config.POKEMON_TYPES + id)
       .then(function(response){
        deferred.resolve(response);
      });
      return deferred.promise;
    }

    return{
      listado: listado,
      listadoTipos: listadoTipos
    }
  });
