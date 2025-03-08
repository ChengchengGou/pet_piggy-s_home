import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RegistrationPage from "./pages/RegistrationPage";
import "./styles/main.css";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [theme, setTheme] = useState("light");
  

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <HomePage />;
      case "About":
        return <AboutPage />;
      case "Register":
        return <RegistrationPage />;
      default:
        return <HomePage />;
    }
  };

  const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
    document.body.className = selectedTheme === "dark" ? "dark-theme" : "light-theme";
  };

  return (
    <div>
      <Header setCurrentPage={setCurrentPage} toggleTheme={toggleTheme} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;