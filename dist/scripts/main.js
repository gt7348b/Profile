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

(function(){

  angular.module('Portfolio')
    .controller('MainController', ['$scope', function($scope){

    }])

}());

(function(){}(


  angular.module('Portfolio')
  .controller('PortfolioController', ['$scope', '$resource', function($scope, $resource){

    console.log('portfolio controller');

    var git_repo = 'https://api.github.com/users/gt7348b/repos',
        render_repo,
        projects = [];

    $.getJSON(git_repo).done( function(repo_data){

      repo_data.forEach(function(repo){

        console.log(repo.name);
        projects.push(repo)

      });

    }).then(function(){

    console.log(projects);

  });

  }])



));

(function(){



}());
