import React, { useState, useRef, useEffect } from 'react';
import ips from '../images/Home/home-carousel-bial.webp';
import ipn from '../images/Home/home-carousel-genpact 1.png';
import str from '../images/Home/home-carousel-itc.webp';
import sms from '../images/Home/home-carousel-bel';
import is from '../images/Home/home-carousel-statocast.webp';
import sss from '../images/Home/home-carousel-eyeon.webp';
import avs from '../images/Home/home-carousel-cfcl.webp';
import es from '../images/Home/home-carousel-aragen.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';

function CaseStudiesCarousel() {
  const carouselRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4; // Number of dots to show

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

  useEffect(() => {
    setItems([
      { id: 0, image: sss, title: 'JSW Eye on Pellet', description: 'Delve into the revolutionary world of pelletization plants through real time system integration.' },
      { id: 3, image: str, title: 'ITC Hotels', description: 'A Close Examination of how SVNT implements Security Protocols at ITC.' },
      { id: 4, image: sms, title: 'BEL(Rafael)', description: 'Explore the realm of security and management solutions, vital for safeguarding businesses against threats.' },
      { id: 5, image: is, title: 'Om Books (Statocast)', description: 'Optimize efficiency with our integration solutions, merging systems for seamless communication and collaboration.' },
      { id: 1, image: ips, title: '', description: '' },
      { id: 2, image: ipn, title: '', description: '' },
      { id: 6, image: avs, title: 'CFCL', description: 'Elevate communication and engagement with our audio-visual solutions.' },
      { id: 7, image: es, title: 'Aragen', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.' },
    ]);
  }, []);

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(newIndex);
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(newIndex);
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  const getVisibleDots = () => {
    const totalDots = items.length;
    if (totalDots <= itemsToShow) return [...Array(totalDots).keys()];
    
    const dots = [];
    let startIndex = Math.floor(currentIndex / itemsToShow) * itemsToShow;

    for (let i = 0; i < itemsToShow; i++) {
      dots.push((startIndex + i) % totalDots);
    }

    return dots;
  };

  return (
    <div data-aos='fade-up' id="carouselExampleControls" className="carousel slide">
      <div className="carousel-inner" ref={carouselRef} style={{ scrollSnapType: 'x mandatory', display: 'flex', marginTop: '1rem' }}>
        {items.map((item, index) => (
          <div key={index} className="carousel-item5" style={{ minWidth: cardWidth }}>
            <div className="card-1">
              <img src={item.image} alt="" />
              <div className="card-content">
                <h2>{item.title}</h2>
                <p style={{ fontSize: '20px', textAlign: 'left' }}>
                  {item.description}
                </p>
                <a href="/casestudies" className={`readmore ${!item.title ? 'read-1' : ''}`}>
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" onClick={handlePrev} type="button">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" onClick={handleNext} type="button">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      <div className="carousel-dots">
        {getVisibleDots().map((index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default CaseStudiesCarousel;
