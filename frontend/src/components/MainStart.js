import React, { useEffect, useRef, useState } from 'react';
import '../css/mainstart.css';
import bgVideo from '../images/Home/mainstart.mp4'
import AOS from 'aos';
import 'aos/dist/aos.css';
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
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
      delay: 500
    });
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
    <div className="home-start" data-aos='fade-up'>
      <video src={bgVideo} autoPlay loop muted playsInline className='bg-video'>
      </video>
      <div className="row years" ref={yearsRef}>
        <div className=" text-center col">
          <span></span>
          <div className="d-flex align-items-center justify-content-center">
            <p className="value number5">250</p>
            <span style={{ fontSize: '54px' }}>+</span>
          </div>

          <p className="x">CLIENTS</p>
        </div>
        <div className="d-flex align-items-center x1 col">
          <p className="value number20">21</p>
          <p style={{ fontSize: '37px' }} className='year-name'>Years</p>
        </div>
        <div className="text-center col">
          <div className='d-flex align-items-center justify-content-center'>
            <p className="value number60">1000</p><span style={{ fontSize: '54px' }}>+</span>
          </div>
          <p className="x">PROJECTS</p>
        </div>
      </div>
      <div className="videoText d-flex pt-5 text-light">
        <p className='video-info' data-aos='fade-right'>
          Your security is our priority.Feel free to immerse yourself in what's important to you.
          Let us take care of the rest.
        </p>
        <a className="align-self-end" style={{ marginLeft: '16.5rem' }} href="/about" data-aos='fade-left'>
          <p className="fs-4 text-light readmore" style={{ width: '13rem' }}>Read more</p>
        </a>
      </div>
    </div>
  );
}
