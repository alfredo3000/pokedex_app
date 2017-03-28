'use strict';

/**
 * @ngdoc function
 * @name pokedexApp.controller:ListadoCtrl
 * @description
 * # ListadoCtrl
 * Controller of the pokedexApp
 */
angular.module('pokedexApp')
  .controller('ListadoCtrl', function ($scope, $window, PokemonService, TypeService, ngProgressFactory) {
    $scope.progressbar = ngProgressFactory.createInstance();
    $scope.progressbar.start();
    PokemonService.listado()
    .then(function(response){
      $scope.pokemons = response.data.results;      
      $scope.progressbar.complete();
    });

    TypeService.listado()
    .then(function(response){
      $scope.types = response.data.results;
    });

    $scope.pokemonTipos = function(id){
        $window.location.href = '#/listadotipos/' + id;
    }

  });
