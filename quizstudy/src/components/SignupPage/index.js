import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link, useNavigate } from "react-router-dom";
import LoaderHelper from "../../Utils/Loading/LoaderHelper";
import { alertErrorMessage, alertSuccessMessage, alertWarningMessage } from "../../Utils/CustomAlertMessage";
// import AuthService from "../../Api/Api_Services/AuthService";
// import DefaultInput from "../../Utils/DefaultInput";
import { matchPassword, notEqualsZero, validPassword, validPasswordLength, validateEmail } from "../../Utils/Validation";
// import { CountryDetails } from "../../Utils/CountryList";

const SignupPage = () => {

  const navigate = useNavigate();
  const ref = window.location.href.split("=")[1];
  const [signId, setSignId] = useState("");
  const [mobile, setMobile] = useState('');

  const [age, setAge] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [password, setPassword] = useState("");
  const [cPassword, setCpassword] = useState("");
  const [countryCode, setCountryCode] = useState("91:India");
  const [invitation, setInvitation] = useState(ref ? ref : '');
  const [otp, setOtp] = useState("");
  const [mobOtp, setMobOtp] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedCondition, setIsCheckedCondition] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [reEnterPasswordType, setReEnterPasswordType] = useState("password");
  const [disableBtn, setDisbaleBtn] = useState(false);
  const [validations, setValidations] = useState(false);
  const [numberValidation, setNumberValidation] = useState(false);
  const [specialValidation, setSpecialValidation] = useState(false);
  const [minLength, setMinLength] = useState(false);
  const [buttonLoader, setButtonLoader] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleAgeChange = (e) => {
    const value = e.target.value;
    setAge(value);

    if (value && value < 18) {
      setErrorMessage('Invalid user: Age must be 18 or older.');
    } 
    else if(value && value > 120) {
      setErrorMessage('Invalid user: Not allowed to be age 120 or older');
    } 
    else{
      setErrorMessage('');
    }
  };

  const handleRegister = async (signId, password, cPassword, otp, invitation) => {
    try {
      setButtonLoader(true)
      const result = await AuthService.register(signId, password, cPassword, otp, invitation)
      setButtonLoader(false)
      if (result?.success) {
        alertSuccessMessage('Registration Successfull!!')
        sessionStorage.setItem("CTEX_AUTH_TOKEN", result?.data?.token);
        navigate("/trade/exchange");
        window.location.reload()
      }
    } catch (error) {
      setButtonLoader(false)
    }
  };

  useEffect(() => {
    password && /(?=.*?[0-9])/.test(password)
      ? setNumberValidation(true)
      : setNumberValidation(false);
  }, [password]);

  useEffect(() => {
    password && /(?=.*?[#?!@$%^&*-])/.test(password)
      ? setSpecialValidation(true)
      : setSpecialValidation(false);
  }, [password]);

  useEffect(() => {
    password && /.{8,}/.test(password)
      ? setMinLength(true)
      : setMinLength(false);
  }, [password]);

  const handleGetOtp = async (signId, type) => {
    if (!signId) {
      alertWarningMessage('Please enter email')
      return
    }
    if (type === 'phone') {
      const [code, label] = countryCode.split(':');
      let filteredCountry = CountryDetails?.filter((data) => data?.phone === code && data?.label === label)?.map((item) => item?.phoneLength);
      if (signId?.length !== filteredCountry[0]) {
        alertWarningMessage(`Please enter valid phone number for ${label}`)
        return
      }
    };
    LoaderHelper.loaderStatus(true);
    await AuthService.getOtp(signId, 'registration').then(async (result) => {
      LoaderHelper.loaderStatus(false);
      if (result?.success) {
        alertSuccessMessage(result?.message);
        setDisbaleBtn(true);
      }
    });
  };



  const togglePassword = () => {
    if (passwordType === "password") {
      return setPasswordType("text");
    }
    return setPasswordType("password");
  };

  const toggleConfirmPassword = () => {
    if (reEnterPasswordType === "password") {
      return setReEnterPasswordType("text");
    }
    return setReEnterPasswordType("password");
  };



  return (
    <>
      <section className="inner-page-banner pb-0">

      </section>
      <section className="">
        <div className="container">
          <div className="row align-items-cente  justify-content-center">
            <div className="col-xl-7 col-lg-12 ">
              <div className="poster_slider poster_slider_signup">
                <h2 className="mb-5  ">
                  Welcome to <br />
                  <span className="text-gradient">GapxBit</span>
                </h2>
                <Swiper className="market_slider  pb-11" spaceBetween={10} loop={true} autoplay={{
                  delay: 2000
                }}
                  pagination={{
                    dynamicBullets: true,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                  }}>
                  <SwiperSlide>
                    <a href="#/" className="main_poster"><img src="/images/WEBSITE LOGIN PAGE-01.jpg" alt="" /></a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="#/" className="main_poster"><img src="/images/WEBSITE LOGIN PAGE-02.jpg" alt="" /></a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="#/" className="main_poster"> <img src="/images/new_poster_2.png" alt="" /></a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="#/" className="main_poster"><img src="/images/WEBSITE LOGIN PAGE-01.jpg" alt="" /></a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="#/" className="main_poster"><img src="/images/WEBSITE LOGIN PAGE-02.jpg" alt="" /></a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="#/" className="main_poster"> <img src="/images/new_poster_2.png" alt="" /></a>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="col-xl-5 col-lg-12 ">
              <div className="signup-wrapper p-0">
                <div
                  className="signup-content signin-content"
                  onClick={(e) => { setValidations(false) }} >
                  <div className="sign-in_tab" id="qwerty">
                    <h3 className="mb-2">Sign Up to GapxBit</h3>
                    {/* <div className="mb-3">
                      <ul className="nav custom-tabs my-1">
                        <li>
                          <a className="active" data-bs-toggle="tab" href="#login_Mobile" onClick={handleResetInput}>
                            Mobile
                          </a>
                        </li>
                        <li>
                          <a data-bs-toggle="tab" href="#login_email" className="" onClick={handleResetInput}>
                            Email
                          </a>
                        </li>
                      </ul>
                    </div> */}
                    <div className="tab-content">
                      <div className="tab-pane show  px-0 container active" id="login_Mobile">
                        <div>
                          <div className="row">
                            {/* <div className="col-12">
                              <div className="fleld-box">
                                <label htmlFor="Code" className="form-label">
                                  Phone
                                  <span style={{ color: "red" }}>*</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-12 mb-3">
                              <div className="field-box ">
                                <select name="countryCode" value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
                                  <optgroup >
                                    {CountryDetails?.map(value => {
                                      return <option value={`${value?.phone}:${value?.label}`} key={`${value?.phone}:${value?.label}`}>
                                        {`${value?.label}  (+${value?.phone})`}
                                      </option>
                                    })}
                                  </optgroup>
                                </select>
                              </div>
                            </div>
                            <div className="col-12 mb-3">
                              <div className="field-box field-otp-box">
                                <input id="mobile" name="mobile" type="number" placeholder="Enter phone number"
                                  value={mobile} onChange={(e) => setMobile(e.target.value)} onWheel={(e) => e.target.blur()} />
                                <button type="btn" className="btn btn-sm btn-gradient" onClick={() => handleGetOtp(mobile, 'phone')}>
                                  <span>{disableBtn ? 'Resend OTP' : 'GET OTP '} </span>
                                </button>
                              </div>
                            </div> */}
                            {/* <div className="col-md-12 mb-3">
                              <div className="field-box">
                                <label htmlFor="Mobbtp" className="form-label">
                                  Phone Verification Code<span style={{ color: "red" }}>*</span>
                                </label>
                                <input id="Mobbtp" name="otp" type="number" placeholder="Enter phone verification code"
                                  value={mobOtp} onChange={(e) => setMobOtp(e.target.value)} onWheel={(e) => e.target.blur()} />
                              </div>
                            </div> */}

                            <div className="col-md-12 mb-3">
                              <div className="field-box">
                                <label htmlFor="email" className="form-label">
                                  Email<span style={{ color: "red" }}>*</span>
                                </label>
                                <div className=" field-otp-box">
                                  <input id="email" name="email" type="email" placeholder="Enter email" value={signId} onChange={(e) => setSignId(e.target.value)} />
                                  <button type="btn" className="btn btn-sm btn-gradient"
                                    onClick={() => {
                                      validateEmail(signId) !== undefined && notEqualsZero(signId) ? alertErrorMessage("Invalid emailId") : handleGetOtp(signId)
                                    }} >
                                    <span>{disableBtn ? 'Resend OTP' : 'GET OTP '}</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-4">
                              <div className="field-box">
                                <label htmlFor="emailotp" className="form-label">
                                  Email Verification Code<span style={{ color: "red" }}>*</span>
                                </label>
                                <input id="emailotp" name="otp" type="number" placeholder="Enter email verification code" value={otp}
                                  onChange={(e) => setOtp(e.target.value)} onWheel={(e) => e.target.blur()} />
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="field-box mb-4">
                                <label htmlFor="password" className="form-label">
                                  Password<span style={{ color: "red" }}>*</span>
                                </label>
                                <div className="field-otp-box">
                                  <DefaultInput type={passwordType} name="password" value={password} placeholder="Enter password"
                                    autoComplete="off"
                                    errorstatus={(validPassword(password) !== undefined &&
                                      notEqualsZero(password) && validPasswordLength(password)) ? 'true' : 'false'}
                                    errormessage={!validations ? validPassword(password) && validPasswordLength(password) : ""}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onClick={(e) => e.stopPropagation()}
                                    onFocus={(e) => { setValidations(true) }} />
                                  <a className="show_password opt_btn btn-sm" onClick={togglePassword}>
                                    {passwordType === "password" ? <i className="ri-eye-off-line" />
                                      : <i className="ri-eye-line" />}
                                  </a>
                                </div>
                                <div
                                  className={!validations ? "display-none" : "pass_conditions"}>
                                  <div>
                                    {validations &&
                                      (numberValidation ?
                                        <div className="d-flex align-items-center">
                                          <i className="ri-check-double-line text-success"></i>
                                          <span style={{ fontSize: "small" }}>
                                            At least 1 number
                                          </span>
                                        </div>
                                        :
                                        <div className="d-flex align-items-center">
                                          <i className="ri-close-fill text-danger"></i>
                                          <span style={{ fontSize: "small" }}>
                                            At least 1 number
                                          </span>
                                        </div>)}
                                  </div>

                                  <div>
                                    {validations &&
                                      (specialValidation ?
                                        <div className="d-flex align-items-center">
                                          <i className="ri-check-double-line text-success"></i>
                                          <span style={{ fontSize: "small" }}>
                                            At least 1 special character
                                          </span>
                                        </div>
                                        :
                                        <div className="d-flex align-items-center">
                                          <i className="ri-close-fill text-danger"></i>
                                          <span style={{ fontSize: "small" }}>
                                            At least 1 special character
                                          </span>
                                        </div>
                                      )}
                                  </div>

                                  <div>
                                    {validations &&
                                      (minLength ?
                                        <div className="d-flex align-items-center">
                                          <i className="ri-check-double-line text-success"></i>
                                          <span style={{ fontSize: "small" }}>
                                            Minimum 8 characters
                                          </span>
                                        </div>
                                        :
                                        <div className="d-flex align-items-center">
                                          <i className="ri-close-fill text-danger"></i>
                                          <span style={{ fontSize: "small" }}>
                                            Minimum 8 characters
                                          </span>
                                        </div>)}
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-12 mb-3">
                                <div className="field-box">
                                  <label htmlFor="cPassword" className="form-label">
                                    Confirm Password<span style={{ color: "red" }}>*</span>
                                  </label>
                                  <div className="field-otp-box">
                                    <DefaultInput type={reEnterPasswordType} name="cPassword" value={cPassword} placeholder="Enter confirm password" autoComplete="off" errorstatus={(notEqualsZero(cPassword) && matchPassword(password, cPassword)) ? 'true' : 'false'}
                                      errormessage={matchPassword(password, cPassword)} onChange={(e) => setCpassword(e.target.value)} />
                                    <a className="show_password opt_btn btn-sm " onClick={toggleConfirmPassword} >
                                      {reEnterPasswordType === "password" ? <i className="ri-eye-off-line" />
                                        : <i className="ri-eye-line" />}
                                    </a>
                                  </div>
                                </div>
                              </div>
                              {/* age section */}
                              <div className="col-md-12 mb-3">
                                <div className="field-box">
                                  <label htmlFor="age" className="form-label">
                                    Age<span style={{ color: "red" }}>*</span>
                                  </label>
                                  <div className="field-otp-box">
                                    <input
                                      placeholder="Enter Age"
                                      type="number"
                                      name="age"
                                      id="age"
                                      value={age}
                                      onChange={handleAgeChange}
                                      autoComplete="off"
                                    />
                                  </div>
                                  {errorMessage && <div className="errorText">{errorMessage}</div>}
                                </div>
                              </div>
                             
                              <div className="col-md-12 mb-3">
                                <div className="field-box">
                                  <label htmlFor="password" className="form-label" >
                                    Invitation code(Optional)
                                  </label>

                                  <input id="Invitation" name="mInvitation" type="text" placeholder="Enter invitation code" disabled={ref} value={ref ? ref : invitation}
                                    onChange={(e) => setInvitation(e.target.value)} />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-check mb-3">
                                  <input className="form-check-input" type="checkbox" id="flexCheckDefault"
                                    value={isChecked} onClick={() => setIsChecked((isChecked) => !isChecked)} />
                                  I agree to accept {' '}
                                  <Link to="/TermsOfUsePage" className="btn-link" target="_blank" >
                                    Terms of Use <span style={{ color: "red" }}>*</span>
                                  </Link>
                                  {!isChecked && showMessage ? <div style={{ color: "red", fontWeight: "bold" }} >
                                    Please accept Term of Use by clicking on checkbox
                                  </div> : " "}
                                </div>
                              </div>
                              <div className="col-md-12 mb-3 mt-3">
                                <div className="field-box">
                                </div>
                              </div>
                              <div className="col-md-12 mb-3 mt-3">
                                <div className="field-box">
                                  {buttonLoader ? <button className="btn btn-gradient w-100 justify-content-center btn-medium" type="button" id="inValid">
                                    <div className="spinner-border text-light" role="status">
                                      <span className="visually-hidden">Loading...</span>
                                    </div>
                                  </button> : <button className="btn btn-gradient w-100 justify-content-center btn-medium" type="button"

                                    disabled={!signId || !password ||!age < 18 && age>120 || !cPassword || !otp || password !== cPassword ||
                                      !(validPassword(password) === undefined || !notEqualsZero(password)) || !notEqualsZero(signId) || !(validPassword(cPassword) === undefined || !notEqualsZero(cPassword))}
                                    onClick={() => {
                                      isChecked ? handleRegister(signId, password, cPassword, otp, invitation) : setShowMessage((showMessage) => !showMessage)
                                    }}>
                                    <span>Sign Up</span>
                                  </button>}

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row justify-content-center text-center">
                        <div className="col-lg-12">
                          Already have an account?{" "}
                          <Link to="/login" className="color-primary">
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
    </>
  );
};

export default SignupPage;
