import wwdb1 from '../images/Home/IP-surveillance.svg';
import wwdb2 from '../images/Home/IP-network.svg';
import wwdb3 from '../images/Home/integration.svg';
import wwdb4 from '../images/Home/audio-visual.svg';
import wwdb5 from '../images/Home/security-and-mgmt.svg';
import wwdb6 from '../images/Home/energy.svg';
import wwdb7 from '../images/Home/surveillance-and-safety.svg';
import wwdb8 from '../images/Home/storage.svg';
import Logo from "../images/svnt-logo-white-full.png";
import { Link } from "react-router-dom";
import servicebg from "../images/Services/servicebg.webp";
import "../css/services2.css";
import AOS from "aos";
import "aos/dist/aos.css";


import IPSlider from "../components/Sliders/IPSSlider";
import INSlider from "../components/Sliders/INSSlider";
import IntegrationSlider from "../components/Sliders/IntegrationSlider";
import AudioVisualSlider from "../components/Sliders/AudioVisualSlider";
import SecuritySlider from "../components/Sliders/SecuritySlider";
import EnergySlider from "../components/Sliders/EnergySlider";
import SurveillanceSlider from "../components/Sliders/SurveillanceSlider";
import StorageSlider from "../components/Sliders/StorageSlider";


import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState } from 'react';

const services = [
  {
    image: wwdb1,
    name: "IP Surveillance Solution",
    details:
      "An IP camera system is a closed-circuit TV (CCTV) that is network attached. IP camera systems can be utilized to enhance security measures and elevate safety in any sector ranging from healthcare, schools and businesses to industrial, military, and government organizations. ",
    slider: <IPSlider/>
  },
  {
    image: wwdb2,
    name: "IP Networking Solution",
    details:
      " The setup of devices connected to a network and how they interact depend entirely on the networks purpose. Different organisations have different priorities. It might be a small network linking a few devices at home or work, or a large corporate network with thousands of devices. ",
  },
  {
    image: wwdb3,
    name: "Integration Solutions",
    details:
      "Enhance operational productivity and elevate quality standards by accelerating information flow and reducing costs within your organization. Our system integration solutions seamlessly integrate with both new and existing hardware, ensuring a cohesive environment. We simplify ",
    slider: <IPSlider/>
  },
  {
    image: wwdb4,
    name: "Audio-Visual",
    details:
      "We provide state-of-the-art audio-visual products and solutions to seamlessly integrate audio, video, display, lighting equipment, and system controls. Our AV solutions cater to various applications, including conference rooms, auditoriums, cafeterias, ",
    slider: <IPSlider/>
  },

  {
    image: wwdb6,
    name: "Security & Management",
    details:
      "As businesses expand, the natural progression involves upscaling their IT networks to meet evolving needs and requirements. Performing a comprehensive network audit is essential to uncover any problems before they escalate and result in serious consequences.",
      slider: <IPSlider/>
  },
  {
    image: wwdb8,
    name: "Energy Solutions",
    details:
      "Our UPS solution, or uninterruptible power supply solution, automatically provides backup electricity to devices during a power failure. This ensures that your servers and computers can continue operating without interruption during power outages. ",
      slider: <IPSlider/>
  },
  {
    image: wwdb7,
    name: "Surveillance and Safety",
    details:
      "Runway monitoring includes meticulously recording all aircraft movements and paths during take-off and landing to provide a detailed overview of all airport activities. This system, which includes strategically placed video cameras along the runway, is designed to.",
      slider: <IPSlider/>
  },
  {
    image: wwdb5,
    name: "Storage",
    details:
      "When it comes to storing data, services like NAS (Network Attached Storage) and SAN (Storage Area Network) help employees work together and respond to customer needs quickly. Its important for these resources to be accessible and easy to use, all while keeping costs low. ",
      slider: <IPSlider/>
  },
];

