import React, { useEffect, useRef, useState } from 'react';
import '../css/carousel.css';
import $ from 'jquery';
import CaseStudiesCarousel from '../components/Carousel';
import c1 from '../images/c1.png';
import c2 from '../images/c2.png';
import c3 from '../images/c3.png';
import c4 from '../images/c4.png';
import Carousel from '../components/Carosuel1';
import wc1 from '../images/wc1.png';
import wc2 from '../images/wc2.png';
import wc3 from '../images/wc3.png';
import Carosuel1 from '../components/Carosuel1';
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
  document.addEventListener('DOMContentLoaded', () => {
    const hi = document.querySelector('.shiny');

    hi.addEventListener('mousemove', (e) => {
      const { x, y } = hi.getBoundingClientRect();
      hi.style.setProperty('--x', e.clientX - x);
      hi.style.setProperty('--y', e.clientY - y);
    });
  });
  const [isVisible, setIsVisible] = useState(false);
  const [showNames, setShowNames] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState(null);
  const names = [
    'IP Surveillance Solution',
    'IP Networking Solution',
    'Integration Solutions',
    'Audio-Visual Solutions',
    'Storage',
    'Security & Management Services',
    'Surveillance and Safety Solutions',
    'Energy Solutions',
  ];

  useEffect(() => {
    const handleScroll = () => {
      const logoCircle = document.getElementById('logo-circle');
      const rect = logoCircle.getBoundingClientRect();
      const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
      if (rect.top <= viewHeight * 0.75) {
        setIsVisible(true);
        setTimeout(() => {
          setShowNames(true);
        }, 2000);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [activeLogo, setActiveLogo] = useState(null);

  const handleLogoHover = (index) => {
    setSelectedLogo(index);
    setActiveLogo(index);
  };

  const handleLogoLeave = () => {
    setSelectedLogo(null);
    setActiveLogo(null);
  };

  useEffect(() => {
    const multipleCardCarousel = document.querySelector('#carouselExampleControls');
    if (window.matchMedia('(min-width: 768px)').matches) {
      const carouselWidth = document.querySelector('.carousel-inner').scrollWidth;
      const cardWidth = document.querySelector('.carousel-item5').clientWidth;
      let scrollPosition = 0;

      document.querySelector('#carouselExampleControls .carousel-control-next').addEventListener('click', () => {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
          scrollPosition += cardWidth;
          document.querySelector('#carouselExampleControls .carousel-inner').scrollTo({
            left: scrollPosition,
            behavior: 'smooth',
          });
        }
      });

      document.querySelector('#carouselExampleControls .carousel-control-prev').addEventListener('click', () => {
        if (scrollPosition > 0) {
          scrollPosition -= cardWidth;
          document.querySelector('#carouselExampleControls .carousel-inner').scrollTo({
            left: scrollPosition,
            behavior: 'smooth',
          });
        }
      });
    } else {
      multipleCardCarousel.classList.add('slide');
    }
  }, []);

  useEffect(() => {
    const yearsElement = yearsRef.current;
    const values = yearsElement.querySelectorAll('.value');
    const duration = 2000;
    values.forEach((value, index) => {
      animateValue(value, 0, parseInt(value.textContent), duration);
    });
  }, []);

  const [currentDetail, setCurrentDetail] = useState(0);
  const details = [
    'Each solution is tailored to understand and address the unique needs of each client. Everything we do is shaped by a core set of values. Our mission as a company revolves around the complete satisfaction of our clients.',
    'We are on the constant lookout for improvement and actively seeking new opportunities for growth and impact. Together, we aim to be a part of shaping the future and creating a better world.',
    'We’re not here to follow the norm, we’re here to set them. We believe in being at the forefront of change, shaping the future.  Our commitment to excellence is evident in the challenges we embrace and the projects we successfully deliver.',
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDetail((prevDetail) => (prevDetail + 1) % details.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (index) => {
    setCurrentDetail(index);
  };
  return (
    <div className="home">
      <div class="carousel1">
        <Carosuel1/>
      </div>
      <div className="home-start shiny">
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
        <div className="lorem container d-flex pt-5 text-light">
          <p style={{ width: '60%', lineHeight: '40px' }}>
            Committed to integrating pioneering technology into quality service, SVNT Infotech is a premier provider of
            cutting-edge networking and communication solutions for evolving needs. With unwavering determination, we
            strive to lead in delivering innovative solutions globally.
          </p>
          <p className="ms-auto align-self-end fs-4 readmore" href='/contact'>Read more About us</p>
        </div>
      </div>
      <div
        style={{ paddingLeft: '10rem', display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        className="whyus"
      >
        <div style={{ marginRight: '2rem' }}>
          <p style={{fontSize: '42px'}}>Why Choose Us</p>
          <div className="whyus-text d-flex">
            <p style={{ position: 'relative', fontSize: '22px' }} onClick={() => handleClick(0)}>
              Client Satisfaction
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  height: '5px',
                  width: currentDetail === 0 ? '100%' : '0%',
                  backgroundColor: '#6586FD',
                  transition: 'width 5s',
                }}
              ></span>
            </p>
            <p style={{ position: 'relative', fontSize: '22px' }} onClick={() => handleClick(1)}>
              Future Outlook
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  height: '5px',
                  width: currentDetail === 1 ? '100%' : '0%',
                  backgroundColor: '#6586FD',
                  transition: 'width 5s',
                }}
              ></span>
            </p>
            <p style={{ position: 'relative', fontSize: '22px' }} onClick={() => handleClick(2)}>
              Resilience
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  height: '5px',
                  width: currentDetail === 2 ? '100%' : '0%',
                  backgroundColor: '#6586FD',
                  transition: 'width 5s',
                }}
              ></span>
            </p>
          </div>
          <div style={{ marginLeft: '4rem', marginRight: '6rem', fontSize: '20px' }}>{details[currentDetail]}</div>
        </div>
        {currentDetail === 0 && <img src={wc1} style={{ width: '20vw', height: '40vh' }} alt="Client Satisfaction" />}
        {currentDetail === 1 && <img src={wc2} style={{ width: '20vw', height: '40vh' }} alt="Future Outlook" />}
        {currentDetail === 2 && <img src={wc3} style={{ width: '20vw', height: '40vh' }} alt="Resilience" />}
      </div>

      <div className="mainpage">
        <div className="whybest">
          What We Do Best
          <div id="logo-circle" className={`logo-circle ${isVisible ? 'visible' : ''}`}>
            <div className="central-logo"></div>
            {names.map((name, index) => (
              <div
                key={index}
                className={`logo-container ${selectedLogo === index ? 'selected' : ''}`}
                onMouseEnter={() => handleLogoHover(index)}
                onMouseLeave={handleLogoLeave}
              >
                <div className={`logo logo-${index + 1}`}></div>
                <div className={`logo-name logo-name${index + 1}`}>{showNames && name}</div>
                {selectedLogo === index && <div className="details">Details</div>}
                <div className={`darken ${selectedLogo === index ? 'active' : ''}`}></div>
              </div>
            ))}
          </div>
        </div>
        <div className="partners">Partners</div>
        <div className="case-studies">
          <h1>Case Studies</h1>
          <CaseStudiesCarousel />
        </div>
        <div className="trusted d-flex">
          <div className="trustedtext">
            <h1>Clientele</h1>
            <p>
              Our partners are who make us who we are. We firmly believe that people are our greatest asset and through
              collaboration and exchange of ideas, the best ideas are brought to life. Our partners play a crucial role
              in helping us deliver exceptional solutions and services to our clients that push the boundary further. 
            </p>
          </div>
          <div class="cont">
            <div class="caro">
              <div class="carousel__face">
                <span className="hi">Clients</span>
              </div>
              <div class="carousel__face">{/* <span className="hi">Very special</span> */}</div>
              <div class="carousel__face">{/* <span className="hi">Special is the key</span> */}</div>
              <div class="carousel__face">{/* <span className="hi">For you</span> */}</div>
              <div class="carousel__face">{/* <span className="hi">Just give it</span> */}</div>
              <div class="carousel__face">{/* <span className="hi">A try</span> */}</div>
              <div class="carousel__face">{/* <span className="hi">And see</span> */}</div>
              <div class="carousel__face">{/* <span className="hi">How IT Works</span> */}</div>
              <div class="carousel__face">{/* <span className="hi">Woow</span> */}</div>
              <div class="carousel__face">{/* <span className="hi">Woow</span> */}</div>
              <div class="carousel__face">{/* <span className="hi">Woow</span> */}</div>
              <div class="carousel__face">{/* <span className="hi">Woow</span> */}</div>
              <div class="carousel__face">{/* <span className="hi">Woow</span> */}</div>
              <div class="carousel__face">{/* <span className="hi">Woow</span> */}</div>
              <div class="carousel__face">{/* <span className="hi">Woow</span> */}</div>
              <div class="carousel__face">{/* <span className="hi">Woow</span> */}</div>
              <div class="carousel__face">{/* <span className="hi">Woow</span> */}</div>
              <div class="carousel__face">{/* <span className="hi">Woow</span> */}</div>
            </div>
          </div>
        </div>
        <div className="last">
          <p className="last-text">Connect with New People - Discover New Horizons - Design the Future</p>
          <a href="/careers">
            <p className="last-text1 join">Join Us</p>
          </a>
        </div>
        <div className="last-contact d-flex">
          <div className="w-75">
            <h1>Not sure where to start ?</h1>
            <p>
              Our specialists are available to address your inquiries and guide you in choosing the ideal products for
              your company.
            </p>
          </div>
          <a href="/contact" className="ms-auto align-self-end fs-4 readmore1">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
