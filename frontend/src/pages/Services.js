import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/services.css';
import wwdb1 from '../images/Services/wwdb-1';
import wwdb2 from '../images/Services/wwdb-2.png';
import wwdb3 from '../images/Services/wwdb-3.png';
import wwdb4 from '../images/Services/wwdb-4.png';
import wwdb5 from '../images/Services/wwdb-5';
import wwdb6 from '../images/Services/wwdb-6';
import wwdb7 from '../images/Services/wwdb-7';
import wwdb8 from '../images/Services/wwdb-8';
import servicebg from '../images/Services/servicebg.png';
import service1 from '../images/Services/service1.png'
export default function Services() {
  const [startIndex, setStartIndex] = useState(0);
  const [currentService, setCurrentService] = useState(null);
  const [currentDetail, setCurrentDetail] = useState(null);

  const handleClick = (index) => {
    setCurrentDetail(index === currentDetail ? null : index);
  };

  const services = [
    { image: wwdb1, title: 'IP Surveillance Solution', details: 'An IP camera system is a closed-circuit TV (CCTV) that is network attached. IP camera systems can be utilized to enhance security measures and elevate safety in any sector ranging from healthcare, schools and businesses to industrial, military, and government organizations. Moreover, IP cameras also make it incredibly easy to access video feeds, which may be saved.' },
    { image: wwdb2, title: 'IP Networking Solution', details: 'Service details 2' },
    { image: wwdb3, title: 'Integration Solutions', details: 'Service details 3' },
    { image: wwdb4, title: 'Audio-Visual Solutions', details: 'Service details 4' },
    { image: wwdb5, title: 'Storage', details: 'Service details 5' },
    { image: wwdb6, title: 'Security & Management Services', details: 'Service details 6' },
    { image: wwdb7, title: 'Surveillance and Safety Solutions', details: 'Service details 7' },
    { image: wwdb8, title: 'Energy Solutions', details: 'Service details 8' }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200
    });
  }, []);

  useEffect(() => {
    setCurrentService(services[startIndex]);
  }, [startIndex, services]);

  const handleNextPage = () => {
    const nextIndex = (startIndex + 1) % services.length;
    setStartIndex(nextIndex);
    setCurrentService(services[nextIndex]);
    setCurrentDetail(null);
  };

  const handlePrevPage = () => {
    const prevIndex = (startIndex - 1 + services.length) % services.length;
    setStartIndex(prevIndex);
    setCurrentService(services[prevIndex]);
    setCurrentDetail(null);
  };

  return (
    <div className="services">
      <img src={servicebg} className='service-bg' alt="" />
      <p className='service-head'>Gain deeper insight into our <span style={{ fontWeight: '500' }}>Services</span></p>
      <div className="services-in">
        <div>
          <div className="d-flex">
            {services.slice(startIndex, startIndex + 4).map((service, index) => (
              <div
                key={index}
                onClick={() => handleClick(index)}
                style={{ position: 'relative' }}
                className="service-name"
              >
                <div className='d-flex mb-2 align-items-center'>

                  <img src={service.image} alt="" />
                  <p>{service.title}</p>
                </div>
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
              </div>
            ))}
          </div>
          <div>
            <button onClick={handlePrevPage} disabled={startIndex === 0}><FaArrowLeft /></button>
            <button onClick={handleNextPage} disabled={startIndex + 4 >= services.length}><FaArrowRight /></button>
          </div>
          <div>
            {currentService && (
              <div>
                <div className="d-flex align-center">
                  <img src={currentService.image} alt="" />
                  <p>{currentService.title}</p>
                </div>
                <div className="d-flex">
                  <p>{currentDetail !== null ? services[currentDetail].details : currentService.details}</p>
                  <img src={service1} alt="" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
