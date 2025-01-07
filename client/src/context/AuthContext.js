// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
// import jwt_decode from 'jwt-decode';
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    // console.log("token: " + token);
    if (token) {
      const decoded = jwtDecode(token);
      setAuth(decoded.user);
    }
  }, []);

  const login = (token) => {
    console.log('token: ' + token);
    
    localStorage.setItem('token', token);
    const decoded = jwtDecode(token);
    setAuth(decoded.user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth(null);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
