import React, { useEffect, useRef } from 'react';
import ips from '../images/ips.png';
import ipn from '../images/ipn.png';
import str from '../images/str.png';
import '../css/carousel.css';
export default function Home() {
  const yearsRef = useRef(null);

  function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const timeElapsed = timestamp - startTimestamp;
      const progress = easeInOutQuad(Math.min(timeElapsed / duration, 1));
      element.textContent = Math.floor(progress * (end - start) + start);
      if (timeElapsed < duration) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  useEffect(() => {
    const yearsElement = yearsRef.current;
    const values = yearsElement.querySelectorAll('.value');
    const duration = 2000;
    values.forEach((value, index) => {
      animateValue(value, 0, parseInt(value.textContent), duration);
    });
  }, []);

  return (
    <div className="home">
      <div class="carousel1"></div>
      <div className="home-start">
        <div className="row years" ref={yearsRef}>
          <div className="col text-center">
            <span></span>
            <p className="value number5">5</p>
            <p className="x">Clients</p>
          </div>
          <div className="d-flex align-items-center x1 col">
            <p className="value number20">20</p>
            <p style={{ fontSize: '30px' }}>Years</p>
          </div>
          <div className="text-center col">
            <p className="value number60">10</p>
            <p className="x">Projects</p>
          </div>
        </div>
        <div className="lorem container d-flex text-light">
          <p style={{ width: '60%', lineHeight: '40px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exmmodo consequat. Duis aute irure dolor in reprehenderi</p>
          <p className="ms-auto align-self-end fs-4 readmore">Read more About us</p>
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
      <div className="trusted">
        <div class="cont">
          <div class="caro">
            <div class="carousel__face">
              <span>This is something</span>
            </div>
            <div class="carousel__face">
              <span>Very special</span>
            </div>
            <div class="carousel__face">
              <span>Special is the key</span>
            </div>
            <div class="carousel__face">
              <span>For you</span>
            </div>
            <div class="carousel__face">
              <span>Just give it</span>
            </div>
            <div class="carousel__face">
              <span>A try</span>
            </div>
            <div class="carousel__face">
              <span>And see</span>
            </div>
            <div class="carousel__face">
              <span>How IT Works</span>
            </div>
            <div class="carousel__face">
              <span>Woow</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
