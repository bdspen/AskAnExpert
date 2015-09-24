experts.controller('AnswersCtrl', function AnswersCtrl($scope, QuestionsFactory, $stateParams, UtilitiesFactory) {
  $scope.questions = UtilitiesFactory.findById(QuestionsFactory.questions, QuestionsFactory.questions.Id);
  $scope.addAnswer = function() {
    $scope.questions.answers.push({ answerInput: $scope.expertAnswer });
    $scope.expertAnswer = null;
    $scope.QuestionsFactory = QuestionsFactory;
  }
});
