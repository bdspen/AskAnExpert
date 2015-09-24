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
    controller: "AnswersCtrl"
  });

  $stateProvider.state('answered-questions', {
  url: "/:questionId",
  templateUrl: "partials/answered-questions.html",
  controller: 'AnswersCtrl'
  });
});
