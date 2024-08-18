import React, { useState } from 'react';
import './navbar.css';
import './profile.css'; // Import the profile CSS
import { Link } from 'react-router-dom';

const Navbar  = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
   // Manage login state
  // setIsLoggedIn(true);
  const token = localStorage.getItem('token');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleProfileClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    // setIsLoggedIn(false);
    localStorage.removeItem('token');
    setDropdownVisible(false);
    // Add logout functionality here
    navigate('/login');
};




  return (
    <div>
    {/* <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      <div className="navbar-menu">
        <div className="navbar-item"> 
          <a href="/" className="navbar-link">Home</a>
        </div>
        <div className="navbar-item">
          <a href="/" className="navbar-link">Study for</a>
          <div className="dropdown-content">
            <a href="/study/c">C</a>
            <a href="/study/c++">C++</a>
            <a href="/study/java">Java</a>
            <a href="/study/python">Python</a>
          </div>
        </div>
        <div className="navbar-item">
          <a href="/" className="navbar-link">Quiz</a>
          <div className="dropdown-content">
            <a href="/quiz/c">C</a>
            <a href="/quiz/c++">C++</a>
            <a href="/quiz/java">Java</a>
            <a href="/quiz/python">Python</a>
          </div>
        </div>
        <div className="navbar-item">
          <a href="/about" className="navbar-link">About Us</a>
        </div>
      </div>
      <div className="navbar-auth">
      {token ? (
          <div className="profile-container">
            <div className="navbar-user-icon" onClick={handleProfileClick}>
              {/* <h3>profile</h3> 
              <i className="fa fa-user-circle" aria-hidden="true"></i>
            </div>
            {dropdownVisible && (
              <div className="profile-dropdown">
                <a href="/profile/edit">Edit Profile</a>
                <a href="/profile/books">View Your Books</a>
                <a href="/" onClick={handleLogout}>Logout</a>
              </div>
            )}
          </div>
        ) : (
          <div>
            <a href="/login" className="navbar-link">Login</a>
            <a href="/signup" className="navbar-link">Signup</a>
          </div>
        )}
      </div>
    </nav> */}




<div
        data-animation="default"
        className="navbar_fixed w-nav"
        data-easing2="ease"
        fs-scrolldisable-element="smart-nav"
        data-easing="ease"
        data-collapse="medium"
        data-w-id="5d852efa-8106-c00b-da3b-afd629aa8ccf"
        role="banner"
        data-duration="0"
      >
        <div className="navbar_component">
          <div className="navbar_container">
            <a
              href="/"
              aria-current="page"
              className="navbar_logo-link w-nav-brand w--current"
              aria-label="home"
              ><img
                src="/"
                loading="lazy"
                alt="Codewars by Andela"
                className="navbar_logo"
            /></a>
            <nav role="navigation" className="navbar_menu w-nav-menu">
            <div className="navbar_menu-links">
                <div><a
                  href="/study"
                  className="navbar_link w-nav-link"
                  >Study</a
                ></div>
                <div><a
                  href="/quiz"
                  className="navbar_link w-nav-link"
                  >Quiz</a
                >
                <div className="dropdown-content">
                <a href="/quiz/c">C</a>
                <a href="/quiz/c++">C++</a>
                <a href="/quiz/java">Java</a>
                <a href="/quiz/python">Python</a>
                </div></div>
                <div><a
                  href="/About"
                  target="_blank"
                  className="navbar_link w-nav-link"
                  >About</a
                ></div>
                </div>
              {token ? (
          <div className="profile-container">
            <div className="navbar-user-icon" onClick={handleProfileClick}>
               {/* <h3>profile</h3>  */}
              <i className="fa fa-user-circle" aria-hidden="true"></i>
            </div>
            {dropdownVisible && (
              <div className="profile-dropdown">
                <a href="/profile">Profile</a>
                <a href="/profile/books">View Your Books</a>
                <a href="/" onClick={handleLogout}>Logout</a>
              </div>
            )}
          </div>
        ) : (
              <div className="navbar_menu-buttons">
                <a
                  id="login-btn"
                  href="/login"
                  className="button is-tertiary is-small w-button"
                  >Log in</a
                ><a
                  id="join-btn"
                  href="/signup"
                  className="button is-secondary is-small w-button"
                  >Join</a
                >
              </div>
            )}
            </nav>
            <div
              className="navbar_menu-button w-nav-button"
              aria-label="menu"
              role="button"
              tabIndex="0"
              aria-controls="w-nav-overlay-0"
              aria-haspopup="menu"
              aria-expanded="false"
            >
              <div className="menu-icon1">
                <div className="menu-icon1_line-top"></div>
                <div className="menu-icon1_line-middle">
                  <div className="menu-icon_line-middle-inner"></div>
                </div>
                <div className="menu-icon1_line-bottom"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
      </div>



      <div
        data-animation="default"
        className="navbar_fixed w-nav"
        data-easing2="ease"
        fs-scrolldisable-element="smart-nav"
        data-easing="ease"
        data-collapse="medium"
        data-w-id="5d852efa-8106-c00b-da3b-afd629aa8ccf"
        role="banner"
        data-duration="0"
      >
        <div className="navbar_component">
          <div className="navbar_container">
            <a
              href="/"
              aria-current="page"
              className="navbar_logo-link w-nav-brand w--current"
              aria-label="home"
              ><img
                src="/"
                loading="lazy"
                alt="Code by savan"
                className="navbar_logo"
            /></a>
            <nav role="navigation" className="navbar_menu w-nav-menu">
              <div className="navbar_menu-links">
                <div><a
                  href="/study"
                  className="navbar_link w-nav-link"
                  >Study</a
                ></div>
                <div><a
                  href="/quiz"
                  className="navbar_link w-nav-link"
                  >Quiz</a
                >
                <div className="dropdown-content">
                <a href="/quiz/c">C</a>
                <a href="/quiz/c++">C++</a>
                <a href="/quiz/java">Java</a>
                <a href="/quiz/python">Python</a>
                </div></div>
                <div><a
                  href="/About"
                  target="_blank"
                  className="navbar_link w-nav-link"
                  >About</a
                ></div>
              </div>
              {token ? (
          <div className="profile-container">
            <div className="navbar-user-icon" onClick={handleProfileClick}>
               {/* <h3>profile</h3>  */}
              <i className="fa fa-user-circle" aria-hidden="true"></i>
            </div>
            {dropdownVisible && (
              <div className="profile-dropdown">
                <a href="/profile">Profile</a>
                <a href="/profile/books">View Your Books</a>
                <a href="/" onClick={handleLogout}>Logout</a>
              </div>
            )}
          </div>
        ) : (
              <div className="navbar_menu-buttons">
                <a
                  id="login-btn"
                  href="/login"
                  className="button is-tertiary is-small w-button"
                  >Log in</a
                ><a
                  id="join-btn"
                  href="/signup"
                  className="button is-secondary is-small w-button"
                  >Join</a
                >
              </div>
            )}
            </nav>
            <div
              className="navbar_menu-button w-nav-button"
              // style={"-webkit-user-select: text"}
              aria-label="menu"
              role="button"
              tabIndex="0"
              aria-controls="w-nav-overlay-1"
              aria-haspopup="menu"
              aria-expanded="false"
            >
              <div className="menu-icon1">
                <div className="menu-icon1_line-top"></div>
                <div className="menu-icon1_line-middle">
                  <div className="menu-icon_line-middle-inner"></div>
                </div>
                <div className="menu-icon1_line-bottom"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-1"></div>
      </div>
    </div>
  );
};

export default Navbar;

