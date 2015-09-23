var experts = angular.module('experts', ['ui.router']);
//setup parameters
experts.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('home', {
    url:"",
    templateUrl: "partials/home.html"
  });
});
