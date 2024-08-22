import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import StudyPage from './pages/StudyPage';
import Profile from './pages/profile';
import QuizPage from './pages/QuizPage';
import CLanguagePage from './pages/study/clanguage';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //     const token = localStorage.getItem('token');
  //     if (token) {
  //         setIsLoggedIn(true);
  //     }
  // }, []);
  
  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/signup" element={<SignupPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/study/clanguage" element={<CLanguagePage/>} />
        <Route path="/study/:topic" element={<StudyPage />} />
        <Route path="/quiz/:topic" element={<QuizPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
