import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Logo</div>
        <button onClick={toggleMenu} className="menu-toggle">
          <span className="hamburger"></span>
        </button>
        <div className={`menu ${isOpen ? 'open' : ''}`}>
          <a href="#" className="menu-item">Home</a>
          <a href="#" className="menu-item">About</a>
          <a href="#" className="menu-item">Contact</a>
          <a href="#" className="menu-item">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
