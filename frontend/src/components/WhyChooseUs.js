import React, { useState, useEffect } from 'react';
import wc1 from '../images/wc1.png';
import wc2 from '../images/wc2.png';
import wc3 from '../images/wc3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function WhyChooseUs() {
  const [currentDetail, setCurrentDetail] = useState(0);

  const handleClick = (index) => {
    setCurrentDetail(index);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 200 // Offset (in px) from the original trigger point
    });
  }, []);

  const details = [
    'Each solution is tailored to understand and address the unique needs of each client. Everything we do is shaped by a core set of values. Our mission as a company revolves around the complete satisfaction of our clients.',
    'We are on the constant lookout for improvement and actively seeking new opportunities for growth and impact. Together, we aim to be a part of shaping the future and creating a better world.',
    'We’re not here to follow the norm, we are here to set them. We believe in being at the forefront of change, shaping the future.  Our commitment to excellence is evident in the challenges we embrace and the projects we successfully deliver.',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDetail((prevDetail) => (prevDetail + 1) % details.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
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
                transition: currentDetail === 0 ? 'width 5s' : 'width 0s',
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
                transition: currentDetail === 1 ? 'width 5s' : 'width 0s',
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
                transition: currentDetail === 2 ? 'width 5s' : 'width 0s',
              }}
            ></span>
          </p>
        </div>
        <div style={{ marginLeft: '4.6rem', marginRight: '6rem', fontSize: '24px', lineHeight: '50px' }}>
          {details[currentDetail]}
        </div>
      </div>
      <div className={`carousel ${currentDetail === 1 ? 'reverse' : ''}`} >
        {currentDetail === 0 && <img src={wc1} data-aos='fade-right' style={{ width: '21vw', height: '50vh' }} alt="Client Satisfaction" />}
        {currentDetail === 1 && <img src={wc2} data-aos='fade-right' style={{ width: '21vw', height: '50vh' }} alt="Future Outlook" />}
        {currentDetail === 2 && <img src={wc3} data-aos='fade-right' style={{ width: '21vw', height: '50vh' }} alt="Resilience" />}
      </div>
    </div>
  );
}
