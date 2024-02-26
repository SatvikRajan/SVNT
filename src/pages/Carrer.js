import React from "react";
import career from "../images/careerimage.png";
import invite from "../images/invite.png";

export const CareersPage = () => {
  return (
    <div className="careers-page">
      <div className="career-start">
        <div className="career-image">
          <img src={career} style={{ maxWidth: "100%" }} alt="" />
          <div className="image-text"></div>
          <div className="career-text1">
            Empower your aspirations at SVNT Infotech!
          </div>
          <div className="career-text2">
            We believe in your Ideas, We believe in You
          </div>
          <div className="explore">Explore Now</div>
        </div>
        <div className="recruit">
          <h1>Shape our Future Together!</h1>
          <p className="recruit-handle">
            With over 32 locations , SVNT presents limitless prospects while
            fostering growth,
            <br /> leadership, innovation, and showing appreciation for its
            dedicated workforce.
          </p>
        </div>
        <div className="recruitment">
          <h1 style={{ textAlign: "start", paddingLeft: "10rem" }}>
            Recruitment
          </h1>
          <div className="dropdown">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
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
                color: "#0F2F64",
                fontWeight: "600",
                marginBottom: "25px",
              }}
            >
              We invite you to join us.
            </h1>
            <p>
              If you have innovative ideas and a genuine passion to
              <br /> execute them at an organization that will provide you with
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
  );
};
