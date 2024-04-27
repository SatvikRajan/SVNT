import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function WhyChooseUs() {
  const [currentDetail, setCurrentDetail] = useState(0);
  const [numDisplayed, setNumDisplayed] = useState(3);
  const observer = useRef(null);
  const whyUsRef = useRef(null);

  const handleClick = (index) => {
    setCurrentDetail(index);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      delay: 500,
      once: true
    });
  }, []);

  const details = [
    'Each solution is tailored to understand and address the unique needs of each client. Everything we do is shaped by a core set of values. Our mission as a company revolves around the complete satisfaction of our clients.',
    'We are on the constant lookout for improvement and actively seeking new opportunities for growth and impact. Together, we aim to be a part of shaping the future and creating a better world.',
    'We’re not here to follow the norm, we are here to set them. We believe in being at the forefront of change, shaping the future.  Our commitment to excellence is evident in the challenges we embrace and the projects we successfully deliver.',
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setNumDisplayed(3);
      }  else {
        setNumDisplayed(1);
      }
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentDetail(0);
        }
      });
    });

    observer.current.observe(whyUsRef.current);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDetail((prevDetail) => (prevDetail + 1) % details.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getCurrentHead = () => {
    if (numDisplayed === 1) {
      return currentDetail === 0 ? 'Client Satisfaction' : currentDetail === 1 ? 'Future Outlook' : 'Resilience';
    } else {
      return 'Why Choose Us';
    }
  };

  return (
    <div className="whyus" ref={whyUsRef}>
      <div>
        <p className='why-choose-head'>Why Choose Us</p>
        <div className="whyus-text d-flex">
          {details.slice(0, numDisplayed).map((detail, index) => (
            <p data-aos='fade-down' key={index} className="n1" style={{ position: 'relative' }} onClick={() => handleClick(index)}>
              {numDisplayed === 1 ? getCurrentHead() : index === 0 ? 'Client Satisfaction' : index === 1 ? 'Future Outlook' : 'Resilience'}
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  height: '8px',
                  borderRadius: '5px',
                  width: currentDetail === index ? '100%' : '0%',
                  backgroundColor: '#6586FD',
                  transition: currentDetail === index ? 'width 5s' : 'width 0s',
                }}
              ></span>
            </p>
          ))}
        </div>
        <div data-aos='fade-up' className='whyus-details'>
          {details[currentDetail]}
        </div>
      </div>
    </div>
  );
}
