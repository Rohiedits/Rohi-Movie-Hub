

import React, { useState } from 'react';
import './quiz.css';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
 // Python Modules
 {
    question: 'How do you import a module in Python?',
    options: ['import module_name', 'include module_name', 'require module_name', 'load module_name'],
    answer: 0,
  },
  {
    question: 'Which built-in function lists all functions and attributes of a module?',
    options: ['dir()', 'list()', 'functions()', 'methods()'],
    answer: 0,
  },
  // Python Dates
  {
    question: 'Which module is used to work with dates in Python?',
    options: ['datetime', 'time', 'calendar', 'date'],
    answer: 0,
  },
  {
    question: 'How do you get the current date in Python using the `datetime` module?',
    options: ['datetime.datetime.now()', 'datetime.date.today()', 'datetime.date.now()', 'datetime.now'],
    answer: 0,
  },
  // Python Maths
  {
    question: 'Which function returns the square root of a number in Python?',
    options: ['math.sqrt()', 'math.pow()', 'math.square()', 'math.root()'],
    answer: 0,
  },
  {
    question: 'What is the correct way to use the value of π from the `math` module?',
    options: ['math.pi', 'math.PI()', 'math.pie', 'PI.math()'],
    answer: 0,
  },
  // Python JSON
  {
    question: 'Which method is used to convert a Python object to a JSON string?',
    options: ['json.dumps()', 'json.loads()', 'json.dump()', 'json.encode()'],
    answer: 0,
  },
  {
    question: 'How do you parse a JSON string to a Python dictionary?',
    options: ['json.loads()', 'json.dumps()', 'json.decode()', 'json.reads()'],
    answer: 0,
  },
  // Python RegEx
  {
    question: 'Which module is used to work with regular expressions in Python?',
    options: ['re', 'regex', 'expression', 'pattern'],
    answer: 0,
  },
  {
    question: 'What function is used to search for a pattern in a string?',
    options: ['re.search()', 're.find()', 're.match()', 're.lookup()'],
    answer: 0,
  },
  ];

  const handleAnswer = (index) => {
    if (index === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      {showResult ? (
        <div className="result-container">
          <h2>Quiz Result</h2>
          <p>You scored {score} out of {questions.length}</p>
        </div>
      ) : (
        <div className="question-container">
          <h2 style={{color:"red"}}>Question {currentQuestion + 1}</h2>
          <p >{questions[currentQuestion].question}</p>
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} className="option-button" onClick={() => handleAnswer(index)}>{option}</button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Quiz;