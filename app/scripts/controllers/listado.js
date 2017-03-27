'use strict';

/**
 * @ngdoc function
 * @name pokedexApp.controller:ListadoCtrl
 * @description
 * # ListadoCtrl
 * Controller of the pokedexApp
 */
angular.module('pokedexApp')
  .controller('ListadoCtrl', function ($scope, PokemonService, TypeService) {

    PokemonService.listado()
    .then(function(response){
      $scope.pokemons = response.data.results;
      console.log($scope.pokemons);
    });

    TypeService.listado()
    .then(function(response){
      $scope.types = response.data.results;
    });

    $scope.listadoTipos = function(id){
      TypeService.listadoTipos(id)
      .then(function(response){

        $scope.arrayPokemon = [];
        var listaPokemons = response.data.pokemon;
        var i = 1;
        listaPokemons.forEach(function(item){
          $scope.arrayPokemon.push({
            '$$hashKey': 'object:' + i,
            'url': item.pokemon.url,
            'name': item.pokemon.name
          });
          i++;
        });
        $scope.pokemons = $scope.arrayPokemon;
        console.log($scope.pokemons);
      });
    }

  });
