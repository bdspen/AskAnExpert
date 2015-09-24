experts.factory('QuestionsFactory', function QuestionsFactory() {
  var factory = {};
  factory.questions = [];
  factory.addQuestion = function() {
    factory.questions.push({ input: factory.userQuestion, id: factory.questions.length + 1, answers: [] });
    factory.userQuestion = null;
  };


  // factory.addAnswer = function() {
  //   factory.questions.answers.push({ answerInput: $scope.expertAnswer });
  //   factory.expertAnswer = null;
  // };
  return factory;
});
