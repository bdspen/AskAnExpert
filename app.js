var experts = angular.module('experts', ['ui.router']);
//setup parameters
experts.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('home', {
    url:"",
    templateUrl: "partials/home.html",
    controller: "QuestionsCtrl"
  });


  $stateProvider.state('experts-state', {
    url:"/experts-state",
    templateUrl: "partials/experts-state.html",
    controller: "QuestionsCtrl"
  });
});
