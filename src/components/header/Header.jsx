import React, { useState } from "react";
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
  const themeButton = document.getElementById('theme-button');
  const darkTheme = 'dark-theme';
  const iconTheme = 'uil-sun';

  // Previously selected topic (if user selected)
  const selectedTheme = localStorage.getItem('selected-theme');
  const selectedIcon = localStorage.getItem('selected-icon');

  // We obtain the current theme that the interface has by validating the dark-theme class
  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
  const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

  // We validate if the user previously chose a topic
  if (selectedTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
      themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
  }

  // Activate / deactivate the theme manually with the button
  themeButton.addEventListener('click', () => {
      // Add or remove the dark / icon theme
      document.body.classList.toggle(darkTheme);
      themeButton.classList.toggle(iconTheme);
      // We save the theme and the current icon that the user chose
      localStorage.setItem('selected-theme', getCurrentTheme());
      localStorage.setItem('selected-icon', getCurrentIcon());
  });

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
            <i class="uil uil-moon" id="theme-button"></i>
          </div>

          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <i class="uil uil-apps"></i>
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Header;
