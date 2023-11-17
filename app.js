// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const QuestionStore = require('./questionStore');
const QuestionPaperGenerator = require('./questionPaperGenerator');
const questionStoreData = require('./questionStoreData');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const questionStore = new QuestionStore(questionStoreData);
const questionPaperGenerator = new QuestionPaperGenerator(questionStore);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.post('/generate-paper', (req, res) => {
  const totalMarks = req.body.totalMarks;
  const difficultyDistribution = req.body.difficultyDistribution;

  const questionPaper = questionPaperGenerator.generateQuestionPaper(totalMarks, difficultyDistribution);
  res.json({ questionPaper });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
