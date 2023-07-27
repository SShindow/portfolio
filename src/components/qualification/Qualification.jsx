import React, { useState } from "react";
import "./qualification.css";
import FRAUAS from "../../assets/frauas.png";
import VGU from "../../assets/vgu.png";
import NQ from "../../assets/nq.png";

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
                      <i class="uil uil-check-circle qualification-edu__modal-icon"></i>
                        <p className="qualification-edu__modal-info">
                        Gold Medal - Mathematics - April Olympics Competition 2018
                        </p>
                      </li>
                      <li className="qualification-edu__modal-service">
                      <i class="uil uil-check-circle qualification-edu__modal-icon"></i>
                        <p className="qualification-edu__modal-info">
                        Bronze Medal - Mathematics - April Olympics Competition 2017
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
                        <i class="uil uil-check-circle qualification-edu__modal-icon"></i>
                        <p className="qualification-edu__modal-info">
                        DAAD Sur-place Scholarship Winter Semester 2021
                        </p>
                      </li>

                      <li className="qualification-edu__modal-service">
                        <i class="uil uil-check-circle qualification-edu__modal-icon"></i>
                        <p className="qualification-edu__modal-info">
                        VGU Merit Scholarship of 30% (academic year 2021/2022)
                        </p>
                      </li>

                      <li className="qualification-edu__modal-service">
                        <i class="uil uil-check-circle qualification-edu__modal-icon"></i>
                        <p className="qualification-edu__modal-info">
                        DAAD Sur-place Scholarship 2020/2021
                        </p>
                      </li>

                      <li className="qualification-edu__modal-service">
                        <i class="uil uil-check-circle qualification-edu__modal-icon"></i>
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
                        <i class="uil uil-check-circle qualification-edu__modal-icon"></i>
                        <p className="qualification-edu__modal-info">
                          DAAD scholarship for a full-aided exchange semester
                          (from 09/2021 to 03/2022) in Germany .
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
                    <p className="qualification-exp__modal-description">Microsoft</p>

                    <ul className="qualification-exp__modal-services grid">
                      <li className="qualification-exp__modal-service">
                          <h4 className="qualification-exp__modal-heading">
                            Durarion:{" "}
                          </h4>
                          <p className="qualification-exp__modal-info">
                            2016 - 2019
                          </p>
                          
                          <h4 style={{marginLeft: "30%"}}className="qualification-exp__modal-heading">
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
                        Data Modeling · Data Pipelines · Extract, Transform, Load (ETL) · Azure Data Factory · SQL · Microsoft SQL Server · Microsoft Azure · Data Warehousing
                        </p>
                      </li>

                      <li className="qualification-exp__modal-service">
                        <h4 className="qualification-exp__modal-heading">
                          Responsibilities:{" "}
                        </h4>
                      </li>
                      <li className="qualification-exp__modal-service">
                      <i class="uil uil-check-circle qualification-exp__modal-icon"></i>
                        <p className="qualification-exp__modal-info">
                        Support study and analyze business requirements. 
                        </p>
                      </li>
                      <li className="qualification-exp__modal-service">
                      <i class="uil uil-check-circle qualification-exp__modal-icon"></i>
                        <p className="qualification-exp__modal-info">
                        Operate and maintain data warehouse functionality. 
                        </p>
                      </li>
                      <li className="qualification-exp__modal-service">
                      <i class="uil uil-check-circle qualification-exp__modal-icon"></i>
                        <p className="qualification-exp__modal-info">
                        Integrate new data source and manage data pipelines from Salesforce, through staging, landing zone to the data warehouse.  
                        </p>
                      </li>
                      <li className="qualification-exp__modal-service">
                      <i class="uil uil-check-circle qualification-exp__modal-icon"></i>
                        <p className="qualification-exp__modal-info">
                        Manage data quality assurance and perform incremental load.  
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
                <span className="qualification-exp__subtitle">
                  ABC
                </span>
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
                    <p className="qualification-exp__modal-description">Microsoft</p>

                    <ul className="qualification-exp__modal-services grid">
                      <li className="qualification-exp__modal-service">
                          <h4 className="qualification-exp__modal-heading">
                            Durarion:{" "}
                          </h4>
                          <p className="qualification-exp__modal-info">
                            2016 - 2019
                          </p>
                          
                          <h4 style={{marginLeft: "30%"}}className="qualification-exp__modal-heading">
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
                        Data Modeling · Data Pipelines · Extract, Transform, Load (ETL) · Azure Data Factory · SQL · Microsoft SQL Server · Microsoft Azure · Data Warehousing
                        </p>
                      </li>

                      <li className="qualification-exp__modal-service">
                        <h4 className="qualification-exp__modal-heading">
                          Responsibilities:{" "}
                        </h4>
                      </li>
                      <li className="qualification-exp__modal-service">
                      <i class="uil uil-check-circle qualification-exp__modal-icon"></i>
                        <p className="qualification-exp__modal-info">
                        Support study and analyze business requirements. 
                        </p>
                      </li>
                      <li className="qualification-exp__modal-service">
                      <i class="uil uil-check-circle qualification-exp__modal-icon"></i>
                        <p className="qualification-exp__modal-info">
                        Operate and maintain data warehouse functionality. 
                        </p>
                      </li>
                      <li className="qualification-exp__modal-service">
                      <i class="uil uil-check-circle qualification-exp__modal-icon"></i>
                        <p className="qualification-exp__modal-info">
                        Integrate new data source and manage data pipelines from Salesforce, through staging, landing zone to the data warehouse.  
                        </p>
                      </li>
                      <li className="qualification-exp__modal-service">
                      <i class="uil uil-check-circle qualification-exp__modal-icon"></i>
                        <p className="qualification-exp__modal-info">
                        Manage data quality assurance and perform incremental load.  
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
                <span className="qualification-exp__subtitle">
                  Freelancer
                </span>
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
                    <p className="qualification-exp__modal-description">Microsoft</p>

                    <ul className="qualification-exp__modal-services grid">
                      <li className="qualification-exp__modal-service">
                          <h4 className="qualification-exp__modal-heading">
                            Durarion:{" "}
                          </h4>
                          <p className="qualification-exp__modal-info">
                            2016 - 2019
                          </p>
                          
                          <h4 style={{marginLeft: "30%"}}className="qualification-exp__modal-heading">
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
                        Data Modeling · Data Pipelines · Extract, Transform, Load (ETL) · Azure Data Factory · SQL · Microsoft SQL Server · Microsoft Azure · Data Warehousing
                        </p>
                      </li>

                      <li className="qualification-exp__modal-service">
                        <h4 className="qualification-exp__modal-heading">
                          Responsibilities:{" "}
                        </h4>
                      </li>
                      <li className="qualification-exp__modal-service">
                      <i class="uil uil-check-circle qualification-exp__modal-icon"></i>
                        <p className="qualification-exp__modal-info">
                        Support study and analyze business requirements. 
                        </p>
                      </li>
                      <li className="qualification-exp__modal-service">
                      <i class="uil uil-check-circle qualification-exp__modal-icon"></i>
                        <p className="qualification-exp__modal-info">
                        Operate and maintain data warehouse functionality. 
                        </p>
                      </li>
                      <li className="qualification-exp__modal-service">
                      <i class="uil uil-check-circle qualification-exp__modal-icon"></i>
                        <p className="qualification-exp__modal-info">
                        Integrate new data source and manage data pipelines from Salesforce, through staging, landing zone to the data warehouse.  
                        </p>
                      </li>
                      <li className="qualification-exp__modal-service">
                      <i class="uil uil-check-circle qualification-exp__modal-icon"></i>
                        <p className="qualification-exp__modal-info">
                        Manage data quality assurance and perform incremental load.  
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
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Mo phat dcm </h3>
                <span className="qualification__subtitle"></span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Vietnamese-German University
                </h3>
                <span className="qualification__subtitle">
                  Bachelor of Science in Computer Science
                </span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  2019 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Ngo Quyen High School</h3>
                <span className="qualification__subtitle">
                  High School Degree
                </span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  2016 - 2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
