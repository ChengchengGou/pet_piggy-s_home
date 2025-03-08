import React, { useState } from "react";
import "../styles/Header.css";

function Header({ setCurrentPage, toggleTheme }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isThemeMenuOpen, setThemeMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!isMenuOpen);
  const handleThemeMenuToggle = () => setThemeMenuOpen(!isThemeMenuOpen);

  return (
    <header className="header">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
     
      <div className="header-logo-title"
      onClick={() => setCurrentPage("Home")}
     >
        <img src="/images/logo.jpg" alt="Logo" className="logo" />
      
        <h1>Pet Piggies Home</h1>
      </div>

<div className="header-below">
      <nav className={`header-nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li onClick={() => setCurrentPage("Home")}>Home</li>
          <li onClick={() => setCurrentPage("About")}>About</li>
          <li onClick={() => setCurrentPage("Register")}>Register</li>
        </ul>
      </nav>
      <div className="hamburger-menu">
        <button onClick={handleMenuToggle} className="hamburger-button">
          ☰
        </button>
      </div>

   
      <div className="theme-menu">
        <button onClick={handleThemeMenuToggle} className="theme-button">
          Theme
        </button>
        {isThemeMenuOpen && (
          <div className="theme-dropdown">
            <ul>
              <li>
                <button onClick={() => toggleTheme("light")}>Light</button>
              </li>
              <li>
                <button onClick={() => toggleTheme("dark")}>Dark</button>
              </li>
            </ul>
          </div>
        )}
        </div>
      </div>
    </header>
  );
}

export default Header;