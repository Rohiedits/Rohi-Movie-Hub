

import React, { useState } from 'react';
import './quiz.css';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
        question: 'What is the difference between a list and a tuple in Python?',
        options: ['A list is mutable, while a tuple is immutable', 'A list is immutable, while a tuple is mutable', 'A list is used for numeric values, while a tuple is used for string values', 'A list is used for string values, while a tuple is used for numeric values'],
        answer: 0,
      },
      {
        question: 'How do you create a list in Python?',
        options: ['Using the "list()" function', 'Using square brackets "[]"', 'Using parentheses "()"', 'Using curly brackets "{}"'],
        answer: 1,
      },
      {
        question: 'What is the syntax for accessing an element in a list?',
        options: ['list[index]', 'list.key', 'list.value', 'list.element'],
        answer: 0,
      },
      {
        question: 'How do you add an element to a list in Python?',
        options: ['Using the "append()" method', 'Using the "insert()" method', 'Using the "extend()" method', 'All of the above'],
        answer: 3,
      },
      {
        question: 'What is the difference between a dictionary and a list in Python?',
        options: ['A dictionary is a collection of key-value pairs, while a list is a collection of elements', 'A dictionary is a collection of elements, while a list is a collection of key-value pairs', 'A dictionary is used for numeric values, while a list is used for string values', 'A dictionary is used for string values, while a list is used for numeric values'],
        answer: 0,
      },
      {
        question: 'How do you create a tuple in Python?',
        options: ['Using the "tuple()" function', 'Using parentheses "()"', 'Using square brackets "[]"', 'Using curly brackets "{}"'],
        answer: 1,
      },
      {
        question: 'What is the syntax for accessing an element in a tuple?',
        options: ['tuple[index]', 'tuple.key', 'tuple.value', 'tuple.element'],
        answer: 0,
      },
      {
        question: 'How do you create a dictionary in Python?',
        options: ['Using the "dict()" function', 'Using curly brackets "{}"', 'Using square brackets "[]"', 'Using parentheses "()"'],
        answer: 1,
      },
      {
        question: 'What is the syntax for accessing a value in a dictionary?',
        options: ['dictionary[key]', 'dictionary.value', 'dictionary.element', 'dictionary.index'],
        answer: 0,
      },
      {
        question: 'How do you update a value in a dictionary in Python?',
        options: ['Using the "update()" method', 'Using the "setdefault()" method', 'Using the "pop()" method', 'Using the "=" operator'],
        answer: 3,
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