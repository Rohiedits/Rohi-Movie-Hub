

import React, { useState } from 'react';
import './quiz.css';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What is the print function in Python?",
      options: ["A function to print output", "A function to get input", "A function to exit the program", "A function to start the program"],
      answer: 0
    },
    {
      question: "What is the syntax for a for loop in Python?",
      options: ["for i in range(10):", "while i < 10:", "if i < 10:", "else i < 10:"],
      answer: 0
    },
    {
      question: "What is the purpose of the 'break' statement in Python?",
      options: ["To exit a loop", "To start a loop", "To skip a line", "To go back to the previous line"],
      answer: 0
    },
    {
      question: "What is the purpose of the 'continue' statement in Python?",
      options: ["To exit a loop", "To start a loop", "To skip to the next iteration", "To go back to the previous iteration"],
      answer: 2
    },
    {
      question: "What is the syntax for a while loop in Python?",
      options: ["while i < 10:", "for i in range(10):", "if i < 10:", "else i < 10:"],
      answer: 0
    },
    {
      question: "What is the purpose of the 'if' statement in Python?",
      options: ["To start a loop", "To exit a loop", "To make a decision", "To skip a line"],
      answer: 2
    },
    {
      question: "What is the purpose of the 'else' statement in Python?",
      options: ["To start a loop", "To exit a loop", "To make a decision", "To handle an alternative condition"],
      answer: 3
    },
    {
      question: "What is the syntax for a function in Python?",
      options: ["def function_name():", "function function_name():", "var function_name():", "let function_name():"],
      answer: 0
    },
    {
      question: "What is the purpose of the 'return' statement in Python?",
      options: ["To exit a function", "To start a function", "To skip a line", "To go back to the previous line"],
      answer: 0
    },
    {
      question: "What is the purpose of the 'import' statement in Python?",
      options: ["To exit a program", "To start a program", "To import a module", "To export a module"],
      answer: 2
    }
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