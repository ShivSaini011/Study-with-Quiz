// src/Api/Api_Services/AuthService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Replace with your backend API URL

const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

const verify2FA = async (email, authType, verificationCode) => {
  const response = await axios.post(`${API_URL}/verify-2fa`, { email, authType, verificationCode });
  return response.data;
};

export default {
  login,
  verify2FA
};
