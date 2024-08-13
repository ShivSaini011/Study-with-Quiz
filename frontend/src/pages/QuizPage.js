import React from 'react';
import { useParams } from 'react-router-dom';

const QuizPage = () => {
  const { topic } = useParams();

  return (
    <div>
      <h1>Quiz on {topic}</h1>
      <p>Test your knowledge on {topic} by taking this quiz.</p>
      {/* Include quiz questions and options */}
    </div>
  );
};

export default QuizPage;
