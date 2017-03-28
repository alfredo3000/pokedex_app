'use strict';

/**
 * @ngdoc overview
 * @name pokedexApp
 * @description
 * # pokedexApp
 *
 * Main module of the application.
 */
angular
  .module('pokedexApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/listado', {
        templateUrl: 'views/listado.html',
        controller: 'ListadoCtrl',
        controllerAs: 'listado'
      })
      .when('/detalle/:id', {
        templateUrl: 'views/detalle.html',
        controller: 'DetalleCtrl',
        controllerAs: 'detalle'
      })
      .when('/listadotipos/:id', {
        templateUrl: 'views/listadotipos.html',
        controller: 'ListadotiposCtrl',
        controllerAs: 'listadoTipos'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.hashPrefix("");
  });
