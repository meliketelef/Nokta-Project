import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import HomePage from "./screens/HomePage";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Login ve Signup rotaları */}
          <Route path="/" element={<HeaderLayout component={<Login />} />} />
          <Route
            path="/signup"
            element={<HeaderLayout component={<Signup />} />}
          />

          {/* HomePage rotası */}
          <Route path="/homepage" element={<HomePageLayout />} />
        </Routes>
      </div>
    </Router>
  );
}

/* Header ile Layout */
const HeaderLayout = ({ component }) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="logo">Nokta</h1>
        <div className="toggle-buttons">
          <button>
            <a href="/" style={{ textDecoration: "none", color: "white" }}>
              Login
            </a>
          </button>
          <button>
            <a
              href="/signup"
              style={{ textDecoration: "none", color: "white" }}
            >
              Signup
            </a>
          </button>
        </div>
      </header>
      {component}
    </div>
  );
};

/* Sadece HomePage Layout */
const HomePageLayout = () => {
  return (
    <div className="home-container">
      <HomePage />
    </div>
  );
};

export default App;
