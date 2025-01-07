import React, { useState, useEffect } from "react";
import { Router, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

const Header = () => {
    const [token, setToken] = useState(null);
    const [username, setUser] = useState(null);
    const [email, setEmail] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const username = sessionStorage.getItem('username'); 
        const email = sessionStorage.getItem('email'); 
        if (!token) {
            console.log("No token found, redirect to login");
            navigate("/login");
        }

        if (username) { 
            setToken(token); 
            setUser(username); 
        }
        if (email) { 
            setEmail(email); 
        }
    }, []);


  const logout = async () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("username");
    console.log("Logged out, token removed");
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  return (
    <header style={headerStyle}>
      <h1 className="cursor-pointer">My Blog {token ? ( <p>{ username }</p> ) : ( <p></p> )}</h1>
      <nav>
        {token ? (
          <>
            <a style={navLink} className="cursor-pointer" href="/">
              Home
            </a>
            <a style={navLink} className="cursor-pointer" href="/add">
              Add Blog
            </a>
            <a style={navLink} className="cursor-pointer" onClick={logout}>
              Logout
            </a>
          </>
        ) : (
          <>
            <a style={navLink} className="cursor-pointer" onClick={() => navigate("/register")}>
              Register
            </a>
            <a style={navLink} className="cursor-pointer" onClick={() => navigate("/login")}>
              Login
            </a>
          </>
        )}
        {/* <a style={navLink} onClick={() => logout()}>Logout</a> */}
      </nav>
    </header>
  );
};

const headerStyle = {
  padding: "10px",
  background: "#fffff6",
  color: "#83736a",
  textAlign: "center",
};

const navLink = {
  color: "rgb(131, 115, 106)",
  margin: "0 10px",
  display: "inline-block",
  width: "70px",
  textDecoration: "none",
};

export default Header;
