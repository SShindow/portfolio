import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./qualification.css";
import FRAUAS from "../../assets/frauas.png";
import VGU from "../../assets/vgu.png";
import NQ from "../../assets/nq.png";
import COURSERA from "../../assets/coursera.png";
import HACKERRANK from "../../assets/hackerrank.png";
import IELTS from "../../assets/ielts.pdf";
import BC from "../../assets/britishcouncil.jpg";

const Qualification = () => {
  // For 3 categories
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  // for Education
  const [eduToggleState, setEduToggleState] = useState(0);

  const eduToggleTab = (index) => {
    setEduToggleState(index);
  };

  // for Experience
  const [expToggleState, setExpToggleState] = useState(0);

  const expToggleTab = (index) => {
    setExpToggleState(index);
  };

  // for Certification
  const [certiToggleState, setCertiToggleState] = useState(0);

  const certiToggleTab = (index) => {
    setCertiToggleState(index);
  };

  // Carousel setting
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i class="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i class="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>

          <div
            className={
              toggleState === 3
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(3)}
          >
            <i class="uil uil-award qualification__icon"></i>
            Certification
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification-edu__container container grid">
              <div className="qualification-edu__content">
                <div>
                  <img src={FRAUAS} alt="" className="qualification-edu__img" />
                  <h3 className="qualification-edu__title">
                    Frankfurt University <br /> of Applied Science
                  </h3>
                  <div className="qualification-edu__calendar">
                    <i class="uil uil-calendar-alt"></i>
                    2019 - Present
                  </div>
                </div>

                <span
                  className="qualification-edu__button"
                  onClick={() => eduToggleTab(3)}
                >
                  View more
                  <i class="bx bx-chevron-right qualification-edu__button-icon"></i>
                </span>

                <div
                  className={
                    eduToggleState === 3
                      ? "qualification-edu__modal active-modal"
                      : "qualification-edu__modal"
                  }
                >
                  <div className="qualification-edu__modal-content">
                    <i
                      onClick={() => eduToggleTab(0)}
                      class="uil uil-times qualification-edu__modal-close"
                    ></i>

                    <h3 className="qualification-edu__modal-title">
                      Frankfurt University of Applied Science
                    </h3>
                    <p className="qualification-edu__modal-description">
                      Dual degree with Vietnamese-German University
                    </p>

                    <ul className="qualification-edu__modal-services grid">
                      <li className="qualification-edu__modal-service">
                        <h4 className="qualification-edu__modal-heading">
                          Degree, Major:{" "}
                        </h4>
                        <p className="qualification-edu__modal-info">
                          Bachelor of Science, Computer Science
                        </p>
                      </li>

                      <li className="qualification-edu__modal-service">
                        <h4 className="qualification-edu__modal-heading">
                          Durarion:{" "}
                        </h4>
                        <p className="qualification-edu__modal-info">
                          2019 - Present
                        </p>
                      </li>

                      <li className="qualification-edu__modal-service">
                        <h4 className="qualification-edu__modal-heading">
                          Grade:{" "}
                        </h4>
                        <p className="qualification-edu__modal-info">
                          1.8 (German Grade) / 8.6 (Vietnamese Grade)
                        </p>
                      </li>

                      <li className="qualification-edu__modal-service">
                        <h4 className="qualification-edu__modal-heading">
                          Location:{" "}
                        </h4>
                        <p className="qualification-edu__modal-info">
                          Frankfurt am Main, Hesse, Germany
                        </p>
                      </li>

                      <li className="qualification-edu__modal-service">
                        <h4 className="qualification-edu__modal-heading">
                          Activites:{" "}
                        </h4>
                        <i class="uil uil-trophy qualification-edu__modal-icon"></i>
                        <p className="qualification-edu__modal-info">
                          DAAD scholarship for a full-aided exchange semester
                          (from 09/2021 to 03/2022) in Germany .
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="qualification-edu__content">
                <div>
                  <img src={VGU} alt="" className="qualification-edu__img" />
                  <h3 className="qualification-edu__title">
                    Vietnamese-German <br /> University
                  </h3>
                  <div className="qualification-edu__calendar">
                    <i class="uil uil-calendar-alt"></i>
                    2019 - Present
                  </div>
                </div>

                <span
                  className="qualification-edu__button"
                  onClick={() => eduToggleTab(2)}
                >
                  View more
                  <i class="bx bx-chevron-right qualification-edu__button-icon"></i>
                </span>

                <div
                  className={
                    eduToggleState === 2
                      ? "qualification-edu__modal active-modal"
                      : "qualification-edu__modal"
                  }
                >
                  <div className="qualification-edu__modal-content">
                    <i
                      onClick={() => eduToggleTab(0)}
                      class="uil uil-times qualification-edu__modal-close"
                    ></i>

                    <h3 className="qualification-edu__modal-title">
                      Vietnamese-German University
                    </h3>
                    <p className="qualification-edu__modal-description">
                      Dual degree with Frankfurt University of Applied Science
                    </p>

                    <ul className="qualification-edu__modal-services grid">
                      <li className="qualification-edu__modal-service">
                        <h4 className="qualification-edu__modal-heading">
                          Degree, Major:{" "}
                        </h4>
                        <p className="qualification-edu__modal-info">
                          Bachelor of Science, Computer Science
                        </p>
                      </li>

                      <li className="qualification-edu__modal-service">
                        <h4 className="qualification-edu__modal-heading">
                          Durarion:{" "}
                        </h4>
                        <p className="qualification-edu__modal-info">
                          2019 - Present
                        </p>
                      </li>

                      <li className="qualification-edu__modal-service">
                        <h4 className="qualification-edu__modal-heading">
                          Grade:{" "}
                        </h4>
                        <p className="qualification-edu__modal-info">
                          1.8 (German Grade) / 8.6 (Vietnamese Grade)
                        </p>
                      </li>

                      <li className="qualification-edu__modal-service">
                        <h4 className="qualification-edu__modal-heading">
                          Location:{" "}
                        </h4>
                        <p className="qualification-edu__modal-info">
                          Ben Cat, Binh Duong, Vietnam
                        </p>
                      </li>

                      <li className="qualification-edu__modal-service">
                        <h4 className="qualification-edu__modal-heading">
                          Activites:{" "}
                        </h4>
                      </li>

                      <li className="qualification-edu__modal-service">
                        <i class="uil uil-trophy qualification-edu__modal-icon"></i>
                        <p className="qualification-edu__modal-info">
                          DAAD Sur-place Scholarship Winter Semester 2021
                        </p>
                      </li>

                      <li className="qualification-edu__modal-service">
                        <i class="uil uil-trophy qualification-edu__modal-icon"></i>
                        <p className="qualification-edu__modal-info">
                          VGU Merit Scholarship of 30% (academic year 2021/2022)
                        </p>
                      </li>

                      <li className="qualification-edu__modal-service">
                        <i class="uil uil-trophy qualification-edu__modal-icon"></i>
                        <p className="qualification-edu__modal-info">
                          DAAD Sur-place Scholarship 2020/2021
                        </p>
                      </li>

                      <li className="qualification-edu__modal-service">
                        <i class="uil uil-trophy qualification-edu__modal-icon"></i>
                        <p className="qualification-edu__modal-info">
                          VGU Merit Scholarship of 30% (academic year 2020/2021)
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="qualification-edu__content">
                <div>
                  <img src={NQ} alt="" className="qualification-edu__img" />
                  <h3 className="qualification-edu__title">
                    Ngo Quyen High School
                  </h3>
                  <div className="qualification-edu__calendar">
                    <i class="uil uil-calendar-alt"></i>
                    2016 - 2019
                  </div>
                </div>

                <span
                  className="qualification-edu__button"
                  onClick={() => eduToggleTab(1)}
                >
                  View more
                  <i class="bx bx-chevron-right qualification-edu__button-icon"></i>
                </span>

                <div
                  className={
                    eduToggleState === 1
                      ? "qualification-edu__modal active-modal"
                      : "qualification-edu__modal"
                  }
                >
                  <div className="qualification-edu__modal-content">
                    <i
                      onClick={() => eduToggleTab(0)}
                      class="uil uil-times qualification-edu__modal-close"
                    ></i>

                    <h3 className="qualification-edu__modal-title">
                      Ngo Quyen High School
                    </h3>

                    <ul className="qualification-edu__modal-services grid">
                      <li className="qualification-edu__modal-service">
                        <h4 className="qualification-edu__modal-heading">
                          Durarion:{" "}
                        </h4>
                        <p className="qualification-edu__modal-info">
                          2016 - 2019
                        </p>
                      </li>

                      <li className="qualification-edu__modal-service">
                        <h4 className="qualification-edu__modal-heading">
                          Location:{" "}
                        </h4>
                        <p className="qualification-edu__modal-info">
                          Ho Chi Minh City, Vietnam
                        </p>
                      </li>

                      <li className="qualification-edu__modal-service">
                        <h4 className="qualification-edu__modal-heading">
                          Activites:{" "}
                        </h4>
                      </li>
                      <li className="qualification-edu__modal-service">
                        <i class="uil uil-trophy qualification-edu__modal-icon"></i>
                        <p className="qualification-edu__modal-info">
                          Gold Medal - Mathematics - April Olympics Competition
                          2018
                        </p>
                      </li>
                      <li className="qualification-edu__modal-service">
                        <i class="uil uil-trophy qualification-edu__modal-icon"></i>
                        <p className="qualification-edu__modal-info">
                          Bronze Medal - Mathematics - April Olympics
                          Competition 2017
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification-exp__data">
              <div>
                <h3 className="qualification-exp__title">Software Engineer </h3>
                <span className="qualification-exp__subtitle">Microsoft</span>
                <div className="qualification-exp__calendar">
                  <i class="uil uil-calendar-alt"></i> 2023 - Present
                </div>
                <span
                  className="qualification-edu__button"
                  onClick={() => expToggleTab(1)}
                >
                  Show more
                  <i class="bx bx-chevron-right qualification-edu__button-icon"></i>
                </span>

                <div
                  className={
                    expToggleState === 1
                      ? "qualification-exp__modal active-modal"
                      : "qualification-exp__modal"
                  }
                >
                  <div className="qualification-exp__modal-content">
                    <i
                      onClick={() => expToggleTab(0)}
                      class="uil uil-times qualification-exp__modal-close"
                    ></i>

                    <h3 className="qualification-exp__modal-title">
                      Software Engineer
                    </h3>
                    <p className="qualification-exp__modal-description">
                      Microsoft
                    </p>

                    <ul className="qualification-exp__modal-services grid">
                      <li className="qualification-exp__modal-service">
                        <h4 className="qualification-exp__modal-heading">
                          Durarion:{" "}
                        </h4>
                        <p className="qualification-exp__modal-info">
                          2016 - 2019
                        </p>

                        <h4
                          style={{ marginLeft: "30%" }}
                          className="qualification-exp__modal-heading"
                        >
                          Location:{" "}
                        </h4>
                        <p className="qualification-exp__modal-info">
                          Ho Chi Minh City, Vietnam
                        </p>
                      </li>

                      <li className="qualification-exp__modal-service">
                        <h4 className="qualification-exp__modal-heading">
                          Skills:{" "}
                        </h4>
                        <p className="qualification-exp__modal-info">
                          Data Modeling · Data Pipelines · Extract, Transform,
                          Load (ETL) · Azure Data Factory · SQL · Microsoft SQL
                          Server · Microsoft Azure · Data Warehousing
                        </p>
                      </li>

                      <li className="qualification-exp__modal-service">
                        <h4 className="qualification-exp__modal-heading">
                          Responsibilities:{" "}
                        </h4>
                      </li>
                      <li className="qualification-exp__modal-service">
                        <i class="bx bx-task qualification-exp__modal-icon"></i>
                        <p className="qualification-exp__modal-info">
                          Support study and analyze business requirements.
                        </p>
                      </li>
                      <li className="qualification-exp__modal-service">
                        <i class="bx bx-task qualification-exp__modal-icon"></i>
                        <p className="qualification-exp__modal-info">
                          Operate and maintain data warehouse functionality.
                        </p>
                      </li>
                      <li className="qualification-exp__modal-service">
                        <i class="bx bx-task qualification-exp__modal-icon"></i>
                        <p className="qualification-exp__modal-info">
                          Integrate new data source and manage data pipelines
                          from Salesforce, through staging, landing zone to the
                          data warehouse.
                        </p>
                      </li>
                      <li className="qualification-exp__modal-service">
                        <i class="bx bx-task qualification-exp__modal-icon"></i>
                        <p className="qualification-exp__modal-info">
                          Manage data quality assurance and perform incremental
                          load.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <span className="qualification-exp__rounder"></span>
                <span className="qualification-exp__line"></span>
              </div>
            </div>

            <div className="qualification-exp__data">
              <div></div>

              <div>
                <span className="qualification-exp__rounder"></span>
                <span className="qualification-exp__line"></span>
              </div>

              <div>
                <h3 className="qualification-exp__title">
                  Software Engineer Intern
                </h3>
                <span className="qualification-exp__subtitle">ABC</span>
                <div className="qualification-exp__calendar">
                  <i class="uil uil-calendar-alt"></i> 2019 - 2022
                </div>
                <span
                  className="qualification-edu__button"
                  onClick={() => expToggleTab(2)}
                >
                  Show more
                  <i class="bx bx-chevron-right qualification-edu__button-icon"></i>
                </span>

                <div
                  className={
                    expToggleState === 2
                      ? "qualification-exp__modal active-modal"
                      : "qualification-exp__modal"
                  }
                >
                  <div className="qualification-exp__modal-content">
                    <i
                      onClick={() => expToggleTab(0)}
                      class="uil uil-times qualification-exp__modal-close"
                    ></i>

                    <h3 className="qualification-exp__modal-title">
                      Software Engineer Intern
                    </h3>
                    <p className="qualification-exp__modal-description">
                      Microsoft
                    </p>

                    <ul className="qualification-exp__modal-services grid">
                      <li className="qualification-exp__modal-service">
                        <h4 className="qualification-exp__modal-heading">
                          Durarion:{" "}
                        </h4>
                        <p className="qualification-exp__modal-info">
                          2016 - 2019
                        </p>

                        <h4
                          style={{ marginLeft: "30%" }}
                          className="qualification-exp__modal-heading"
                        >
                          Location:{" "}
                        </h4>
                        <p className="qualification-exp__modal-info">
                          Ho Chi Minh City, Vietnam
                        </p>
                      </li>

                      <li className="qualification-exp__modal-service">
                        <h4 className="qualification-exp__modal-heading">
                          Skills:{" "}
                        </h4>
                        <p className="qualification-exp__modal-info">
                          Data Modeling · Data Pipelines · Extract, Transform,
                          Load (ETL) · Azure Data Factory · SQL · Microsoft SQL
                          Server · Microsoft Azure · Data Warehousing
                        </p>
                      </li>

                      <li className="qualification-exp__modal-service">
                        <h4 className="qualification-exp__modal-heading">
                          Responsibilities:{" "}
                        </h4>
                      </li>
                      <li className="qualification-exp__modal-service">
                        <i class="bx bx-task qualification-exp__modal-icon"></i>
                        <p className="qualification-exp__modal-info">
                          Support study and analyze business requirements.
                        </p>
                      </li>
                      <li className="qualification-exp__modal-service">
                        <i class="bx bx-task qualification-exp__modal-icon"></i>
                        <p className="qualification-exp__modal-info">
                          Operate and maintain data warehouse functionality.
                        </p>
                      </li>
                      <li className="qualification-exp__modal-service">
                        <i class="bx bx-task qualification-exp__modal-icon"></i>
                        <p className="qualification-exp__modal-info">
                          Integrate new data source and manage data pipelines
                          from Salesforce, through staging, landing zone to the
                          data warehouse.
                        </p>
                      </li>
                      <li className="qualification-exp__modal-service">
                        <i class="bx bx-task qualification-exp__modal-icon"></i>
                        <p className="qualification-exp__modal-info">
                          Manage data quality assurance and perform incremental
                          load.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="qualification-exp__data">
              <div>
                <h3 className="qualification-exp__title">Content Creator</h3>
                <span className="qualification-exp__subtitle">Freelancer</span>
                <div className="qualification-exp__calendar">
                  <i class="uil uil-calendar-alt"></i> 2016 - 2019
                </div>
                <span
                  className="qualification-edu__button"
                  onClick={() => expToggleTab(3)}
                >
                  Show more
                  <i class="bx bx-chevron-right qualification-edu__button-icon"></i>
                </span>

                <div
                  className={
                    expToggleState === 3
                      ? "qualification-exp__modal active-modal"
                      : "qualification-exp__modal"
                  }
                >
                  <div className="qualification-exp__modal-content">
                    <i
                      onClick={() => expToggleTab(0)}
                      class="uil uil-times qualification-exp__modal-close"
                    ></i>

                    <h3 className="qualification-exp__modal-title">
                      Content Creator
                    </h3>
                    <p className="qualification-exp__modal-description">
                      Microsoft
                    </p>

                    <ul className="qualification-exp__modal-services grid">
                      <li className="qualification-exp__modal-service">
                        <h4 className="qualification-exp__modal-heading">
                          Durarion:{" "}
                        </h4>
                        <p className="qualification-exp__modal-info">
                          2016 - 2019
                        </p>

                        <h4
                          style={{ marginLeft: "30%" }}
                          className="qualification-exp__modal-heading"
                        >
                          Location:{" "}
                        </h4>
                        <p className="qualification-exp__modal-info">
                          Ho Chi Minh City, Vietnam
                        </p>
                      </li>

                      <li className="qualification-exp__modal-service">
                        <h4 className="qualification-exp__modal-heading">
                          Skills:{" "}
                        </h4>
                        <p className="qualification-exp__modal-info">
                          Data Modeling · Data Pipelines · Extract, Transform,
                          Load (ETL) · Azure Data Factory · SQL · Microsoft SQL
                          Server · Microsoft Azure · Data Warehousing
                        </p>
                      </li>

                      <li className="qualification-exp__modal-service">
                        <h4 className="qualification-exp__modal-heading">
                          Responsibilities:{" "}
                        </h4>
                      </li>
                      <li className="qualification-exp__modal-service">
                        <i class="bx bx-task qualification-exp__modal-icon"></i>
                        <p className="qualification-exp__modal-info">
                          Support study and analyze business requirements.
                        </p>
                      </li>
                      <li className="qualification-exp__modal-service">
                        <i class="bx bx-task qualification-exp__modal-icon"></i>
                        <p className="qualification-exp__modal-info">
                          Operate and maintain data warehouse functionality.
                        </p>
                      </li>
                      <li className="qualification-exp__modal-service">
                        <i class="bx bx-task qualification-exp__modal-icon"></i>
                        <p className="qualification-exp__modal-info">
                          Integrate new data source and manage data pipelines
                          from Salesforce, through staging, landing zone to the
                          data warehouse.
                        </p>
                      </li>
                      <li className="qualification-exp__modal-service">
                        <i class="bx bx-task qualification-exp__modal-icon"></i>
                        <p className="qualification-exp__modal-info">
                          Manage data quality assurance and perform incremental
                          load.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <span className="qualification-exp__rounder"></span>
                <span className="qualification-exp__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 3
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification-certi__carousel">
              <Slider {...settings}>
                <div
                  className="qualification-certi__content"
                  onClick={() => certiToggleTab(1)}
                >
                  <a href="https://www.coursera.org/account/accomplishments/certificate/AFK55Y6X38AK" 
                    target="_blank"  className="qualification-certi__link" rel="noreferrer">
                    <img
                      src={COURSERA}
                      alt="Coursera"
                      className="qualification-certi__img"
                    ></img>
                    <h3 className="qualification-certi__title">
                      Introduction to Frontend Development
                    </h3>
                  </a>

                  {/* <div
                    className={
                      certiToggleState === 1
                        ? "qualification-certi__modal active-modal"
                        : "qualification-certi__modal"
                    }
                  >
                    <div className="qualification-certi__modal-content">
                      <i
                        onClick={() => certiToggleTab(0)}
                        class="uil uil-times qualification-certi__modal-close"
                      ></i>

                      <h3 className="qualification-certi__modal-title">
                        Frontend Developer
                      </h3>
                      <p className="qualification-certi__modal-description">
                        "Primary focus on the client-side of development,
                        ensuring seamless user experiences and optimal
                        performance across different devices and browsers"
                      </p>

                      <ul className="qualification-certi__modal-services grid">
                        <li className="qualification-certi__modal-service">
                          <i class="uil uil-check-circle qualification-certi__modal-icon"></i>
                          <p className="qualification-certi__modal-info">
                            Implement web designs and UI mockups
                          </p>
                        </li>

                        <li className="qualification-certi__modal-service">
                          <i class="uil uil-check-circle qualification-certi__modal-icon"></i>
                          <p className="qualification-certi__modal-info">
                            Develop responsive UI across devices
                          </p>
                        </li>

                        <li className="qualification-certi__modal-service">
                          <i class="uil uil-check-circle qualification-certi__modal-icon"></i>
                          <p className="qualification-certi__modal-info">
                            Create interactive and intuitive features
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
                <div
                  className="qualification-certi__content"
                  onClick={() => certiToggleTab(1)}
                >
                  <a href="https://www.coursera.org/account/accomplishments/certificate/B5NQX322Z65W" 
                    target="_blank"  className="qualification-certi__link" rel="noreferrer">
                    <img
                      src={COURSERA}
                      alt="Coursera"
                      className="qualification-certi__img"
                    ></img>
                    <h3 className="qualification-certi__title">
                      Programming with JavaScript
                    </h3>
                  </a>
                </div>
                <div
                  className="qualification-certi__content"
                  onClick={() => certiToggleTab(1)}
                >
                  <a href="https://www.coursera.org/account/accomplishments/certificate/KTKD4TAATKX6" 
                    target="_blank"  className="qualification-certi__link" rel="noreferrer">
                    <img
                      src={COURSERA}
                      alt="Coursera"
                      className="qualification-certi__img"
                    ></img>
                    <h3 className="qualification-certi__title">
                      Version Control
                    </h3>
                  </a>
                </div>
                <div
                  className="qualification-certi__content"
                  onClick={() => certiToggleTab(1)}
                >
                  <a href="https://www.coursera.org/account/accomplishments/certificate/U7UA4KS22N4G" 
                    target="_blank"  className="qualification-certi__link" rel="noreferrer">
                    <img
                      src={COURSERA}
                      alt="Coursera"
                      className="qualification-certi__img"
                    ></img>
                    <h3 className="qualification-certi__title">
                      React Basics
                    </h3>
                  </a>
                </div>
                <div
                  className="qualification-certi__content"
                  onClick={() => certiToggleTab(1)}
                >
                  <a href="https://www.coursera.org/account/accomplishments/certificate/MWBGTY96N6M5" 
                    target="_blank"  className="qualification-certi__link" rel="noreferrer">
                    <img
                      src={COURSERA}
                      alt="Coursera"
                      className="qualification-certi__img"
                    ></img>
                    <h3 className="qualification-certi__title">
                      HTML and CSS in depth
                    </h3>
                  </a>
                </div>
                <div
                  className="qualification-certi__content"
                  onClick={() => certiToggleTab(1)}
                >
                  <a href="https://www.coursera.org/account/accomplishments/certificate/L2MZSU55WCR6" 
                    target="_blank"  className="qualification-certi__link" rel="noreferrer">
                    <img
                      src={COURSERA}
                      alt="Coursera"
                      className="qualification-certi__img"
                    ></img>
                    <h3 className="qualification-certi__title">
                      Principles of UX/UI Design
                    </h3>
                  </a>
                </div>
                <div
                  className="qualification-certi__content"
                  onClick={() => certiToggleTab(1)}
                >
                  <a href="https://www.coursera.org/account/accomplishments/certificate/USNYCUR2Z8SG" 
                    target="_blank"  className="qualification-certi__link" rel="noreferrer">
                    <img
                      src={COURSERA}
                      alt="Coursera"
                      className="qualification-certi__img"
                    ></img>
                    <h3 className="qualification-certi__title">
                      Foundations of User Experience (UX) Design
                    </h3>
                  </a>
                </div>
                <div
                  className="qualification-certi__content"
                  onClick={() => certiToggleTab(1)}
                >
                  <a href="https://www.hackerrank.com/certificates/1ba8172d7a10" 
                    target="_blank"  className="qualification-certi__link" rel="noreferrer">
                    <img
                      src={HACKERRANK}
                      alt="Hackerrank"
                      className="qualification-certi__img"
                    ></img>
                    <h3 className="qualification-certi__title">
                      JavaScript (Intermediate)
                    </h3>
                  </a>
                </div>
                <div
                  className="qualification-certi__content"
                  onClick={() => certiToggleTab(1)}
                >
                  <a href="https://www.hackerrank.com/certificates/be95865eeae2" 
                    target="_blank"  className="qualification-certi__link" rel="noreferrer">
                    <img
                      src={HACKERRANK}
                      alt="Hackerrank"
                      className="qualification-certi__img"
                    ></img>
                    <h3 className="qualification-certi__title">
                      CSS (Basic)
                    </h3>
                  </a>
                </div>
                <div
                  className="qualification-certi__content"
                  onClick={() => certiToggleTab(1)}
                >
                  <a href= {IELTS} 
                    target="_blank"  className="qualification-certi__link" rel="noreferrer">
                    <img
                      src={BC}
                      alt="British Council"
                      className="qualification-certi__img"
                    ></img>
                    <h3 className="qualification-certi__title">
                      IELTS 7.0
                    </h3>
                  </a>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
