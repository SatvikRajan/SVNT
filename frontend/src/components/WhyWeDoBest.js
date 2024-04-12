import React, { useState } from 'react';
import companyLogo from '../images/svnt-logo';
import logo1 from '../images/Home/wwdb-1';
import logo2 from '../images/Home/wwdb-2.png';
import logo3 from '../images/Home/wwdb-3.png';
import logo4 from '../images/Home/wwdb-4.png';
import logo5 from '../images/Home/wwdb-5';
import logo6 from '../images/Home/wwdb-6';
import logo7 from '../images/Home/wwdb-7';
import logo8 from '../images/Home/wwdb-8';
import '../css/wwdb.css'
export default function WhyWeDoBest() {

    const [showDetails, setShowDetails] = useState(false);
    const [selectedDetails, setSelectedDetails] = useState('');

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
  
  function fade(name, details) {
    const div = document.getElementById("wwdb-details");
    if (div.style.display === "block") {
      div.style.animation = "fade-out 1s forwards";
      div.style.display = "hidden";
      // div.style.transitionDelay = "2s";
      setTimeout(() => {
        div.style.display = "none";
      }, 1000);
      // setShowDetails(false);
    } else{
      div.style.display = "block";
      div.style.animation = "fade-in 1s forwards";
      setShowDetails(details)
      setSelectedDetails(name);
      
    }
  }


  return (
    <div className="what-we-do-best">
      {/* {showDetails && ( */}
      <div id='wwdb-details' onClick={() => fade('','')}>
        <div className="wwdb-details animate__fadeIn" >
          <p className="wwdb-head" >What We Do Best</p>
          <div className="details-wrapper">
            <p className="left fs-4">
              {selectedDetails}
              <img src={logo2} alt="logo" />
            </p>
            <div className="right fs-4">
              <p className="p1-info">{showDetails}</p>
              <a href="/services">
                <p className="info text-light readmore">Read More</p>
              </a>
            </div>
          </div>
        </div>
        {/* )} */}
      </div>
      <div className="wwdb-container">
        <p className="wwdb-head">What We Do Best</p>

        <div className="wwdb-menu">
          <div className="m1">
            <p
              className="p1 animate__zoomIn animate__dalay-2s"
              onClick={() => {
                fade(names[1], data[1]);
              }}
            >
              {names[1]}
            </p>
            <img src={logo2} alt="logo" />
          </div>

          <div className="m2">
            <p
              className="p2 animate__zoomIn animate__dalay-3s"
              onClick={() => {
                fade(names[0], data[0]);
              }}
            >
              {names[0]}
              <img src={logo1} alt="logo" />
            </p>

            <p
              className="p3"
              onClick={() => {
                fade(names[2], data[2]);
              }}
            >
              <img src={logo3} alt="logo" />
              {names[2]}
            </p>
          </div>

          <div className="m3">
            <p
              className="p4"
              onClick={() => {
                fade(names[3], data[3]);
              }}
            >
              {names[3]}
              <img src={logo4} alt="logo" />
            </p>

            <img src={companyLogo} alt="company logo" className="company-logo scale-up-center" />

            <p
              className="p5"
              onClick={() => {
                fade(names[6], data[6]);
              }}
            >
              <img src={logo7} alt="logo" />
              {names[6]}
            </p>
          </div>

          <div className="m4">
            <p
              className="p6"
              onClick={() => {
                fade(names[7], data[7]);
              }}
            >
              {names[7]}
              <img src={logo8} alt="logo" />
            </p>
            <p
              className="p7"
              onClick={() => {
                fade(names[4], "Storage")
              }}
            >
              <img src={logo5} alt="logo" />
              Storage
            </p>
          </div>
          <div className="m5">
            <img src={logo6} alt="logo" />
            <p
              className="p8"
              onClick={() => {
                fade(names[5], data[5]);
              }}
            >
              {names[5]}
            </p>
          </div>
        </div>

        <div className="wwdb-learn-more fs-3">
          <a href="/services" style={{textAlign: '-webkit-right', filter: 'invert()', fontWeight: '200'}}><p className="readmore text-white">Learn more on Services</p></a> 
        </div>
      </div>
    </div>
  );
}
