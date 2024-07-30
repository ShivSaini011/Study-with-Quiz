import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">QuizApp</div>
        <div className="menu">
          <Link to="/" className="menu-item">Home</Link>
          <Link to="/study" className="menu-item">Study</Link>
          <Link to="/quiz" className="menu-item">Quiz</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
