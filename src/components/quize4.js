

import React, { useState } from 'react';
import './quiz.css';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
   {
    question: 'What is the correct syntax to create a `while` loop in Python?',
    options: [
      'while condition:',
      'loop while condition:',
      'condition while:',
      'do while condition:'
    ],
    answer: 0,
  },
  {
    question: 'How do you stop an infinite `while` loop in Python?',
    options: ['By pressing Ctrl+C', 'By pressing Alt+F4', 'By pressing Ctrl+X', 'By pressing Shift+C'],
    answer: 0,
  },
  // Python For Loops
  {
    question: 'What keyword is used to start a `for` loop in Python?',
    options: ['for', 'foreach', 'loop', 'repeat'],
    answer: 0,
  },
  {
    question: 'Which function can be used to generate a sequence of numbers in a `for` loop?',
    options: ['range()', 'sequence()', 'loop()', 'iter()'],
    answer: 0,
  },
  // Python Functions
  {
    question: 'What keyword is used to define a function in Python?',
    options: ['function', 'def', 'func', 'lambda'],
    answer: 1,
  },
  {
    question: 'How do you return a value from a function in Python?',
    options: ['exit', 'output', 'return', 'yield'],
    answer: 2,
  },
  // Python Lambda
  {
    question: 'What is a lambda function in Python?',
    options: [
      'A function defined without a name',
      'A function that only accepts numeric arguments',
      'A function used for file handling',
      'A function used to return multiple values'
    ],
    answer: 0,
  },
  {
    question: 'What is the correct syntax to create a lambda function?',
    options: [
      'lambda arguments: expression',
      'lambda (arguments): expression',
      'def lambda(arguments): expression',
      'lambda: arguments, expression'
    ],
    answer: 0,
  },
  // Python Arrays
  {
    question: 'Which module is commonly used to work with arrays in Python?',
    options: ['array', 'numpy', 'list', 'collections'],
    answer: 1,
  },
  {
    question: 'How do you access an element in an array in Python?',
    options: ['array[index]', 'array.key', 'array.value', 'array.element'],
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