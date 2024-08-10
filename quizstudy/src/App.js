import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import { ProfileProvider } from "./Context";
import UserHeader from './Layout/UserHeader'
import LoginPage from './components/LoginPage';
import SignupPage from'./components/SignupPage';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import StudyPage from './pages/StudyPage/StudyPage';
import QuizPage from './pages/QuizPage/QuizPage';
import './App.css';
// import '../public/css/style.css'

function App() {
  return (
    <ProfileProvider>
    <Router>
      <div className="App">
        <UserHeader />
        <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage/>}/>
          <Route path="/" element={<HomePage />} />
          <Route path="/study" element={<StudyPage />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </ProfileProvider>
  );
}

export default App;
