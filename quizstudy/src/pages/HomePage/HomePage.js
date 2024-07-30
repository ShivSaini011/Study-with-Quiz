import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to QuizApp</h1>
      <p>Study topics and take quizzes to test your knowledge.</p>
      <Link to="/study" className="btn">Start Studying</Link>
      <Link to="/quiz" className="btn">Take a Quiz</Link>
    </div>
  );
};

export default HomePage;
