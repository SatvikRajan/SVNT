import React, { useState } from "react";
import career from "../images/careerimage.png";
import invite from "../images/invite.png";
import search from "../images/search.jpg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const CareersPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [totalExperience, setTotalExperience] = useState('');
  const [relevantExperience, setRelevantExperience] = useState('');
  const [showForm, setShowForm] = useState(false);
  const handleSubmit = () => {
    setName("");
    setEmail("");
    setPhone("");
    setTotalExperience("");
    setRelevantExperience("");
    toast.success("Application submitted successfully!");
  };
  const handleApplyClick = () => {
    setShowForm(true);
  };
  const handleGoBackClick = () => {
    setShowForm(false);
  }

  return (
    <div className="careers-page">
      <div className="career-start">
        <div className="career-image">
          <div className="career-text1">
            Empower your <br />
            aspirations at SVNT Infotech!
          </div>
          <div className="career-text2">
            We believe in your Ideas, We believe in You
          </div>
        </div>

        <div id="recruitment" data-aos="fade-right" className="recruitment">
          <div className="recruit">
            <h1>Shape our Future Together!</h1>
            <p className="recruit-handle">
              With over 32 locations , SVNT presents limitless prospects while
              fostering growth,
              <br /> leadership, innovation, and showing appreciation for its
              dedicated workforce.
            </p>
          </div>
          <h1 style={{ textAlign: "start", paddingLeft: "18rem" }}>
            Recruitment
          </h1>
          <div className="jobs">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-career dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
                <img
                  src={search}
                  style={{ float: "right" }}
                  width="30px"
                  alt=""
                />
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#job-des">
                    Defence Porjects
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#job-des">
                    Enterprise Solutions
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#job-des">
                    Global Markets
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#job-des">
                    IT Infrastructure
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#job-des">
                    HR
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#job-des">
                    Sales
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#job-des">
                    Solution Architect
                  </a>
                </li>
              </ul>
            </div>
            {showForm ? (
              <div className="job-form d-flex">
                <div style={{ marginLeft: "-25px", marginRight: "15px" }}>
                  {" "}
                  <svg
                    width="16"
                    height="590"
                    viewBox="0 0 16 681"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="16" height="681" rx="8" fill="#1F8BED" />
                  </svg>
                </div>
                <div className="w-100">
                  <p style={{ fontWeight: "bolder" }}>
                    Senior Software Engineer
                  </p>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      height: "4vh",
                      letterSpacing: "0px",
                      fontWeight: "bold",
                      paddingLeft: "10px",
                      fontSize: "12px",
                      gap: "10px",
                      backgroundColor: "#CFC0F7",
                      borderRadius: "20px",
                      width: "130px",
                    }}
                  >
                    <svg
                      width="13"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.73078 13.3749C1.35193 13.3749 1.03125 13.2437 0.76875 12.9812C0.50625 12.7187 0.375 12.398 0.375 12.0191V9.06242H5.625V10.3749H9.37496V9.06242H14.625V12.0191C14.625 12.398 14.4937 12.7187 14.2312 12.9812C13.9687 13.2437 13.648 13.3749 13.2692 13.3749H1.73078ZM6.74998 9.24994V7.74994H8.24998V9.24994H6.74998ZM0.375 7.93746V4.23074C0.375 3.85189 0.50625 3.53121 0.76875 3.26871C1.03125 3.00621 1.35193 2.87496 1.73078 2.87496H4.875V1.60576C4.875 1.22692 5.00625 0.90625 5.26875 0.64375C5.53125 0.38125 5.85192 0.25 6.23077 0.25H8.76919C9.14804 0.25 9.46871 0.38125 9.73121 0.64375C9.99371 0.90625 10.125 1.22692 10.125 1.60576V2.87496H13.2692C13.648 2.87496 13.9687 3.00621 14.2312 3.26871C14.4937 3.53121 14.625 3.85189 14.625 4.23074V7.93746H9.37496V6.62496H5.625V7.93746H0.375ZM5.99998 2.87496H8.99998V1.60576C8.99998 1.54806 8.97594 1.49517 8.92787 1.44709C8.87978 1.39901 8.82689 1.37496 8.76919 1.37496H6.23077C6.17307 1.37496 6.12018 1.39901 6.07209 1.44709C6.02402 1.49517 5.99998 1.54806 5.99998 1.60576V2.87496Z"
                        fill="#0E1513"
                      />
                    </svg>
                    Full Time
                  </p>
                  <div className="form-box-1">
                    <span style={{ marginLeft: "10px" }}>Apply Online</span>
                    <label for="inp" class="inp">
                      <input type="text" id="inp" placeholder="&nbsp;" value={name} onChange={(e) => setName(e.target.value)} />
                      <span class="label">Name</span>
                      <span class="focus-bg"></span>
                    </label>
                    <div className="d-flex" style={{ gap: "15px" }}>
                      <label for="inp" class="inp">
                        <input type="text" id="inp" placeholder="&nbsp;" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <span class="label">Email</span>
                        <span class="focus-bg"></span>
                      </label>
                      <label for="inp" class="inp ">
                        <input type="text" id="inp" placeholder="&nbsp;" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <span class="label"> Phone Number</span>
                        <span class="focus-bg"></span>
                      </label>
                    </div>
                    <label for="inp" class="inp">
                      <input type="text" id="inp" placeholder="&nbsp;" value={totalExperience} onChange={(e) => setTotalExperience(e.target.value)} />
                      <span class="label">Total Experience</span>
                      <span class="focus-bg"></span>
                    </label>
                    <label for="inp" class="inp">
                      <input type="text" id="inp" placeholder="&nbsp;" value={relevantExperience} onChange={(e) => setRelevantExperience(e.target.value)} />
                      <span class="label">Relevant Experience</span>
                      <span class="focus-bg"></span>
                    </label>

                    <div className="d-flex mt-4 justify-center">
                      <span className="inp w-50">Attach Resume</span>
                      <input
                        class="form-control inp form-control-sm"
                        id="formFileSm"
                        type="file"
                      />
                    </div>
                  </div>
                  <div className="d-flex mt-5 ms-2 buttons">
                    <button className="go-back" onClick={handleGoBackClick}>
                      Back
                    </button>
                    <ToastContainer />
                    <button onClick={handleSubmit} className="submit1">Submit</button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="job-des d-flex fade-in">
                <div style={{ marginLeft: "-35px", marginRight: "15px" }}>
                  {" "}
                  <svg
                    width="16"
                    height="590"
                    viewBox="0 0 16 681"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="16" height="681" rx="8" fill="#1F8BED" />
                  </svg>
                </div>

                <div>
                  <p style={{ fontWeight: "bolder" }}>
                    Senior Software Engineer
                  </p>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      height: "4vh",
                      letterSpacing: "0px",
                      fontWeight: "bold",
                      paddingLeft: "10px",
                      fontSize: "12px",
                      gap: "10px",
                      backgroundColor: "#CFC0F7",
                      borderRadius: "20px",
                      width: "130px",
                    }}
                  >
                    <svg
                      width="13"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.73078 13.3749C1.35193 13.3749 1.03125 13.2437 0.76875 12.9812C0.50625 12.7187 0.375 12.398 0.375 12.0191V9.06242H5.625V10.3749H9.37496V9.06242H14.625V12.0191C14.625 12.398 14.4937 12.7187 14.2312 12.9812C13.9687 13.2437 13.648 13.3749 13.2692 13.3749H1.73078ZM6.74998 9.24994V7.74994H8.24998V9.24994H6.74998ZM0.375 7.93746V4.23074C0.375 3.85189 0.50625 3.53121 0.76875 3.26871C1.03125 3.00621 1.35193 2.87496 1.73078 2.87496H4.875V1.60576C4.875 1.22692 5.00625 0.90625 5.26875 0.64375C5.53125 0.38125 5.85192 0.25 6.23077 0.25H8.76919C9.14804 0.25 9.46871 0.38125 9.73121 0.64375C9.99371 0.90625 10.125 1.22692 10.125 1.60576V2.87496H13.2692C13.648 2.87496 13.9687 3.00621 14.2312 3.26871C14.4937 3.53121 14.625 3.85189 14.625 4.23074V7.93746H9.37496V6.62496H5.625V7.93746H0.375ZM5.99998 2.87496H8.99998V1.60576C8.99998 1.54806 8.97594 1.49517 8.92787 1.44709C8.87978 1.39901 8.82689 1.37496 8.76919 1.37496H6.23077C6.17307 1.37496 6.12018 1.39901 6.07209 1.44709C6.02402 1.49517 5.99998 1.54806 5.99998 1.60576V2.87496Z"
                        fill="#0E1513"
                      />
                    </svg>
                    Full Time
                  </p>
                  <p style={{ fontWeight: "bold" }}>Requirements</p>
                  <ul class="job-requirements">
                    <li>
                      Experience{" "}
                      <svg
                        style={{ marginLeft: "50px", marginRight: "25px" }}
                        width="30"
                        height="23"
                        viewBox="0 0 30 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.20516 0H0L8.20516 10.7812L0 23H8.20516L16.1539 10.7812L8.20516 0Z"
                          fill="url(#paint0_linear_1590_3086)"
                        />
                        <path
                          d="M13.3317 0H10.7676L18.4599 10.6786L10.7676 23H13.3317L21.024 10.6786L13.3317 0Z"
                          fill="url(#paint1_linear_1590_3086)"
                        />
                        <path
                          d="M23.8457 10.6786L16.1533 0H22.3072L29.9995 10.6786L22.3072 23H16.1533L23.8457 10.6786Z"
                          fill="url(#paint2_linear_1590_3086)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_1590_3086"
                            x1="4.21406"
                            y1="11.0893"
                            x2="16.0149"
                            y2="11.1373"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.0661152" stop-color="#7F57E9" />
                            <stop offset="0.510295" stop-color="#4E28D1" />
                            <stop offset="1" stop-color="#1A1741" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_1590_3086"
                            x1="13.4432"
                            y1="11.0893"
                            x2="20.9359"
                            y2="11.1087"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.0661152" stop-color="#7F57E9" />
                            <stop offset="0.510295" stop-color="#4E28D1" />
                            <stop offset="1" stop-color="#1A1741" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_1590_3086"
                            x1="19.7654"
                            y1="11.0893"
                            x2="29.8804"
                            y2="11.1246"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.0661152" stop-color="#7F57E9" />
                            <stop offset="0.510295" stop-color="#4E28D1" />
                            <stop offset="1" stop-color="#1A1741" />
                          </linearGradient>
                        </defs>
                      </svg>
                      3 to 4 years
                    </li>
                    <li>
                      Primary Skills{" "}
                      <svg
                        style={{ marginLeft: "33px", marginRight: "20px" }}
                        width="30"
                        height="23"
                        viewBox="0 0 30 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.20516 0H0L8.20516 10.7812L0 23H8.20516L16.1539 10.7812L8.20516 0Z"
                          fill="url(#paint0_linear_1590_3086)"
                        />
                        <path
                          d="M13.3317 0H10.7676L18.4599 10.6786L10.7676 23H13.3317L21.024 10.6786L13.3317 0Z"
                          fill="url(#paint1_linear_1590_3086)"
                        />
                        <path
                          d="M23.8457 10.6786L16.1533 0H22.3072L29.9995 10.6786L22.3072 23H16.1533L23.8457 10.6786Z"
                          fill="url(#paint2_linear_1590_3086)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_1590_3086"
                            x1="4.21406"
                            y1="11.0893"
                            x2="16.0149"
                            y2="11.1373"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.0661152" stop-color="#7F57E9" />
                            <stop offset="0.510295" stop-color="#4E28D1" />
                            <stop offset="1" stop-color="#1A1741" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_1590_3086"
                            x1="13.4432"
                            y1="11.0893"
                            x2="20.9359"
                            y2="11.1087"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.0661152" stop-color="#7F57E9" />
                            <stop offset="0.510295" stop-color="#4E28D1" />
                            <stop offset="1" stop-color="#1A1741" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_1590_3086"
                            x1="19.7654"
                            y1="11.0893"
                            x2="29.8804"
                            y2="11.1246"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.0661152" stop-color="#7F57E9" />
                            <stop offset="0.510295" stop-color="#4E28D1" />
                            <stop offset="1" stop-color="#1A1741" />
                          </linearGradient>
                        </defs>
                      </svg>{" "}
                      C++/QT
                    </li>
                    <li>
                      Required Skills{" "}
                      <svg
                        style={{ marginLeft: "24px", marginRight: "20px" }}
                        width="30"
                        height="23"
                        viewBox="0 0 30 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.20516 0H0L8.20516 10.7812L0 23H8.20516L16.1539 10.7812L8.20516 0Z"
                          fill="url(#paint0_linear_1590_3086)"
                        />
                        <path
                          d="M13.3317 0H10.7676L18.4599 10.6786L10.7676 23H13.3317L21.024 10.6786L13.3317 0Z"
                          fill="url(#paint1_linear_1590_3086)"
                        />
                        <path
                          d="M23.8457 10.6786L16.1533 0H22.3072L29.9995 10.6786L22.3072 23H16.1533L23.8457 10.6786Z"
                          fill="url(#paint2_linear_1590_3086)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_1590_3086"
                            x1="4.21406"
                            y1="11.0893"
                            x2="16.0149"
                            y2="11.1373"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.0661152" stop-color="#7F57E9" />
                            <stop offset="0.510295" stop-color="#4E28D1" />
                            <stop offset="1" stop-color="#1A1741" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_1590_3086"
                            x1="13.4432"
                            y1="11.0893"
                            x2="20.9359"
                            y2="11.1087"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.0661152" stop-color="#7F57E9" />
                            <stop offset="0.510295" stop-color="#4E28D1" />
                            <stop offset="1" stop-color="#1A1741" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_1590_3086"
                            x1="19.7654"
                            y1="11.0893"
                            x2="29.8804"
                            y2="11.1246"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.0661152" stop-color="#7F57E9" />
                            <stop offset="0.510295" stop-color="#4E28D1" />
                            <stop offset="1" stop-color="#1A1741" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <ul class="nested-skills">
                        <li>Work Experience with Qt/C++ programming.</li>
                        <li>
                          Hands-on experience and knowledge in GUI development
                          with Qt/QML.
                        </li>
                        <li>
                          Experience with multithreading and object-oriented
                          programming.
                        </li>
                        <li>Experience creating reusable QML components.</li>
                        <li>
                          Experience with interfacing Serial device
                          communication.
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <button
                    /*fix */
                    className="apply custom-apply-btn"
                    onClick={handleApplyClick}
                    type="button"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="d-flex flex-row invite">
            <div>
              <img
                style={{
                  maxWidth: "100%",
                  marginRight: "80px",
                  borderRadius: "20px",
                }}
                src={invite}
                alt=""
              />
            </div>
            <div style={{ alignSelf: "center" }}>
              <h1
                style={{
                  color: "#0E1513",
                  fontWeight: "600",
                  marginBottom: "25px",
                }}
              >
                We invite you to join us.
              </h1>
              <p className="hloo">
                If you have innovative ideas and a genuine passion to
                <br /> execute them at an organization that will provide you
                with
                <br /> boundless, diverse, and profound experiences.
              </p>
              <p
                style={{
                  marginTop: "30px",
                  fontSize: "22px",
                  textDecoration: "underline",
                }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
