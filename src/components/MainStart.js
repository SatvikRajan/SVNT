import React, { useEffect, useRef, useState } from 'react';
import '../css/mainstart.css';

export default function MainStart() {
  const yearsRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

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

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setIsInView(true);
          observer.unobserve(yearsElement);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(yearsElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      const yearsElement = yearsRef.current;
      const values = yearsElement.querySelectorAll('.value');
      const duration = 2000;
      values.forEach((value) => {
        animateValue(value, 0, parseInt(value.textContent), duration);
      });
    }
  }, [isInView]);

  return (
    <div className="home-start shiny">
      {/* Main Minute Details of Company*/}
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
          <p className="value number60">1000</p>
          <p className="x">Projects</p>
        </div>
      </div>
      <div className="lorem container d-flex pt-5 text-light">
        <p style={{ width: '60%', lineHeight: '40px' }}>
          Committed to integrating pioneering technology into quality service, SVNT Infotech is a premier provider of
          cutting-edge networking and communication solutions for evolving needs. With unwavering determination, we
          strive to lead in delivering innovative solutions globally.
        </p>
        <a className="ms-auto align-self-end " href="/about">
          <p className="fs-4 text-light w-100 readmore">Read more About us</p>
        </a>
      </div>
    </div>
  );
}
