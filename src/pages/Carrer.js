import React from "react";
import career from "../images/careerimage.png";
import invite from "../images/invite.png";
import search from "../images/search.jpg";
export const CareersPage = () => {
  return (
    <div className="careers-page">
      <div className="career-start">
        <div className="career-image">
          <img
            src={career}
            style={{ maxWidth: "100%", backgroundAttachment: "fixed" }}
            alt=""
          />
          <div className="career-text1">
            Empower your <br />
            aspirations at SVNT Infotech!
          </div>
          <div className="career-text2">
            We believe in your Ideas, We believe in You
          </div>
          <div className="explore">Explore Now</div>
        </div>

        <div className="recruitment">
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
            <div class="dropdown w-5">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
                <img src={search} style={{float: "right"}} width='30px' alt="" />
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Defence Porjects</a></li>
                <li><a class="dropdown-item" href="#">Enterprise Solutions</a></li>
                <li><a class="dropdown-item" href="#">Global Markets</a></li>
                <li><a class="dropdown-item" href="#">IT Infrastructure</a></li>
                <li><a class="dropdown-item" href="#">HR</a></li>
                <li><a class="dropdown-item" href="#">Sales</a></li>
                <li><a class="dropdown-item" href="#">Solution Architect</a></li>
              </ul>
            </div>
            <div className="job-des">
              <p>Senior Software Engineer</p>
              <p style={{display: 'flex',alignItems:'center',height: '4vh',letterSpacing: '0px', fontWeight: 'bold',paddingLeft: '10px',fontSize: '12px',gap: '10px', backgroundColor: '#CFC0F7', borderRadius: '20px', width: '130px'}}>
                <svg width="13" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.73078 13.3749C1.35193 13.3749 1.03125 13.2437 0.76875 12.9812C0.50625 12.7187 0.375 12.398 0.375 12.0191V9.06242H5.625V10.3749H9.37496V9.06242H14.625V12.0191C14.625 12.398 14.4937 12.7187 14.2312 12.9812C13.9687 13.2437 13.648 13.3749 13.2692 13.3749H1.73078ZM6.74998 9.24994V7.74994H8.24998V9.24994H6.74998ZM0.375 7.93746V4.23074C0.375 3.85189 0.50625 3.53121 0.76875 3.26871C1.03125 3.00621 1.35193 2.87496 1.73078 2.87496H4.875V1.60576C4.875 1.22692 5.00625 0.90625 5.26875 0.64375C5.53125 0.38125 5.85192 0.25 6.23077 0.25H8.76919C9.14804 0.25 9.46871 0.38125 9.73121 0.64375C9.99371 0.90625 10.125 1.22692 10.125 1.60576V2.87496H13.2692C13.648 2.87496 13.9687 3.00621 14.2312 3.26871C14.4937 3.53121 14.625 3.85189 14.625 4.23074V7.93746H9.37496V6.62496H5.625V7.93746H0.375ZM5.99998 2.87496H8.99998V1.60576C8.99998 1.54806 8.97594 1.49517 8.92787 1.44709C8.87978 1.39901 8.82689 1.37496 8.76919 1.37496H6.23077C6.17307 1.37496 6.12018 1.39901 6.07209 1.44709C6.02402 1.49517 5.99998 1.54806 5.99998 1.60576V2.87496Z" fill="#0E1513"/>
                </svg>
                Full Time
              </p>
              <p>Requirements</p>
              <ul class="job-requirements">
                <li>Experience: 3 to 4 years</li>
                <li>Primary Skills: C++/QT</li>
                <li>Required Skills:
                  <ul class="nested-skills">
                    <li>Work Experience with Qt/C++ programming.</li>
                    <li>Hands-on experience and knowledge in GUI development with Qt/QML.</li>
                    <li>Experience with multithreading and object-oriented programming.</li>
                    <li>Experience creating reusable QML components.</li>
                    <li>Experience with interfacing Serial device communication.</li>
                  </ul>
                </li>
              </ul>
              <a className='apply' href="">Apply Now</a>
            </div>
          </div>
          <div className="d-flex flex-row invite">
            <div>
              <img
                style={{ maxWidth: "100%", borderRadius: "20px" }}
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
              <p>
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
              >
                Explore Now
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
