import axios from "axios";

const API_URL = "http://localhost:5000/api/users";


export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Erreur serveur" };
  }
};


export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials); 
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Erreur serveur" };
  }
}


export const verifyOtp = async (otpData) => {
  try {
    const response = await axios.post(`${API_URL}/verify-otp`, otpData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Erreur serveur" };
  }
};


export const forgotPassword = async (emailData) => {
  try {
    const response = await axios.post(`${API_URL}/forgot-password`, emailData);     
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Erreur serveur" };
  }     

}

export const resetPassword = async (resetData) => {
  try {
    const response = await axios.post(`${API_URL}/reset-password`, resetData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Erreur serveur" };
  } 
};  