

import React, { useState } from 'react';
import './quiz.css';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
        question: 'What is Python?',
        options: ['A programming language', 'A database management system', 'A web development framework', 'An operating system'],
        answer: 0,
      },
      {
        question: 'Who created Python?',
        options: ['Guido van Rossum', 'Larry Wall', 'Bjarne Stroustrup', 'James Gosling'],
        answer: 0,
      },
      {
        question: 'What is a variable in Python?',
        options: ['A storage location that holds a value', 'A data type that defines the type of value', 'A function that performs an operation', 'A loop that repeats a statement'],
        answer: 0,
      },
      {
        question: 'How do you assign a value to a variable in Python?',
        options: ['Using the assignment operator (=)', 'Using the equality operator (==)', 'Using the logical AND operator (&&)', 'Using the logical OR operator (||)'],
        answer: 0,
      },
      {
        question: 'What is the difference between a variable and a constant in Python?',
        options: ['A variable can be changed, while a constant cannot', 'A variable cannot be changed, while a constant can', 'A variable is used for numeric values, while a constant is used for string values', 'A variable is used for string values, while a constant is used for numeric values'],
        answer: 0,
      },
      {
        question: 'What is the purpose of the "print()" function in Python?',
        options: ['To display output on the screen', 'To read input from the user', 'To perform arithmetic operations', 'To control the flow of a program'],
        answer: 0,
      },
      {
        question: 'What is the syntax for declaring a variable in Python?',
        options: ['var x = 5', 'let x = 5', 'x = 5', 'const x = 5'],
        answer: 2,
      },
      {
        question: 'What is the data type of the variable "x" in the following code: x = 5?',
        options: ['Integer', 'Float', 'String', 'Boolean'],
        answer: 0,
      },
      {
        question: 'What is the purpose of the "input()" function in Python?',
        options: ['To display output on the screen', 'To read input from the user', 'To perform arithmetic operations', 'To control the flow of a program'],
        answer: 1,
      },
      {
        question: 'What is the syntax for printing a variable in Python?',
        options: ['print(x)', 'console.log(x)', 'System.out.println(x)', 'echo x'],
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