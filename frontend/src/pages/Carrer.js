import React, { useState, useEffect, useNavigate } from "react";
import invite from "../images/ContactUs/invite.png";
import search from "../images/search.jpg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/carousel.css'
import '../css/career.css'
import carrerimage from '../images/Career/careerbg.jpg'
import cim from '../images/Career/bgm.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ArrowIcon from "../components/ArrowIcon";
import axios from 'axios';
export const CareersPage = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [totalExperience, setTotalExperience] = useState('');
  const [relevantExperience, setRelevantExperience] = useState('');
  const [resume, setResume] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [jobDetails, setJobDetails] = useState({
    title: 'Software Developer',
    description: 'Default job description',
    employmentType: 'Full Time',
    experience: '4 Years',
    primaryskills: 'C++, C',
    requiredskills: 'Java , Hello'
  });
  const [selectedJobTitle, setSelectedJobTitle] = useState('');
  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:8080/admin/api/jobs');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);


  useEffect(() => {
    const fetchJobDetails = async () => {
      if (selectedJobTitle) {
        try {
          const selectedJob = jobs.find(job => job.title === selectedJobTitle);
          if (selectedJob) {
            const response = await axios.get(`http://localhost:8080/admin/api/jobs/${selectedJob._id}`);
            setJobDetails(response.data);
          }
        } catch (error) {
          console.error('Error fetching job details:', error);
        }
      }
    };

    fetchJobDetails();
  }, [selectedJobTitle, jobs]);


  const handleDropdownClick = (title) => {
    setSelectedJobTitle(title);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('totalExperience', totalExperience);
    formData.append('relevantExperience', relevantExperience);
    formData.append('resume', resume)

    try {
      const response = await fetch('http://localhost:8080/careers/api/submitForm', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error submitting form');
      }

      setName('');
      setEmail('');
      setPhone('');
      setTotalExperience('');
      setRelevantExperience('');
      setResume(null);
      toast.success('Form submitted successfully');
    } catch (error) {
      console.error(error);
      toast.error('Error submitting form');
    }
  };

  const handleApplyClick = () => {
    setShowForm(true);
  };
  const handleGoBackClick = () => {
    setShowForm(false);
  }
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 300,
    });
  }, []);

  return (
    <div className="careers-page">
      <div className="career-start">
        <div className="career-image">
          <picture>
            <source media="(max-width: 480px)" srcSet={cim} />
            <source media="(min-width: 480px)" srcSet={carrerimage} />
            <img className="career-img" src={carrerimage} alt="" />

          </picture>
          <div className="career-text1">
            Empower your <br />
            aspirations at SVNT Infotech!
          </div>
          <div className="career-text2">
            We believe in your Ideas, We believe in You
          </div>
        </div>

        <div id="recruitment" className="recruitment">
          <div className="recruit" data-aos='fade-down'>
            <h1>Shape our Future Together!</h1>
            <p className="recruit-handle">
              With over 32 locations , SVNT presents limitless prospects while
              fostering growth,
              <br /> leadership, innovation, and showing appreciation for its
              dedicated workforce.
            </p>
          </div>
          <h1 className='recruitment-h'>
            Recruitment
          </h1>
          <div className="jobs">
            <div class="dropdown" data-aos='fade-right'>
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
              <ul className="dropdown-menu">
                {jobs.map((job) => (
                  <button
                    key={job._id}
                    className="dropdown-item"
                    onClick={() => handleDropdownClick(job.title)}
                  >
                    {job.title}
                  </button>
                ))}
              </ul>
            </div>
            {showForm ? (
              <div className="job-form d-flex" >
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
                  <p style={{ fontWeight: "bolder", marginBottom: '1rem' }}>
                    {jobDetails.title}
                  </p>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      height: "2rem",
                      letterSpacing: "0px",
                      fontWeight: "bold",
                      paddingLeft: "10px",
                      fontSize: "12px",
                      gap: "10px",
                      backgroundColor: "#CFC0F7",
                      borderRadius: "20px",
                      width: "130px",
                      marginBottom: '10px'
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
                      <label htmlFor="phone" className="inp">
                        <input type="text" id="phone" placeholder="&nbsp;" value={phone} onChange={(e) => setPhone(e.target.value)} onWheel={event => event.currentTarget.blur()} />
                        <span className="label">Phone Number</span>
                        <span className="focus-bg"></span>
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
                        className="form-control inp form-control-sm"
                        id="resume"
                        name="resume"
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
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
              <div className="job-des d-flex" data-aos="fade-left">
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

                {jobDetails && (
                  <div style={{ width: '100%' }}>
                    <p style={{ fontWeight: "bolder", marginBottom: '1rem' }}>
                      {jobDetails.title}
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
                        marginBottom: '10px'
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
                      {jobDetails.employmentType}
                    </p>
                    <p style={{ fontWeight: "bold" }}>Requirements</p>
                    <ul class="job-requirements">
                      <li>
                        Experience {" "}
                        <ArrowIcon style={{ marginRight: '25px', marginLeft: '50px' }} />
                        {jobDetails.experience}
                      </li>
                      <li>
                        Primary Skills {" "}
                        <ArrowIcon style={{ marginRight: '20px', marginLeft: '33px' }} />
                        {jobDetails.primaryskills}
                      </li>
                      <li>
                        Required Skills {" "}
                        <ArrowIcon style={{ marginRight: '20px', marginLeft: '24px' }} />
                        <ul className="nested-skills">
                          <li>{jobDetails.requiredskills}</li>
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
                )}
              </div>
            )}
          </div>
          <div className="d-flex flex-row invite">
            <div data-aos='fade-right'>
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
            <div style={{ alignSelf: "center" }} data-aos='fade-left'>
              <h1
                style={{
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
  )
}
