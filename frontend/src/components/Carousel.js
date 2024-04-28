import React, { useState, useRef, useEffect } from 'react';
import ips from '../images/Home/home-carousel-genpact.webp';
import ipn from '../images/Home/home-carousel-bial.webp';
import str from '../images/Home/home-carousel-itc.webp';
import sms from '../images/Home/home-carousel-bel';
import is from '../images/Home/home-carousel-statocast.webp';
import sss from '../images/Home/home-carousel-jsw';
import avs from '../images/Home/home-carousel-cfcl.webp';
import es from '../images/Home/home-carousel-aragen.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';

function CaseStudiesCarousel() {
  const carouselRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      delay: 500,
      once: true
    });
  }, []);
  useEffect(() => {
    const updateCardWidth = () => {
      const carousel = carouselRef.current;
      if (carousel) {
        const carouselWidth = carousel.clientWidth;
        let numberOfCardsPerSlide = 1; 
        if (carouselWidth >= 1024) {
          numberOfCardsPerSlide = 3;
        } else if (carouselWidth >= 768) {
          numberOfCardsPerSlide = 2;
        }
        const calculatedCardWidth = carouselWidth / numberOfCardsPerSlide;
        setCardWidth(calculatedCardWidth);
      }
    };

    updateCardWidth(); 

    const handleResize = () => {
      updateCardWidth();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNext = () => {
    const carousel = carouselRef.current;
    if (carousel) {
      const newPosition = carousel.scrollLeft + cardWidth;
      carousel.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      });
    }
  };

  const handlePrev = () => {
    const carousel = carouselRef.current;
    if (carousel) {
      const newPosition = carousel.scrollLeft - cardWidth;
      carousel.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      });
    }
  };


  return (
    <div data-aos='fade-up' id="carouselExampleControls" className="carousel slide">
      <div className="carousel-inner" ref={carouselRef} style={{ scrollSnapType: 'x mandatory', display: 'flex',marginTop: '1rem' }}>
        <div className="carousel-item5 active" style={{ minWidth: cardWidth }}>
          <div className="card-1">
            <img src={ips} alt="" />
            <div className="card-content">
              <h2>Genpact</h2>
              <p style={{ fontSize: '20px', textAlign: 'left' }}>
                Optimizing Meetings with LED Panel Video Wall Installation
              </p>
              <a style={{ textAlign: 'right' }} href="" className="readmore">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item5" style={{ minWidth: cardWidth }}>
          <div className="card-1">
            <img src={ipn} alt="" />
            <div className="card-content">
              <h2>BIAL</h2>
              <p style={{ fontSize: '20px', textAlign: 'left' }}>
                Delve into Security Implementation at Kempagowda International Airport
              </p>
              <a href="" className="readmore">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item5" style={{ minWidth: cardWidth }}>
          <div className="card-1">
            <img src={str} alt="" />
            <div className="card-content">
              <h2>ITC Hotels</h2>
              <p style={{ fontSize: '20px', textAlign: 'left' }}>
                A Close Examination of how SVNT implements Security Protocols at ITC.{' '}
              </p>
              <a href="" className="readmore">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item5" style={{ minWidth: cardWidth }}>
          <div className="card-1">
            <img src={sms} alt="" />
            <div className="card-content">
              <h2>BEL(Rafael)</h2>
              <p style={{ fontSize: '20px', textAlign: 'left' }}>
                Explore the realm of security and management solutions, vital for safeguarding businesses against
                threats.
              </p>
              <a href="" className="readmore">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item5" style={{ minWidth: cardWidth }}>
          <div className="card-1">
            <img src={is} alt="" />
            <div className="card-content">
              <h2>Om Books (Statocast)</h2>
              <p style={{ fontSize: '20px', textAlign: 'left' }}>
                Optimize efficiency with our integration solutions, merging systems for seamless communication and
                collaboration.
              </p>
              <a href="" className="readmore">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item5" style={{ minWidth: cardWidth }}>
          <div className="card-1">
            <img src={sss} alt="" />
            <div className="card-content">
              <h2>JSW Eye on Pellet</h2>
              <p style={{ fontSize: '20px', textAlign: 'left' }}>
                Our systems provide comprehensive monitoring and detection capabilities, ensuring prompt response to
                potential threats.
              </p>
              <a href="" className="readmore">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item5" style={{ flex: '0 0 auto', minWidth: cardWidth }}>
          <div className="card-1">
            <img src={avs} alt="" />
            <div className="card-content">
              <h2>CFCL</h2>
              <p style={{ fontSize: '20px', textAlign: 'left' }}>
                Elevate communication and engagement with our audio-visual solutions.
              </p>
              <a href="" className="readmore">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item5" style={{ minWidth: cardWidth }}>
          <div className="card-1">
            <img src={es} alt="" />
            <div className="card-content">
              <h2>Aragen</h2>
              <p style={{ fontSize: '20px', textAlign: 'left' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </p>
              <a href="" className="readmore">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" onClick={handlePrev} type="button">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" onClick={handleNext} type="button">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default CaseStudiesCarousel;
