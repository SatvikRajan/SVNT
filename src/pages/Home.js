import React, { useEffect, useRef, useState } from 'react';
import '../css/carousel.css';
import companyLogo from '../images/company';
import logo1 from '../images/1';
import logo2 from '../images/2.png';
import logo3 from '../images/3.png';
import logo4 from '../images/4.png';
import logo5 from '../images/5';
import logo6 from '../images/6';
import logo7 from '../images/7';
import logo8 from '../images/8';
import image1 from '../images/c1.png';
import image2 from '../images/c2.png';
import image3 from '../images/c3.png';
import image4 from '../images/c4.png';
import wc1 from '../images/wc1.png';
import wc2 from '../images/wc2.png';
import wc3 from '../images/wc3.png';
import Carosuel1 from '../components/Carosuel1';

import CaseStudiesCarousel from '../components/Carousel';
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

  const [showDetails, setShowDetails] = useState(false);
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

  const data = [
    'IP camera systems revolutionize security by providing customizable video surveillance accessible from any location. They seamlessly integrate with existing systems, enhancing their effectiveness and ensuring comprehensive coverage for heightened security measures.',
    'IP networks enable smooth and continuous device interaction, essential for both small-scale home networks and extensive corporate setups, ensuring seamless integration and uninterrupted data transmission.',
    'Optimize efficiency with our integration solutions, merging systems for seamless communication and collaboration. From system to machine and telephone integration, we simplify processes, reduce complexity, and automate tasks for maximum productivity and cost-effectiveness.',
    'Elevate communication and engagement with our audio-visual solutions. From cutting-edge displays to immersive sound systems, we offer tailored setups that enhance presentations, events, and meetings.',
    'NAS (Network Attached Storage) and SAN (Storage Area Network) services streamline data storage, enabling efficient collaboration and prompt customer response. Accessibility and cost-effectiveness ensure smooth business continuity and swift recovery from potential disasters.',
    'Explore the realm of security and management solutions, vital for safeguarding businesses against threats. From network audits to advanced access control systems, these solutions ensure robust protection and efficient resource management.',
    'Our systems provide comprehensive monitoring and detection capabilities, ensuring prompt response to potential threats. From runway monitoring to fire alarm systems, we prioritize safety in any environment.',
    'Empower your organization with efficient energy solutions. Our innovative technologies optimize energy usage, reduce costs, and minimize environmental impact. From green power to UPS solutions, we offer custom plans for sustainable energy management and lasting savings.',
  ];

  useEffect(() => {
    // const handleScroll = () => {
    //   const logoCircle = document.getElementById('logo-circle');
    //   const rect = logoCircle.getBoundingClientRect();
    //   const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    //   if (rect.top <= viewHeight * 0.75) {
    //     setIsVisible(true);
    //     setTimeout(() => {
    //       setShowNames(true);
    //     }, 2000); // Delay of 2 seconds
    //   }
    // };
  }, []);

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
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (index) => {
    setCurrentDetail(index);
  };

  const [selected, setSelected] = useState(0);
  const cards = [
    {
      id: 1,
      image: image1,
      text: 'To infinity and beyond!One small step for man, One giant leap for mankind Joining forces with ISRO',
    },
    {
      id: 2,
      image: image2,
      text: 'Sky High! See firsthand our collaborative efforts to provide advances surveillance solutions at Kempagowda International Airport',
    },
    { id: 3, image: image3, text: 'Behind the Scenes: Our Role in Safeguarding ITC Royal Bengal' },
    { id: 4, image: image4, text: 'Nestled in the Heart of Hyderabad, where Innovation Meets Culture' },
    {
      id: 5,
      image: image1,
      text: 'To infinity and beyond!One small step for man, One giant leap for mankind Joining forces with ISRO',
    },
    {
      id: 6,
      image: image2,
      text: 'Sky High! See firsthand our collaborative efforts to provide advances surveillance solutions at Kempagowda International Airport',
    },
  ];
  const currentImage = cards[selected] ? cards[selected].image : '';

  return (
    <div className="home">
      <div class="carousel1">
        <Carosuel1 currentImage={currentImage} setSelected={setSelected} />
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
          <a className="ms-auto align-self-end " href="/about">
            <p className="fs-4 text-light w-100 readmore">Read more About us</p>
          </a>
        </div>
      </div>

      <div
        style={{ paddingLeft: '10rem', display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        className="whyus"
      >
        <div>
          <p style={{ fontSize: '42px' }}>Why Choose Us</p>
          <div className="whyus-text d-flex">
            <p className="n1" style={{ position: 'relative' }} onClick={() => handleClick(0)}>
              Client Satisfaction
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  height: '8px',
                  borderRadius: '5px',
                  width: currentDetail === 0 ? '100%' : '0%',
                  backgroundColor: '#6586FD',
                  transition: 'width 5s',
                }}
              ></span>
            </p>
            <p className="n1" style={{ position: 'relative' }} onClick={() => handleClick(1)}>
              Future Outlook
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  height: '8px',
                  borderRadius: '5px',
                  paddingBottom: '2px',
                  width: currentDetail === 1 ? '100%' : '0%',
                  backgroundColor: '#6586FD',
                  transition: 'width 5s',
                }}
              ></span>
            </p>
            <p className="n1" style={{ position: 'relative' }} onClick={() => handleClick(2)}>
              Resilience
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  height: '8px',
                  borderRadius: '5px',
                  paddingBottom: '2px',
                  width: currentDetail === 2 ? '100%' : '0%',
                  backgroundColor: '#6586FD',
                  transition: 'width 5s',
                }}
              ></span>
            </p>
          </div>
          <div style={{ marginLeft: '6rem', marginRight: '6rem', fontSize: '24px' }}>{details[currentDetail]}</div>
        </div>
        {currentDetail === 0 && <img src={wc1} style={{ width: '21vw', height: '50vh' }} alt="Client Satisfaction" />}
        {currentDetail === 1 && <img src={wc2} style={{ width: '21vw', height: '50vh' }} alt="Future Outlook" />}
        {currentDetail === 2 && <img src={wc3} style={{ width: '21vw', height: '50vh' }} alt="Resilience" />}
      </div>

      <div className="mainpage">
        <div className="what-we-do-best">
          {showDetails && (
            <div className="wwdb-details" onClick={() => setShowDetails(false)}>
              <p className="wwdb-head">What We Do Best</p>
              <div className="details-wrapper">
                <p className="left">
                  IP Surveillance Solution
                  <img src={logo2} />
                </p>
                <div className="right">
                  <p className="p1-info">{data[0]}</p>
                  <p className="info">Read More</p>
                </div>
              </div>
            </div>
          )}
          <div className="wwdb-container">
            <p className="wwdb-head">What We Do Best</p>

            <div className="wwdb-menu">
              <div className="m1">
                <p className="p1" onClick={() => setShowDetails(!showDetails)}>
                  {names[1]}
                </p>
                <img src={logo2} />
              </div>

              <div className="m2">
                <p className="p2" onClick={() => setShowDetails(!showDetails)}>
                  {names[0]}
                  <img src={logo1} />
                </p>

                <p className="p3" onClick={() => setShowDetails(!showDetails)}>
                  <img src={logo3} />
                  {names[2]}
                </p>
              </div>

              <div className="m3">
                <p className="p4" onClick={() => setShowDetails(!showDetails)}>
                  {names[3]}
                  <img src={logo4} />
                </p>

                <img src={companyLogo} alt="company logo" className="company-logo" />

                <p className="p5" onClick={() => setShowDetails(!showDetails)}>
                  <img src={logo7} />
                  {names[6]}
                </p>
              </div>

              <div className="m4">
                <p className="p6" onClick={() => setShowDetails(!showDetails)}>
                  {names[7]}
                  <img src={logo8} />
                </p>
                <p className="p7" onClick={() => setShowDetails(!showDetails)}>
                  <img src={logo5} />
                  Storage
                </p>
              </div>
              <div className="m5">
                <img src={logo6} />
                <p className="p8" onClick={() => setShowDetails(!showDetails)}>
                  {names[5]}
                </p>
              </div>
            </div>

            <div className="wwdb-learn-more">
              <p>Learn more on Services</p>
              <div style={{ flex: 1, height: '2px', backgroundColor: 'black' }}></div>
            </div>
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
          <p className="last-text-1">Career</p>
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
