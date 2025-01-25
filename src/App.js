import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import HomePage from "./screens/HomePage";
import "./App.css";
import logo from "./images/NoktaLogo.png";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login ve Signup sayfaları header ile birlikte görünür */}
        <Route
          path="/"
          element={
            <HeaderLayout>
              <Login />
            </HeaderLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <HeaderLayout>
              <Signup />
            </HeaderLayout>
          }
        />

        {/* HomePage sayfası tamamen farklı bir düzen alır */}
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

/* Header ile sarılı bir düzen */
const HeaderLayout = ({ children }) => {
  return (
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
            style={{
              backgroundColor: "white",
              color: "#004080",
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
                color: "#004080",
              }}
            >
              Login
            </Link>
          </button>
          <button
            style={{
              backgroundColor: "white",
              color: "#004080",
              border: "1px solid #004080",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            <Link
              to="/signup"
              style={{
                textDecoration: "none",
                color: "#004080",
              }}
            >
              Signup
            </Link>
          </button>
        </div>
      </header>
      {children}
    </div>
  );
};

export default App;
