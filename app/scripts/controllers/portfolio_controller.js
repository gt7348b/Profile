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
