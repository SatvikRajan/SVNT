import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function WhyChooseUs() {
  const [currentDetail, setCurrentDetail] = useState(0);

  const handleClick = (index) => {
    setCurrentDetail(index);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200
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
        <p style={{ fontSize: '42px', fontWeight: '500' }}>Why Choose Us</p>
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
        <div data-aos='fade-up' style={{ marginLeft: '4.6rem', marginRight: '6rem', fontSize: '24px', lineHeight: '50px' }}>
          {details[currentDetail]}
        </div>
      </div>
    </div>
  );
}
