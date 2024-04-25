import React, { useState, useEffect } from 'react';
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
import IPSlider from '../components/Sliders/IPSSlider';
import INSlider from '../components/Sliders/INSSlider';
import IntegrationSlider from '../components/Sliders/IntegrationSlider';
import AudioVisualSlider from '../components/Sliders/AudioVisualSlider';
import SecuritySlider from '../components/Sliders/SecuritySlider';
import EnergySlider from '../components/Sliders/EnergySlider';
import SurveillanceSlider from '../components/Sliders/SurveillanceSlider';
import StorageSlider from '../components/Sliders/StorageSlider';

const services = [
  { image: wwdb1, title: 'IP Surveillance Solution', details: 'An IP camera system is a closed-circuit TV (CCTV) that is network attached. IP camera systems can be utilized to enhance security measures and elevate safety in any sector ranging from healthcare, schools and businesses to industrial, military, and government organizations. Moreover, IP cameras also make it incredibly easy to access video feeds, which may', details1: 'be saved modified or examined using a PC. Video feeds from IP cameras can be monitored from any location on multiple devices simultaneously. These surveillance systems can have features customized to their requirements and be integrated into any organisations existing IT network effortlessly, thereby making it effective and hassle-free.' },
  { image: wwdb2, title: 'IP Networking Solution', details: 'An IP camera system is a closed-circuit TV (CCTV) that is network attached. IP camera systems can be utilized to enhance security measures and elevate safety in any sector ranging from healthcare, schools and businesses to industrial, military, and government organizations. Moreover, IP cameras also make it incredibly easy to access video feeds, which may', details1: 'be saved modified or examined using a PC. Video feeds from IP cameras can be monitored from any location on multiple devices simultaneously. These surveillance systems can have features customized to their requirements and be integrated into any organisations existing IT network effortlessly, thereby making it effective and hassle-free.' },
  { image: wwdb3, title: 'Integration Solutions', details: 'An IP camera system is a closed-circuit TV (CCTV) that is network attached. IP camera systems can be utilized to enhance security measures and elevate safety in any sector ranging from healthcare, schools and businesses to industrial, military, and government organizations. Moreover, IP cameras also make it incredibly easy to access video feeds, which may', details1: 'be saved modified or examined using a PC. Video feeds from IP cameras can be monitored from any location on multiple devices simultaneously. These surveillance systems can have features customized to their requirements and be integrated into any organisations existing IT network effortlessly, thereby making it effective and hassle-free.' },
  { image: wwdb4, title: 'Audio-Visual', details: 'An IP camera system is a closed-circuit TV (CCTV) that is network attached. IP camera systems can be utilized to enhance security measures and elevate safety in any sector ranging from healthcare, schools and businesses to industrial, military, and government organizations. Moreover, IP cameras also make it incredibly easy to access video feeds, which may', details1: 'be saved modified or examined using a PC. Video feeds from IP cameras can be monitored from any location on multiple devices simultaneously. These surveillance systems can have features customized to their requirements and be integrated into any organisations existing IT network effortlessly, thereby making it effective and hassle-free.' },

  { image: wwdb6, title: 'Security & Management', details: 'An IP camera system is a closed-circuit TV (CCTV) that is network attached. IP camera systems can be utilized to enhance security measures and elevate safety in any sector ranging from healthcare, schools and businesses to industrial, military, and government organizations. Moreover, IP cameras also make it incredibly easy to access video feeds, which may', details1: 'be saved modified or examined using a PC. Video feeds from IP cameras can be monitored from any location on multiple devices simultaneously. These surveillance systems can have features customized to their requirements and be integrated into any organisations existing IT network effortlessly, thereby making it effective and hassle-free.' },
  { image: wwdb8, title: 'Energy Solutions', details: 'An IP camera system is a closed-circuit TV (CCTV) that is network attached. IP camera systems can be utilized to enhance security measures and elevate safety in any sector ranging from healthcare, schools and businesses to industrial, military, and government organizations. Moreover, IP cameras also make it incredibly easy to access video feeds, which may', details1: 'be saved modified or examined using a PC. Video feeds from IP cameras can be monitored from any location on multiple devices simultaneously. These surveillance systems can have features customized to their requirements and be integrated into any organisations existing IT network effortlessly, thereby making it effective and hassle-free.' },
  { image: wwdb7, title: 'Surveillance and Safety', details: 'An IP camera system is a closed-circuit TV (CCTV) that is network attached. IP camera systems can be utilized to enhance security measures and elevate safety in any sector ranging from healthcare, schools and businesses to industrial, military, and government organizations. Moreover, IP cameras also make it incredibly easy to access video feeds, which may', details1: 'be saved modified or examined using a PC. Video feeds from IP cameras can be monitored from any location on multiple devices simultaneously. These surveillance systems can have features customized to their requirements and be integrated into any organisations existing IT network effortlessly, thereby making it effective and hassle-free.' },
  { image: wwdb5, title: 'Storage', details: 'An IP camera system is a closed-circuit TV (CCTV) that is network attached. IP camera systems can be utilized to enhance security measures and elevate safety in any sector ranging from healthcare, schools and businesses to industrial, military, and government organizations. Moreover, IP cameras also make it incredibly easy to access video feeds, which may', details1: 'be saved modified or examined using a PC. Video feeds from IP cameras can be monitored from any location on multiple devices simultaneously. These surveillance systems can have features customized to their requirements and be integrated into any organisations existing IT network effortlessly, thereby making it effective and hassle-free.' }

];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentService = services[currentIndex];
  const onSecondPart = currentIndex >= 4;
  const handleClick = (index) => {
    setCurrentIndex(index === currentIndex ? null : index);
  };


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 300
    });
  }, []);



  const handleNextPage = () => {
    const nextIndex = (currentIndex + 1) % services.length;
    if (nextIndex === 4) {

    }
    setCurrentIndex(nextIndex);
  };

  const handlePrevPage = () => {
    const prevIndex = (currentIndex - 1) % services.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="services">
      <img style={{ position: 'relative', marginTop: '-0.5rem' }} src={servicebg} className='service-bg' alt="" />
      <p className='service-text'>Expertise you can trust:<br /> Tailored solutions just for you!</p>
      <p className='service-head'>Gain deeper insight into our <span style={{ fontWeight: '500' }}>Services</span></p>
      <div className="services-in">
        <div>
          <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}>
            <button style={{
              height: '20px'
            }} className='left' onClick={handlePrevPage} disabled={currentIndex >= services.length}></button>
            <div style={{
              width: "100%",
              overflow: 'hidden'
            }}>
              <div className="d-flex services-main" style={{
                transform: `translate(${onSecondPart ? "-50%" : "0"})`,
                width: '215%'
              }}>

                {services.map((service, index) => (
                  <div
                    key={index}
                    onClick={() => handleClick(index)}
                    style={{ position: 'relative', width: '12.5%' }}
                    className="service-name"
                  >
                    <div className='d-flex mb-2 align-items-center' style={{ gap: '0.5rem' }}>
                      <img className='service-img' src={service.image} alt="" />
                      <p className='service-title-main' style={{ fontSize: '24px' }}>{service.title}</p>
                    </div>
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        height: '8px',
                        borderRadius: '5px',
                        width: currentIndex === index ? '100%' : '0%',
                        backgroundColor: '#6586FD',
                        transition: currentIndex === index ? 'width 5s' : 'width 0s',
                      }}
                    ></span>
                  </div>
                ))}

              </div>
            </div>
            <button style={{ height: '20px' }} className='right' onClick={handleNextPage} disabled={currentIndex >= services.length}></button>
          </div>
          <div className="services-mainf" style={{ padding: '3rem' }}>
            {currentService && (
              <div>
                <div className="d-flex">
                  <div className='services-ndetails' style={{ width: '70%' }}>
                    <div className="d-flex imgtit align-items-center">
                      <img className='service-img' src={currentService.image} alt="" />
                      <p className='service-title' style={{ marginBottom: '0', fontSize: '38px' }}>{currentService.title}</p>
                    </div>
                    <p className='service-details' style={{ fontSize: '24px', lineHeight: '54px', letterSpacing: '5%' }}>{currentIndex !== null ? services[currentIndex].details : currentService.details}</p>
                  </div>
                  {currentService.title === 'IP Surveillance Solution' && <IPSlider />}
                  {currentService.title === 'IP Networking Solution' && <INSlider />}
                  {currentService.title === 'Integration Solutions' && <IntegrationSlider />}
                  {currentService.title === 'Audio-Visual' && <AudioVisualSlider />}
                  {currentService.title === 'Security & Management' && <SecuritySlider />}
                  {currentService.title === 'Energy Solutions' && <EnergySlider />}
                  {currentService.title === 'Surveillance and Safety' && <SurveillanceSlider />}
                  {currentService.title === 'Storage' && <StorageSlider />}
                </div>
                <p className='service-details' style={{ fontSize: '24px', lineHeight: '50px', letterSpacing: '5%', marginTop: '-15px' }}>{currentIndex !== null ? services[currentIndex].details1 : currentService.details1}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
