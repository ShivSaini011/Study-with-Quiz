import React from 'react';
import './Question.css';

const Question = ({ question, handleAnswer }) => {
  return (
    <div className="question">
      <h2>{question.question}</h2>
      {question.options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(option)} className="btn">
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;
