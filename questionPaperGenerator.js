// questionPaperGenerator.js
class QuestionPaperGenerator {
    constructor(questionStore) {
      this.questionStore = questionStore;
    }
  
    generateQuestionPaper(totalMarks, difficultyDistribution) {
      const questionPaper = [];
      const totalQuestions = this.calculateTotalQuestions(totalMarks, difficultyDistribution);
  
      for (const difficulty in difficultyDistribution) {
        const percentage = difficultyDistribution[difficulty];
        const questions = this.questionStore.filterByDifficulty(difficulty);
        const questionCount = Math.round((percentage / 100) * totalQuestions);
  
        questionPaper.push(...this.getRandomQuestions(questions, questionCount));
      }
  
      return questionPaper;
    }
  
    calculateTotalQuestions(totalMarks, difficultyDistribution) {
      return Object.values(difficultyDistribution).reduce((total, percentage) => total + (percentage / 100) * totalMarks, 0);
    }
  
    getRandomQuestions(questions, count) {
      const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
      return shuffledQuestions.slice(0, count);
    }
  }
  
  module.exports = QuestionPaperGenerator;
  