const menuItems = [
  {
    id: 1,
    image: wwdb1,
    name: "IP Surveillance Solution",
    details:
      "Enhance operational productivity and elevate quality standards by accelerating information flow and reducing costs within your organization. Our system integration solutions seamlessly integrate with both new and existing hardware, ensuring a cohesive environment. We simplify sharing information, communication, and collaboration among different machines with our machine ",
      slider: <IPSlider/>,
  },
      
  {
    id: 2,
    image: wwdb2,
    name: "IP Networking Solution",
    details:
      "Enhance operational productivity and elevate quality standards by accelerating information flow and reducing costs within your organization. Our system integration solutions seamlessly integrate with both new and existing hardware, ensuring a cohesive environment. We simplify sharing information, communication, and collaboration among different machines with our machine ",
      slider: <INSlider/>,
  },
  {
    id: 3,
    image: wwdb3,
    name: "Integration Solutions",
    details:
      "Enhance operational productivity and elevate quality standards by accelerating information flow and reducing costs within your organization. Our system integration solutions seamlessly integrate with both new and existing hardware, ensuring a cohesive environment. We simplify sharing information, communication, and collaboration among different machines with our machine ",
      slider: <IntegrationSlider/>,
  },
  {
    id: 4,
    image: wwdb4,
    name: "Audio-Visual",
    details:
      "Enhance operational productivity and elevate quality standards by accelerating information flow and reducing costs within your organization. Our system integration solutions seamlessly integrate with both new and existing hardware, ensuring a cohesive environment. We simplify sharing information, communication, and collaboration among different machines with our machine ",
    slider: <AudioVisualSlider/>,
  },
  {
    id: 5,
    image: wwdb6,
    name: "Security & Management",
    details:
      "Enhance operational productivity and elevate quality standards by accelerating information flow and reducing costs within your organization. Our system integration solutions seamlessly integrate with both new and existing hardware, ensuring a cohesive environment. We simplify sharing information, communication, and collaboration among different machines with our machine ",
      slider: <SecuritySlider/>,
  },
      
  {
    id: 6,
    image: wwdb7,
    name: "Surveillance and Safety",
    details:
      "Enhance operational productivity and elevate quality standards by accelerating information flow and reducing costs within your organization. Our system integration solutions seamlessly integrate with both new and existing hardware, ensuring a cohesive environment. We simplify sharing information, communication, and collaboration among different machines with our machine ",
      slider: <SurveillanceSlider/>,
  },
      
  {
    id: 7,
    image: wwdb5,
    name: "Storage",
    details:
      "Enhance operational productivity and elevate quality standards by accelerating information flow and reducing costs within your organization. Our system integration solutions seamlessly integrate with both new and existing hardware, ensuring a cohesive environment. We simplify sharing information, communication, and collaboration among different machines with our machine ",
      slider: <StorageSlider/>,
  },
];


export default function Services() { 
  // return (
  //   <div className='services'>
      // <Link className="logo-brand" to="/">
      //   <img src={Logo} alt="SVNT Tech" height={30} />
      // </Link>
      // <img
      //   style={{ position: "relative", marginTop: "-0.5rem" }}
      //   src={servicebg}
      //   className="service-bg"
      //   alt=""
      // />
      // {/* <p className='service-text'>Expertise you can trust:<br /> Tailored solutions just for you!</p> */}
      // <div className='services-main'>
      //   <p className='services-mainhead'>
      //   Gain a deeper insight into our{" "}
      //   <span style={{ fontWeight:"500", color:"black"}}>Services</span>
      //   </p>

  //       <div className='services-section'>
  //         <div className='services-heading'>
  //           <ul className='services-ul'>
  //             <li className='services-li'>Energy Solution</li>
  //             <li className='services-li'>Surveillance and Safety</li>
  //             <li className='services-li'>Integration Solution</li>
  //           </ul>
  //         </div>
  //         <div className='services-desc'>
  //           <div className='services-info'>
  //             <div className='head1'>one</div>
  //             <div className='head2'>two</div>
  //             <div className='head3'>three</div>
  //           </div>
  //           <div className='image'></div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )

  const [selectedItem, setSelectedItem] = useState(null);
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 3 });

  const scrollLeft = () => {
    setVisibleRange((prevRange) => ({
      start: Math.max(prevRange.start - 1, 0),
      end: Math.max(prevRange.end - 1, 3)
    }));
  };

  const scrollRight = () => {
    setVisibleRange((prevRange) => ({
      start: Math.min(prevRange.start + 1, menuItems.length - 3),
      end: Math.min(prevRange.end + 1, menuItems.length)
    }));
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <div className="App">
      <Link className="logo-brand" to="/">
        <img src={Logo} alt="SVNT Tech" height={30} />
      </Link>
      <img
        style={{ position: "relative", marginTop: "-0.5rem" }}
        src={servicebg}
        className="service-bg"
        alt=""
      />
      {/* <p className='service-text'>Expertise you can trust:<br /> Tailored solutions just for you!</p> */}
      <div className='services-main'>
        <p className='services-mainhead'>
        Gain a deeper insight into our{" "}
        <span style={{ fontWeight:"500", color:"black"}}>Services</span>
        </p>
        <div className="menu-container">
        <button className="arrow left-arrow" onClick={scrollLeft} disabled={visibleRange.start === 0}>◀</button>
        <div className="menu">
          {menuItems.slice(visibleRange.start, visibleRange.end).map((item) => (
            <div 
              key={item.id} 
              className={`menu-item ${selectedItem === item ? 'selected' : ''}`}
              onClick={() => handleItemClick(item)}
            >
              <img src={item.image} alt="service" />
                {item.name}
            </div>
          ))}
        </div>
        <button className="arrow right-arrow" onClick={scrollRight} disabled={visibleRange.end === menuItems.length}>▶</button>
      </div>
      {selectedItem && (
          <div className="details">
            <div className='g1'>
              <div>
                <h2>{selectedItem.name}</h2>
                <p>{selectedItem.details}</p>
              </div>
              <div>
                <h2>{selectedItem.name}</h2>
                <p>{selectedItem.details}</p>
              </div>
              <div>
                <h2>{selectedItem.name}</h2>
                <p>{selectedItem.details}</p>
              </div>
            </div>
            <div className='g2'>
              {selectedItem.slider}
            </div>
        </div>
      )}
    </div>
    </div>
  );
};