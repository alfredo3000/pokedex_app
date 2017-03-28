'use strict';

/**
 * @ngdoc function
 * @name pokedexApp.controller:ListadotiposCtrl
 * @description
 * # ListadotiposCtrl
 * Controller of the pokedexApp
 */
angular.module('pokedexApp')
  .controller('ListadotiposCtrl', function ($scope, $window, TypeService) {
    TypeService.listado()
    .then(function(response){
      $scope.types = response.data.results;
    });

    TypeService.listadoTipos()
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

    $scope.pokemonTipos = function(id){
        $window.location.href = '#/listadotipos/' + id;
    }

  });
