import React from 'react';
import adityabirla from '../images/Home/aditya-birla.jpg';
import vedanta from '../images/Home/vedanta.jpg';
import '../css/about.css';
import ITC from '../images/Home/itc.png';
import gm from '../images/Home/gm.png';
import ceo from '../images/AboutUs/ceo-image.png';
import '../css/slider.css';
import Managers from '../components/Managers';
export const About = () => {
  return (
    <div className="about-us-page">
      <div className="about-us-head">
        <p className="about-us-head-name">
          Integrated Solutions,
          <br /> Empowered Choices
        </p>
        <p className="about-us-head-name1">We are the Blueprint</p>
      </div>
      <div className="svnt-info">
        SVNT Infotech Pvt Ltd, formerly known as S V Network Technologies, was established in 2003 with a singular
        objective: to deliver cutting-edge IT infrastructure solutions across diverse industry verticals, including
        power, steel, cement, petroleum, and defence. With our headquarters in Hyderabad, SVNT has strategically
        positioned branches in key cities such as Delhi and Bangalore, ensuring a widespread presence. 
        <br />
        <br /> Our founding philosophy at SVNT Infotech is rooted in addressing the unique needs of our customers
        through the integration of top-tier international technology, complemented by local expertise. As a company
        fully funded and managed by our dedicated employees, we take pride in boasting one of the highest employee
        retention rates in the IT industry today.  In the current dynamic landscape of technology, we are always on the
        lookout to elevate the quality of our products.and communication solutions
      </div>

      <div className="company-timeline">
        <h1>Company Timeline</h1>
        <div className="d-flex timeline-1">
          <div className="d-flex flex-column">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna.
            </div>
            <div></div>
          </div>
          <div className="d-flex flex-column">
            <div><br /><br /><br /><br /><br /></div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna.
            </div>
          </div>
          <div className="d-flex flex-column">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna.
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="ceo d-flex">
        <div className="ceo-text">
          <h1 className="fs-1">Meet Our CEO </h1>
          <p className="ceo-text-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna. nisi ut aliquip exmmodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo.”
          </p>
        </div>
        <div className="ceo-photo">
          <img src={ceo} alt="" />
        </div>
      </div>

      <Managers />
      <div className="slides">
        <div class="slider">
          <div class="slide-track">
            <div class="slide-1">
              <img className="me" src={adityabirla} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={vedanta} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={adityabirla} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={vedanta} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={adityabirla} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={vedanta} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={adityabirla} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={vedanta} alt="" />
            </div>
          </div>
        </div>
        {/* <br />
        <br />
        <br /> */}
        <div class="slider">
          <div class="slide-track">
            <div class="slide-1">
              <img className="me" src={ITC} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={gm} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={ITC} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={gm} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={ITC} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={gm} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={ITC} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={gm} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
