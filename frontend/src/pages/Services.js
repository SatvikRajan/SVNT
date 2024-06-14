import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/services.css';
import wwdb1 from '../images/Home/IP-surveillance.svg';
import wwdb2 from '../images/Home/IP-network.svg';
import wwdb3 from '../images/Home/integration.svg';
import wwdb4 from '../images/Home/audio-visual.svg';
import wwdb5 from '../images/Home/security-and-mgmt.svg';
import wwdb6 from '../images/Home/energy.svg';
import wwdb7 from '../images/Home/surveillance-and-safety.svg';
import wwdb8 from '../images/Home/storage.svg';
import servicebg from '../images/Services/servicebg.jpg';
import servicebgm from '../images/Services/servicebgm.jpg';
import IPSlider from '../components/Sliders/IPSSlider';
import INSlider from '../components/Sliders/INSSlider';
import IntegrationSlider from '../components/Sliders/IntegrationSlider';
import AudioVisualSlider from '../components/Sliders/AudioVisualSlider';
import SecuritySlider from '../components/Sliders/SecuritySlider';
import EnergySlider from '../components/Sliders/EnergySlider';
import SurveillanceSlider from '../components/Sliders/SurveillanceSlider';
import StorageSlider from '../components/Sliders/StorageSlider';
import Logo from '../images/svnt-logo-white-full.png';
import { Link } from 'react-router-dom'

const services = [
  { image: wwdb1, title: 'IP Surveillance Solution', details: 'An IP camera system is a closed-circuit TV (CCTV) that is network attached. IP camera systems can be utilized to enhance security measures and elevate safety in any sector ranging from healthcare, schools and businesses to industrial, military, and government organizations. Moreover, IP cameras also make it incredibly easy to access video feeds, which may be saved modified or examined using a PC. Video feeds from IP cameras can be monitored from any location on multiple devices simultaneously. These surveillance systems can have features customized to their requirements and be integrated into any organisations existing IT network effortlessly, thereby making it effective and hassle-free.' },
  { image: wwdb2, title: 'IP Networking Solution', details: ' The setup of devices connected to a network and how they interact depend entirely on the networks purpose. Different organisations have different priorities. It might be a small network linking a few devices at home or work, or a large corporate network with thousands of devices. IP networks dont just help with communication, like emails and web browsing, but also make it easy to share information and resources. They are an essential facet of our daily digital activities.' },
  { image: wwdb3, title: 'Integration Solutions', details: 'Enhance operational productivity and elevate quality standards by accelerating information flow and reducing costs within your organization. Our system integration solutions seamlessly integrate with both new and existing hardware, ensuring a cohesive environment. We simplify sharing information, communication, and collaboration among different machines with our machine integration solutions, removing unnecessary complexities. Computer Telephony Integration (CTI) automates call handling processes, providing valuable insights for continuous improvement. Bridge the communication gap between telephone and computer systems through our telephone integration services.' },
  { image: wwdb4, title: 'Audio-Visual', details: 'We provide state-of-the-art audio-visual products and solutions to seamlessly integrate audio, video, display, lighting equipment, and system controls. Our AV solutions cater to various applications, including conference rooms, auditoriums, cafeterias, classrooms, etc.Our process automation solutions use technology to automate repetitive tasks, hence increasing productivity and saving time. Additionally, our digital signage solutions use a network of digital displays and mounting systems to create dynamic and attention-grabbing content. They are valuable assets to the entertainment, merchandise, and advertising industries.' },

  { image: wwdb5, title: 'Security & Management', details: 'As businesses expand, the natural progression involves upscaling their IT networks to meet evolving needs and requirements. Performing a comprehensive network audit is essential to uncover any problems before they escalate and result in serious consequences.This can reveal security weaknesses that might harm the business in the long run. Various web caching and priorities bandwidth management techniques can be utilised to improve the responsiveness of a website as well. Additionally, a firewall is crucial for overseeing incoming and outgoing network traffic, deciding whether to permit or block specific data streams based on the company' },
  { image: wwdb6, title: 'Energy Solutions', details: 'Our UPS solution, or uninterruptible power supply solution, automatically provides backup electricity to devices during a power failure. This ensures that your servers and computers can continue operating without interruption during power outages. Additionally, our lightning solution helps implement advanced lightning protection systems to minimise damage from lightning strikes. When it comes to solar solutions, our technology allows you to generate electricity and reduce your carbon footprint. By harnessing the power of the sun, you not only contribute to a cleaner environment by reducing CO2 emissions, but also generate substantial savings on your electric bill.' },
  { image: wwdb7, title: 'Surveillance and Safety', details: 'Runway monitoring includes meticulously recording all aircraft movements and paths during take-off and landing to provide a detailed overview of all airport activities. This system, which includes strategically placed video cameras along the runway, is designed to detect malfunctions, equipment failures, or any evidence necessary for investigating accidents. On the other hand, a fire alarm system serves as an essential component to ensuring safety to occupants in any environment. It is designed to promptly detect and alert occupants to potential threats such as smoke or fire.' },
  { image: wwdb8, title: 'Storage', details: 'Our UPS solution provides automatic backup power during outages, Keeps servers and computers running without interruptions. Advanced systems minimize damage from lightning strikes. Utilize solar solutions to reduce carbon footprint and CO2 emissions.' }

];

