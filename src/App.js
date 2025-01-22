// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import "./App.css";
import logo from "./images/NoktaLogo.png";

function App() {
  const [selectedTab, setSelectedTab] = useState("login");

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="logo-container">
            <img src={logo} alt="Nokta Logo" className="logo" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <button
              onClick={() => setSelectedTab("login")}
              style={{
                backgroundColor: selectedTab === "login" ? "#004080" : "white",
                color: selectedTab === "login" ? "white" : "#004080",
                border: "1px solid #004080",
                padding: "10px 20px",
                cursor: "pointer",
                marginRight: "5px",
              }}
            >
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: selectedTab === "login" ? "white" : "#004080",
                }}
              >
                Login
              </Link>
            </button>
            <button
              onClick={() => setSelectedTab("signup")}
              style={{
                backgroundColor: selectedTab === "signup" ? "#004080" : "white",
                color: selectedTab === "signup" ? "white" : "#004080",
                border: "1px solid #004080",
                padding: "10px 20px",
                cursor: "pointer",
              }}
            >
              <Link
                to="/signup"
                style={{
                  textDecoration: "none",
                  color: selectedTab === "signup" ? "white" : "#004080",
                }}
              >
                Signup
              </Link>
            </button>
          </div>

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup/*" element={<Signup />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
