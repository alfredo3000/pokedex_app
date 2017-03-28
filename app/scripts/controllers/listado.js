'use strict';

/**
 * @ngdoc function
 * @name pokedexApp.controller:ListadoCtrl
 * @description
 * # ListadoCtrl
 * Controller of the pokedexApp
 */
angular.module('pokedexApp')
  .controller('ListadoCtrl', function ($scope, $window, PokemonService, TypeService) {
    
    PokemonService.listado()
    .then(function(response){
      $scope.pokemons = response.data.results;
      console.log($scope.pokemons);
    });

    TypeService.listado()
    .then(function(response){
      $scope.types = response.data.results;
    });

    $scope.pokemonTipos = function(id){
        $window.location.href = '#/listadotipos/' + id;
    }

  });
