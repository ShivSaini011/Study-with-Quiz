import React, { useEffect, createContext, useState, useRef } from 'react';
import axios from 'axios';

export const ProfileContext = createContext();

export function ProfileProvider(props) {
  const [email, setEmail] = useState('');
  const [authType, setAuthType] = useState();
  const [kycStatus, setKycStatus] = useState();
  const [checkSignId, setCheckSignId] = useState({ email: false, mobile: false });
  let token = sessionStorage.getItem('CTEX_AUTH_TOKEN');

  useEffect(() => {
    if (token) {
      handleUserDetails();
    }
  }, []);

  const handleUserDetails = async () => {
    try {
      const response = await axios.get('https://your-backend-api.com/user/details', {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.data.success) {
        const data = response.data.data;
        setCheckSignId({
          email: !!data.emailId,
          mobile: !!data.mobileNumber,
        });
        setEmail(data.emailId);
        setAuthType(data['2fa']);
        setKycStatus(data.kycVerified);
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  useEffect(() => {
    const btnScrollToTop = document.querySelector("#btnScrollToTop");
    if (btnScrollToTop) {
      btnScrollToTop.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      });
      window.addEventListener('scroll', () => {
        btnScrollToTop.style.display = window.scrollY > 100 ? "block" : "none";
      });
    }
  }, []);

  return (
    <>
      <button id='btnScrollToTop' type='button'><i className="ri-arrow-up-line"></i></button>
      <ProfileContext.Provider value={{ handleUserDetails, email, setEmail, authType, kycStatus, checkSignId }}>
        {props.children}
      </ProfileContext.Provider>
    </>
  );
}
