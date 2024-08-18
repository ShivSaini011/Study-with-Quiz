import React, { useState } from "react";
import "./signuppage.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [firstName, setFirstName] = useState("");
  const [Name, setName] = useState("");
  const [error, setError] = useState("");
  
  const [passwordType, setPasswordType] = useState("password");
  const navigate = useNavigate();

  const togglePassword = () => {
    if (passwordType === "password") {
      return setPasswordType("text");
    }
    return setPasswordType("password");
  };
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://study-with-quiz.onrender.com/api/auth/signup",
        {
          // Replace with your backend URL
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password,Name }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Signup successful", data);
        localStorage.setItem("token", data.token);

        // Handle successful signup
        // window.location.href = '/profile'; // Redirect to login page after successful signup
        navigate("/profile");
        toast.success("Login successful");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Signup failed");
      }

      //   if (response.ok) {
      //     // Save the token or user data as needed
      //     navigate('/profile'); // Redirect to profile page
      // } else {
      //     console.error('Signup failed');
      // }
    } catch (error) {
      console.error("Error during signup:", error);
      setError("An error occurred during signup.");
    }
  };

  return (
    <div className="signup-page">
      {/* <div className="promo-section">
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
          </a> *

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
      </div> */}

      <div className="w-full" id="shell">
        <main id="shell_content" role="main">
          <div className="is-hidden" id="global_alerts">
            <div className="alert-box"></div>
          </div>
          <div
            className="w-80 max-w-full mx-auto my-16 pt-8 pb-6 px-6 text-center bg-ui-section rounded-lg"
            data-controller="auth"
          >
            <form
              className="simple_form hide-field-errors"
              onSubmit={handleSignup}
            >
              <input name="utf8" type="hidden" value="✓" autoComplete="off" />
              <input
                type="hidden"
                name="authenticity_token"
                value="9GmmrCJdasvuGTMwzE1vPcwrxu7P6kjgCIfNt6Wy57WNONE/pbP040sE22u/cc6oPbQzcV7FizPASXerBjIqfQ=="
                autoComplete="off"
              />
              <a data-turbolinks="false" href="/">
                <img
                  className="hidden dark:block w-48 h-full object-contain mx-auto my-0 pb-10"
                  src="./"
                />
                <img
                  className="block dark:hidden w-48 h-full object-contain mx-auto my-0 pb-10"
                  src="./"
                />
              </a>
              <button
                className="w-full mx-auto inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900"
                data-action="auth#githubSignIn"
                data-token="pcSYwR8sHqGq5yXRniY/HxBrAUMf+6PjDbudin+Llfiar+T4j6fM7cwd21p3rZWeQZcQ29KYYWDQpz+hKI/umQ=="
                type="button"
              >
                <span>Sign in with Google</span>
              </button>
              <div className="my-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-ui-section text-gray-500">OR</span>
                  </div>
                </div>
              </div>
              <div id="flash"></div>
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="relative rounded-none rounded-t-md">
                  <label className="sr-only" htmlFor="user_email">
                    Email
                  </label>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-20">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    className="form-input relative appearance-none block w-full pl-10 sm:text-sm rounded-none rounded-t-md dark:bg-gray-800 focus:outline-none focus:ring-cgray-300 dark:focus:ring-cgray-600 focus:border-cgray-300 dark:focus:border-cgray-600 border-gray-300 dark:border-gray-700 focus:z-10"
                    id="user_email"
                    name="user[email]"
                    placeholder="email"
                    type="text"
                  />
                </div>
                <div className="relative rounded-none rounded-t-md">
                  <label className="sr-only" htmlFor="user_Name">
                    Name
                  </label>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-20">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    className="form-input relative appearance-none block w-full pl-10 sm:text-sm rounded-none rounded-t-md dark:bg-gray-800 focus:outline-none focus:ring-cgray-300 dark:focus:ring-cgray-600 focus:border-cgray-300 dark:focus:border-cgray-600 border-gray-300 dark:border-gray-700 focus:z-10"
                    id="Name"
                    name="user[Name]"
                    placeholder="Name"
                    type="text"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="relative rounded-none rounded-b-md">
                  <label className="sr-only" htmlFor="user_password">
                    Password
                  </label>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-20">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                  </div>
                  <input
                    className="form-input relative appearance-none block w-full pl-10 sm:text-sm rounded-none rounded-b-md dark:bg-gray-800 focus:outline-none focus:ring-cgray-300 dark:focus:ring-cgray-600 focus:border-cgray-300 dark:focus:border-cgray-600 border-gray-300 dark:border-gray-700 focus:z-10"
                    type="password"
                    id="password"
                    placeholder="Password"
                    autoComplete="off"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                
              </div>
              <input
                value="true"
                autoComplete="off"
                type="hidden"
                name="user[remember_me]"
                id="user_remember_me"
              />
              {error && <p className="error-message">{error}</p>}
              <div className="my-2 text-right">
                <a
                  className="text-xs"
                  data-turbolinks="false"
                  href="https://www.codewars.com/users/password/new"
                  tabIndex="-1"
                >
                  Forgot your password?
                </a>
              </div>
              <button
                className="btn mt-3 w-full text-center inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white dark:text-gray-200 is-red focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-cgray-600"
                type="submit"
              >
                Sign in
              </button>
            </form>
            <div className="mt-6 text-center text-ui-text-lc text-xs">
              <a
                className="underline"
                data-turbolinks="false"
                href="/login"
                tabIndex="-1"
              >
                Sign up
              </a>
              <span className="ml-1">if you don't have an account yet.</span>
            </div>
          </div>
        </main>
        <div className="clearfix"></div>
      </div>
      <div className="clearfix"></div>

      <div className="modal" id="confirm_modal">
        <div className="modal-header">
          <div className="close" data-dismiss="modal">
            <i className="icon-moon-x"></i>
          </div>
          <h4>Confirm</h4>
          <div className="clearfix"></div>
        </div>
        <div className="clearfix"></div>
        <div className="modal-body view"></div>
        <div className="modal-footer">
          <ul className="form-actions">
            <li className="cancel" data-dismiss="modal">
              <a className="btn">Cancel</a>
            </li>
            <li className="alt-confirm is-hidden">
              <a className="btn"></a>
            </li>
            <li className="confirm">
              <a className="btn is-green">
                <i className="icon-general-checkmark"></i>Confirm
              </a>
            </li>
          </ul>
        </div>
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
