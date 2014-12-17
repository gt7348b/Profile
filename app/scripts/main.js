console.log('Roscoe plays peekaboo');

(function(){

  angular.module('Portfolio', ['ngResource', 'ngRoute'])

    .config(function($routeProvider){

      $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'MainController'
      });

      $routeProvider.when('/portfolio', {
        templateUrl: 'templates/portfolio.html',
        controller: 'PortfolioController'
      });

      $routeProvider.when('/library', {
        templateUrl: 'templates/library.html',
        controller: 'MainController'
      });

      $routeProvider.when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'MainController'
      });


    })

}());
