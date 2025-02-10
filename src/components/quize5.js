

import React, { useState } from 'react';
import './quiz.css';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
        question: 'How do you define a class in Python?',
        options: ['class ClassName:', 'def ClassName:', 'object ClassName:', 'function ClassName:'],
        answer: 0,
      },
      {
        question: 'What is the purpose of the `__init__()` method in Python classes?',
        options: [
          'To initialize class variables',
          'To handle exceptions',
          'To create a lambda function',
          'To delete an object'
        ],
        answer: 0,
      },
      // Python Inheritance
      {
        question: 'How do you indicate that a class inherits from another class in Python?',
        options: [
          'class ChildClass(ParentClass):',
          'inherit ChildClass from ParentClass',
          'class ChildClass -> ParentClass:',
          'class ChildClass inherit ParentClass:'
        ],
        answer: 0,
      },
      {
        question: 'Which built-in function can check if a class is a subclass of another?',
        options: ['issubclass()', 'isinstance()', 'subclass()', 'checkclass()'],
        answer: 0,
      },
      // Python Iterators
      {
        question: 'What method is required to make an object iterable in Python?',
        options: ['__iter__()', '__next__()', '__init__()', '__len__()'],
        answer: 0,
      },
      {
        question: 'Which method is used to get the next value of an iterator?',
        options: ['__next__()', 'next()', '__iter__()', '__call__()'],
        answer: 0,
      },
      // Python Polymorphism
      {
        question: 'What is polymorphism in Python?',
        options: [
          'The ability to take multiple forms',
          'The ability to run faster code',
          'Creating unique identifiers',
          'Defining immutable variables'
        ],
        answer: 0,
      },
      {
        question: 'Which of the following is an example of polymorphism?',
        options: [
          'Two functions with the same name but different implementations',
          'Only immutable functions',
          'Single inheritance without changes',
          'Defining constants in a class'
        ],
        answer: 0,
      },
      // Python Scope
      {
        question: 'Which keyword is used to declare a global variable inside a function?',
        options: ['global', 'local', 'static', 'nonlocal'],
        answer: 0,
      },
      {
        question: 'What is the purpose of the `nonlocal` keyword?',
        options: [
          'To modify variables in the enclosing scope',
          'To declare a local variable',
          'To modify global variables',
          'To return a lambda function'
        ],
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