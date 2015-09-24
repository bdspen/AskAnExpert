experts.controller('AnswersCtrl', function AnswersCtrl($scope, QuestionsFactory, $stateParams, UtilitiesFactory) {
  $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId);
  $scope.QuestionsFactory = QuestionsFactory;

  $scope.addAnswer = function() {
    $scope.question.answers.push({ name: $scope.expertAnswer, rating: 0 });
    // $scope.question.answers.push("hello");
    $scope.expertAnswer = null;
  };

  $scope.rate = function(answer, value) {
    answer.rating += value;
  }
});