export default function Services() {
  const ref = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [detailsChanging, setDetailsChanging] = useState(false);
  const currentService = services[currentIndex];

  const onSecondPart = currentIndex >= 4;

  const handleClick = (index) => {
    setDetailsChanging(true);
    setCurrentIndex(index === currentIndex ? null : index);
  };

  useEffect(() => {
    if (!ref) return
    ref.current.classList.remove('fade-in')
    setTimeout(() => { ref.current.classList.add('fade-in') }, 100)

  }, [currentIndex])

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 500,
      once: true
    });
  }, []);

  const handleNextPage = () => {
    const nextIndex = (currentIndex + 1) % services.length;
    if (nextIndex === 4) {

    }
    setCurrentIndex(nextIndex);
    setDetailsChanging(true);
  };

  const handlePrevPage = () => {
    const prevIndex = (currentIndex - 1) % services.length;
    setCurrentIndex(prevIndex);
    setDetailsChanging(true);
  };

  return (
    <div className="services">
      <picture>
        <source media="(max-width: 425px)" srcSet={servicebgm} />
        <source media="(min-width: 426px)" srcSet={servicebg} />
        <img
          style={{ position: 'relative' }}
          src={servicebg}
          className='service-bg'
          alt=""
        />
      </picture>
      <p className='service-head' data-aos='fade-up'>Gain a deeper insight into our <span style={{ fontWeight: '500' }}>Services</span></p>
      <div className="services-in" data-aos='fade-up'>
        <div>
          <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}>
            <button style={{
              // height: '20px'
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
                    style={{ position: 'relative', width: `${100 / services.length}%` }}
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
            <button className='right' onClick={handleNextPage} disabled={currentIndex >= services.length}></button>
          </div>
          <div className="services-mainf" style={{ padding: '3rem', marginTop: '1rem' }}>
            {currentService && (
              <div>
                <div ref={ref} className='service-content fade-in' style={{ gap: '15px' }}>
                  {currentService.title === 'IP Surveillance Solution' && <IPSlider />}
                  {currentService.title === 'IP Networking Solution' && <INSlider />}
                  {currentService.title === 'Integration Solutions' && <IntegrationSlider />}
                  {currentService.title === 'Audio-Visual' && <AudioVisualSlider />}
                  {currentService.title === 'Security & Management' && <SecuritySlider />}
                  {currentService.title === 'Energy Solutions' && <EnergySlider />}
                  {currentService.title === 'Surveillance and Safety' && <SurveillanceSlider />}
                  {currentService.title === 'Storage' && <StorageSlider />}
                  <div className='services-ndetails' style={{}}>
                    <div className="d-flex imgtit align-items-center">
                      <img className='service-img' style={{ marginTop: '-2rem' }} src={currentService.image} alt="" />
                      <p className='service-title' style={{ marginBottom: '0', fontSize: '38px', marginTop: '-2rem' }}>{currentService.title}</p>
                    </div>
                    <p>
                      <ul className='services-list'>
                        <li>Our UPS solution provides automatic backup power during outages.</li>
                        <li>Keeps servers and computers running without interruptions.</li>
                        <li>Advanced systems minimize damage from lightning strikes.</li>
                        <li>Utilize solar solutions to reduce carbon footprint and CO2 emissions.</li>
                      </ul>
                    </p>
                    {/* <p className={`service-details `} style={{ fontSize: '24px', lineHeight: '54px', letterSpacing: '5%' }}>{currentIndex !== null ? services[currentIndex].details : currentService.details}</p> */}
                  </div>
                </div>
                {/* <p className={`service-details ${detailsChanging ? 'fade-in' : ''}`} style={{ fontSize: '24px', lineHeight: '50px', letterSpacing: '5%', marginTop: '-13px', float:"left" }}>{currentIndex !== null ? services[currentIndex].details1 : currentService.details1}</p> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

