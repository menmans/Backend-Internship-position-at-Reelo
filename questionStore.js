// questionStore.js
class QuestionStore {
    constructor(questions) {
      this.questions = questions || [];
    }
  
    getQuestions() {
      return this.questions;
    }
  
    filterByDifficulty(difficulty) {
      return this.questions.filter(q => q.difficulty === difficulty);
    }
  }
  
  module.exports = QuestionStore;