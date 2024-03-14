import React, { useEffect, useRef } from "react";
import ips from "../images/ips.png";
import ipn from "../images/ipn.png";
import str from "../images/str.png";
import carouselimg from '../images/carousel1.png'
import '../css/carousel.css'
export default function Home() {
  const yearsRef = useRef(null);

  function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.textContent = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  useEffect(() => {
    const yearsElement = yearsRef.current;
    const values = yearsElement.querySelectorAll(".value");
    const duration = 1500;
    values.forEach((value, index) => {
      animateValue(value, 0, parseInt(value.textContent), duration);
    });
  }, []);

  return (
    <div className="home">
      <div class="carousel1">
      <div class="carousel">
        <div class="carousel-inner">
          <div class="carousel-item"><img src={carouselimg} alt="" /></div>
          <div  class="carousel-item"><img src={carouselimg} alt="" /></div>
          <div class="carousel-item"><img src={carouselimg} alt="" /></div>
          <div class="carousel-item"><img src={carouselimg} alt="" /></div>
        </div>
        <div class="carousel-controls">
          <span class="prev"></span>
          <span class="next"></span>
        </div>
        <div class="carousel-indicators"></div>
      </div>
      </div>
      <div className="home-start">
        <div className="d-flex years" ref={yearsRef}>
          <div>
            <span></span>
            <p className="value number5">5</p>
            <p className="x">Clients</p>
          </div>
          <div className="d-flex align-items-center x1">
            <p className="value number20">20</p>
            <p style={{ fontSize: "30px" }}>Years</p>
          </div>
          <div className="align-items-center">
            <p className="value number60">60</p>
            <p className="x">Projects</p>
          </div>
        </div>
        <div className="lorem container d-flex text-light">
          <p style={{ width: "60%", lineHeight: "40px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip exmmodo consequat. Duis aute irure dolor in reprehenderi
          </p>
          <p className="ms-auto align-self-end fs-4 readmore">
            Read more About us
          </p>
        </div>
      </div>
      <div className="case-studies d-flex">
        <div class="card">
          <img src={ips} alt="" />
          <div class="card-content">
            <h2>IP Survillence Solution</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="card">
          <img src={ipn} alt="" />
          <div class="card-content">
            <h2>IP Networking Solution</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="card">
          <img src={str} alt="" />
          <div class="card-content">
            <h2 className="card-head">Storage</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}


