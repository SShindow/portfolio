import React from 'react'
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <h1 className="footer__title">Hai</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">Services</a>
                </li>

                <li>
                    <a href="#qualification" className="footer__link">Qualification</a>
                </li>

                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>

                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.facebook.com/hiacao1811/" 
                    className="footer__social-link" target="_blank" rel="noreferrer">
                    <i class="bx bxl-facebook"></i>
                </a>
                <a href="https://www.instagram.com/hiacao_1811/?hl=en" 
                    className="footer__social-link" target="_blank" rel="noreferrer">
                    <i class="bx bxl-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/haicaoxuan/"
                    className="footer__social-link" target="_blank" rel="noreferrer">
                    <i class="bx bxl-linkedin"></i>
                </a>    
                <a href="https://github.com/SShindow" 
                    className="footer__social-link" target="_blank" rel="noreferrer">
                    <i class="bx bxl-github"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; 2023 Hai Cao. All right reserved</span>
        </footer>
    )
}

export default Footer