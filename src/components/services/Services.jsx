import React, { useState } from "react";
import "./services.css";

const Services = () => {
    const[toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I can do</span>

        <div className="services__container container grid">
        <div className="services__content">
            <div>
            <i class='bx bx-code-alt services__icon'></i>
            <h3 className="services__title">
                Frontend <br/> Developer
            </h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(1)}>
            View more
            <i class="bx bx-chevron-right services__button-icon"></i>
            </span>

            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
                <i onClick={() => toggleTab(0)}
                class="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title">Frontend Developer</h3>
                <p className="services__modal-description">
                "Primary focus on the client-side of development, 
                ensuring seamless user experiences and optimal performance 
                across different devices and browsers"
                </p>

                <ul className="services__modal-services grid">
                <li className="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                        Implement web designs and UI mockups
                    </p>
                </li>

                <li className="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Develop responsive UI across devices
                    </p>
                </li>

                <li className="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                        Create interactive and intuitive features
                    </p>
                </li>
                </ul>
            </div>
            </div>
        </div>

        <div className="services__content">
            <div>
            <i class='bx bx-sitemap services__icon'></i>
            <h3 className="services__title">Backend <br/> Developer</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(2)}>
            View more
            <i class="bx bx-chevron-right services__button-icon"></i>
            </span>

            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
                <i onClick={() => toggleTab(0)}
                class="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title">Backend Developer</h3>
                <p className="services__modal-description">
                    "Building and maintaining the server-side of web applications, 
                    ensuring seamless data integration, and supporting the overall 
                    functionality"
                </p>

                <ul className="services__modal-services grid">
                <li className="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                        Develop server-side applications, APIs, and databases.
                    </p>
                </li>

                <li className="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                        Optimize performance, responsiveness, and scalability
                    </p>
                </li>

                <li className="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                        Define & implement new features / functionalities.
                    </p>
                </li>
                </ul>
            </div>
            </div>
        </div>

        <div className="services__content">
            <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">UX / UI <br/> Designer</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(3)}>
            View more
            <i class="bx bx-chevron-right services__button-icon"></i>
            </span>

            <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                <i onClick={() => toggleTab(0)}
                class="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title">UX / UI Designer</h3>
                <p className="services__modal-description">
                    "Understand user needs and preferences to create 
                    seamless user experiences and user interfaces that align with customer's 
                    brand identity"
                </p>

                <ul className="services__modal-services grid">
                <li className="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                        Conduct user research and gather feedback.
                    </p>
                </li>
                
                <li className="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                        Create user personas, user journeys, and wireframes.
                    </p>
                </li>

                <li className="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                        Design user interfaces for web applications and websites.
                    </p>
                </li>

                </ul>
            </div>
            </div>
        </div>
        </div>
    </section>
    );
};

export default Services;
