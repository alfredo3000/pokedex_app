'use strict';

/**
 * @ngdoc function
 * @name pokedexApp.controller:DetalleCtrl
 * @description
 * # DetalleCtrl
 * Controller of the pokedexApp
 */
angular.module('pokedexApp')
  .controller('DetalleCtrl', function ($scope, PokemonService, ngProgressFactory) {
    $scope.progressbar = ngProgressFactory.createInstance();
    $scope.progressbar.start();

    PokemonService.detallePokemon()
    .then(function(response){
        $scope.datos = {
          'results': response.data,
        }
        var idEsp = $scope.datos.results.species.url.split('/')[6];

        PokemonService.especiePokemon(idEsp)
        .then(function(response){
            $scope.especies = {
              'results': response.data,
            }
            var id = $scope.especies.results.evolution_chain.url.split('/')[6];
            PokemonService.evolucionPokemon(id)
              .then(function(response){
                $scope.arrayEvolucion = [];
                $scope.arrayEvolucion.push({
                      'id': response.data.chain.species.url.split('/')[6],
                      'url': response.data.chain.species.url,
                      'name': response.data.chain.species.name
                });
                var listaEvolucion = response.data.chain.evolves_to;
                function recursivo(listaEvolucion){
                    angular.forEach(listaEvolucion, function(item){
                        $scope.arrayEvolucion.push({
                              'id': item.species.url.split('/')[6],
                              'url': item.species.url,
                              'name': item.species.name
                        });
                        if (angular.isArray(item.evolves_to) && item.evolves_to.length > 0){
                          recursivo(item.evolves_to);
                        }
                    });
                };
                recursivo(listaEvolucion);
                $scope.evoluciones = $scope.arrayEvolucion;
                $scope.progressbar.complete();                
            });

        });
    });

  });
