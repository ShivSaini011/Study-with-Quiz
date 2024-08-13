import React, { useState } from 'react';
import './loginpage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', { // Replace with your backend URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful', data);

        // Handle successful login

        // Save token to localStorage or redirect user to another page
        localStorage.setItem('token', data.token);
        window.location.href = '/profile'; // Redirect to the dashboard or another page
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred during login.');
    }
  };

  return (
    <div className="login-page">
      <div className="promo-section">
        <h1>Become a Study&Quiz Member</h1>
        <p>Free to use, easy to love</p>
        <ul>
          <li>✔️ Track your progress</li>
          <li>✔️ Set your goals</li>
          <li>✔️ Get a personalized learning path</li>
          <li>✔️ Test your skills</li>
          <li>✔️ Practice coding in browser</li>
          <li>✔️ Build and host a website</li>
          <li>✔️ Teacher Toolbox</li>
        </ul>
      </div>
      <div className="login-section">
        <h2>Log In</h2>
        <p>Don't have an account? <a href="/signup">Sign up</a></p>
        <div className="login-methods">
          <button className="google">Google</button>
          <button className="facebook">Facebook</button>
          <button className="github">Github</button>
          <button className="feide">Feide</button>
        </div>
        <p className="or-divider">OR</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <a href="/forgot-password">Forgot Password?</a>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
