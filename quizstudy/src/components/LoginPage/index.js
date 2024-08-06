// src/pages/LoginPage.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";



import CustomAlertMessage from '../../Utils/CustomAlertMessage'; // Ensure this path is correct
// import { Autoplay, Pagination, Navigation } from "swiper";
import { alertSuccessMessage, alertWarningMessage } from "../../Utils/CustomAlertMessage";

import AuthService from "../../Api/Api_Services/AuthService";



const LoginPage = () => {
  const navigate = useNavigate();
  const [isAuthEnabled, setIsAuthEnabled] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [userDetails, setUserDetails] = useState();
  const [authType, setAuthType] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [buttonLoader, setButtonLoader] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      alertWarningMessage('Please enter Email and Password');
      return;
    } else if (!email.includes("@")) {
      alertWarningMessage('Please enter a valid email address');
      return;
    }
    try {
      setButtonLoader(true);
      const result = await AuthService.login(email, password);
      setButtonLoader(false);
      if (result?.success) {
        if (result?.data?.['2fa'] === 0) {
          alertSuccessMessage('Login Successful!!');
          sessionStorage.setItem("AUTH_TOKEN", result?.data?.token);
          sessionStorage.setItem("userId", result?.data?.userId);
          navigate("/dashboard");
          window.location.reload();
        } else {
          setAuthType(result?.data?.['2fa']);
          setIsAuthEnabled(true);
          setUserDetails(result?.data);
        }
      }
    } catch (error) {
      setButtonLoader(false);
      alertWarningMessage('Login failed. Please try again.');
    }
  };

  const handleAuthVerify = async () => {
    try {
      setButtonLoader(true);
      const result = await AuthService.verify2FA(email, authType, verificationCode);
      setButtonLoader(false);
      if (result?.success) {
        sessionStorage.setItem("AUTH_TOKEN", result?.data?.token);
        sessionStorage.setItem("userId", result?.data?.userId);
        alertSuccessMessage('Verification Successful!!');
        navigate("/dashboard");
        window.location.reload();
      }
    } catch (error) {
      setButtonLoader(false);
      alertWarningMessage('Verification failed. Please try again.');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [email, password]);

  return (
    <>
      <section className="inner-page-banner pb-0">
        <section className="login-bg">
          <div className="container">
            <div className="">
              <div className="row align-items-center justify-content-center">
                <div className="col-xl-7 col-lg-12">
                  <div className="poster_slider">
                    <h2 className="mb-5">
                      Welcome to <br />
                      <span className="text-gradient">Savans web</span>
                    </h2>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-12">
                  <div className="signup-wrapper p-0">
                    <div className="signup-content signin-content">
                      <div className={`sign-in_tab ${isAuthEnabled && "d-none"}`}>
                        <h3 className="mb-2">Sign In to study </h3>
                        <div className="tab-content mt-5">
                          <div className="tab-pane show px-0 container active" id="login_Mobile">
                            <form action="#">
                              <div className="row">
                                <div className="col-12">
                                  <div className="field-box">
                                    <label htmlFor="Code" className="form-label">
                                      Email
                                    </label>
                                  </div>
                                </div>
                                <div className="col-12 mb-4">
                                  <div className="field-box">
                                    <input
                                      id="email"
                                      type="text"
                                      placeholder="Enter Email"
                                      value={email}
                                      onChange={(e) => { setEmail(e.target.value); }}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12 mb-4">
                                  <div className="field-box">
                                    <label htmlFor="password" className="form-label">
                                      Password
                                    </label>
                                    <div className="field-otp-box">
                                      <input
                                        name="password"
                                        placeholder="Enter Password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => { setPassword(e.target.value); }}
                                      />
                                      <a className="show_password opt_btn btn-sm loader" href="#/" onClick={() => { setShowPassword(!showPassword); }}>
                                        {showPassword ? <i className="ri-eye-off-line" /> : <i className="ri-eye-line" />}
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12 mb-4">
                                  <div className="field-box">
                                    <Link to="/ForgotPassPage">
                                      Forgot Password?
                                    </Link>
                                  </div>
                                </div>
                                <div className="col-md-12 mb-4 mt-4">
                                  <div className="field-box">
                                    {buttonLoader ? (
                                      <button id="inValid" className="btn btn-gradient w-100 justify-content-center btn-medium" type="button">
                                        <div className="spinner-border text-light" role="status">
                                          <span className="visually-hidden">Loading...</span>
                                        </div>
                                      </button>
                                    ) : (
                                      <button className="btn btn-gradient w-100 justify-content-center btn-medium" type="button" onClick={handleLogin}>
                                        <span>Sign In</span>
                                      </button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div className="row justify-content-center text-center">
                            <div className="col-lg-12">
                              Don't have an account? <Link to="/signup" className="color-primary">Sign Up</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={`otb_tab ${!isAuthEnabled && "d-none"}`}>
                        <div className="mb-3">
                          <h3 className="mb-2 text-center">Two Factor Verification</h3>
                          <p className="medium text-center">
                            {authType === 2
                              ? "Your Code will be sent to Google Authenticator App"
                              : authType === 1 ? `Your Code will be sent to ${userDetails?.email}` : `Your Code will be sent to ${userDetails?.phone}`}
                          </p>
                        </div>
                        <form>
                          <div className="row">
                            <div className="col-md-12 mb-4">
                              <div className="field-box">
                                <label htmlFor="Code" className="form-label">
                                  Enter Code
                                </label>
                                <input
                                  placeholder="Enter Verification Code"
                                  id="Verification"
                                  type="number"
                                  onWheel={(e) => e.target.blur()}
                                  value={verificationCode}
                                  onChange={(e) => { setVerificationCode(e.target.value); }}
                                />
                              </div>
                            </div>
                            <div className="col-md-12 mb-4 mt-4">
                              <div className="field-box">
                                {buttonLoader ? (
                                  <button className="btn btn-gradient w-100 justify-content-center btn-medium" type="button" id="inValid">
                                    <div className="spinner-border text-light" role="status">
                                      <span className="visually-hidden">Loading...</span>
                                    </div>
                                  </button>
                                ) : (
                                  <button className="btn btn-gradient w-100 justify-content-center btn-medium" type="button" onClick={handleAuthVerify}>
                                    <span>Verify</span>
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </form>
                        <div className="row justify-content-center text-center">
                          <div className="col-lg-12">
                            Back to{" "}
                            <Link to="#" className={"color-primary"} onClick={() => setIsAuthEnabled(false)}>
                              Sign In
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default LoginPage;
