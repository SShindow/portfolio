import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  // Change background header
  window.addEventListener('scroll', 
  function(){
      const header = document.querySelector('.header');
      if (this.scrollY >= 100) header.classList.add('scroll-header')
      else header.classList.remove('scroll-header');
  })
  // Toggle Menu
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");


  /*==========================Dark Light Theme==========================*/
  // const [darkMode, setDarkMode] = useState(false);
  const darkTheme = "dark-theme";
  // const iconTheme = "uil-sun";
  // const themeButton = document.getElementById("theme-button");

  // // Function to toggle dark mode
  // const toggleDarkMode = () => {
  //   setDarkMode((prevDarkMode) => !prevDarkMode);
  // };

  // // Effect to set the theme on initial load and whenever darkMode state changes
  // useEffect(() => {
  //   const selectedTheme = darkMode ? "dark" : "light";
  //   const selectedIcon = darkMode ? "uil-moon" : "uil-sun";

  //   // Update the classList and localStorage
  //   document.body.classList.toggle(darkTheme, darkMode);
  //   themeButton.classList.toggle(iconTheme, darkMode);
  //   localStorage.setItem("selected-theme", selectedTheme);
  //   localStorage.setItem("selected-icon", selectedIcon);
  // }, [darkMode]);

  // Dark mode related state
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  // Effect to set the theme on initial load and whenever darkMode state changes
  useEffect(() => {
    const selectedTheme = darkMode ? "dark" : "light";
    const selectedIcon = darkMode ? "uil-moon" : "uil-sun";

    // Update the classList and localStorage
    document.body.classList.toggle(darkTheme, darkMode);
    localStorage.setItem("selected-theme", selectedTheme);
    localStorage.setItem("selected-icon", selectedIcon);
  }, [darkMode]);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Hai
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home"
              onClick={() => setActiveNav("#home")}
              className={activeNav === "#home" ?
              "nav__link active-link" : "nav__link"}>
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about"
              onClick={() => setActiveNav("#about")}
              className={activeNav === "#about" ?
              "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" 
              onClick={() => setActiveNav("#skills")}
              className={activeNav === "#skills" ?
              "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" 
              onClick={() => setActiveNav("#services")}
              className={activeNav === "#services" ?
              "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" 
              onClick={() => setActiveNav("#projects")}
              className={activeNav === "#projects" ?
              "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-scenery nav__icon"></i>Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" 
              onClick={() => setActiveNav("#contact")}
              className={activeNav === "#contact" ?
              "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

          <div className="nav__btns">
            <div className="nav__change-theme">
              <button onClick={toggleDarkMode}>
                <i className={darkMode ? "uil uil-sun" : "uil uil-moon"}></i>
              </button>
            </div>

            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
              <i class="uil uil-apps"></i>
            </div>
          </div>

          {/* <div className="nav__btns">
          <div className="nav__change-theme">
            <button
              onClick={toggleDarkMode}
              className={darkMode ? "dark" : "light"}
            >
              <i className={darkMode ? "uil uil-sun" : "uil uil-moon"}></i>
            </button>
          </div>
        </div> */}




      </nav>
    </header>
  );
};

export default Header;
