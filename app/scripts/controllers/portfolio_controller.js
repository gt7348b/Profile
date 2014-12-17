(function(){}(


  angular.module('Portfolio')
  .controller('PortfolioController', ['$scope', function($scope){

    console.log('portfolio controller');

    var git_repo = 'https://api.github.com/users/gt7348b/repos',
        render_repo;

    render_repo = _.template($('#respositories').html());

    $.getJSON(git_repo).done( function(repo_data){

      repo_data.forEach(function(repo){

        console.log(repo.name);

      });

    });



  }])



));
