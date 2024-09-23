import React, { useState } from "react";
import RestaurantList from "./assets/components/RestaurantList";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "light" : "dark"
    );
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      {/* Navbar with Dark Mode Toggle */}
      <div className="navbar">
        <span className="logo">Vietnamese Restaurants in Atlanta</span>
        <div className="toggle-container">
          <span>🌞</span>
          <label className="switch">
            <input type="checkbox" onChange={toggleDarkMode} />
            <span className="slider"></span>
          </label>
          <span>🌚</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        <h1>Discover the Best Vietnamese Food</h1>
        <RestaurantList />
      </div>

      {/* Footer */}
      <div className="footer">
        <p>© 2024 Vietnamese Restaurant Guide | Atlanta, GA</p>
      </div>
    </div>
  );
}

export default App;
