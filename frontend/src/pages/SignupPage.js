import React, { useState } from 'react';
import './signuppage.css';
import { useNavigation } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');

  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    if (passwordType === "password") {
      return setPasswordType("text");
    }
    return setPasswordType("password");
  };
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://study-with-quiz.onrender.com/api/auth/signup', { // Replace with your backend URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, firstName, lastName }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Signup successful', data);
        localStorage.setItem('token', data.token);

        // Handle successful signup
        // window.location.href = '/profile'; // Redirect to login page after successful signup
        navigate("/pofile")
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Signup failed');
      }


    //   if (response.ok) {
    //     // Save the token or user data as needed
    //     navigate('/profile'); // Redirect to profile page
    // } else {
    //     console.error('Signup failed');
    // }



    } catch (error) {
      console.error('Error during signup:', error);
      setError('An error occurred during signup.');
    }
  };

  return (
    <div className="signup-page">
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
      <div className="signup-section">
        <h2>Sign Up</h2>
        <p>Already have an account? <a href="/login">Log in</a></p>
        <div className="signup-methods">
          <button className="google">Google</button>
          <button className="facebook">Facebook</button>
          <button className="github">Github</button>
          <button className="feide">Feide</button>
        </div>
        <p className="or-divider">OR</p>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required

          />
          <button onClick={togglePassword}>
see password
          </button>
          {/* <a className="show_password opt_btn btn-sm" onClick={togglePassword}>
            {passwordType === "password" ? <i className="ri-eye-off-line" />
            : <i className="ri-eye-line" />}
          </a> */}
          </div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;

// import React, { useState } from 'react';

// function SignupPage() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch('http://localhost:5000/api/auth/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });
//     const data = await response.json();
//     console.log(data); // Handle response here
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
//       <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
//       <input type="email" name="email" placeholder="Email" onChange={handleChange} />
//       <input type="password" name="password" placeholder="Password" onChange={handleChange} />
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// }

// export default SignupPage;
