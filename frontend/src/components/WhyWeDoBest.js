import React, { useEffect, useRef, useState } from 'react';
import companyLogo from '../images/Home/companyLogo.svg';
import logo3 from '../images/Home/surveillance-and-safety.svg';
import logo1 from '../images/Home/IP-surveillance.svg';
import logo2 from '../images/Home/energy.svg';
import logo0 from '../images/Home/IP-network.svg';
import logo4 from '../images/Home/security-and-mgmt.svg';
import logo7 from '../images/Home/integration.svg';
import logo5 from '../images/Home/storage.svg';
import logo6 from '../images/Home/audio-visual.svg';
import bg from '../images/Home/whatwedobestbg.mp4'
import '../css/wwdb.css'
import WwdbDetails from './WwdbDetails';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function WhyWeDoBest() {


  const names = [
    'IP Networking Solution',
    'IP Surveillance Solution',
    'Energy Solutions',
    'Surveillance and Safety Solutions',
    'Security & Management Services',
    'Storage and Archives ',
    'Audio-Visual Solutions',
    'Integration Solutions',
  ];

  const [clickVal, setClickVal] = useState(false);
  const [indexVal, setIndexVal] = useState('');
  const [topPos, setTopPos] = useState('')
  const [leftPos, setLeftPos] = useState('')
  function handleClick() {
    setClickVal(true);
  }
  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: 300,
      delay: 500,
      once: true
    });
  }, []);
  return (
    <div className="what-we-do-best">
      <WwdbDetails click={clickVal} index={indexVal} setClick={setClickVal} topPos={topPos} leftPos={leftPos} />
      <div className="wwdb-container">
        <video autoPlay loop muted autobuffer controls={false} playsInline className='wwdb-video'>
          <source src={bg} type="video/mp4" />
        </video>
        <p className="wwdb-head" data-aos='fade-down' data-aos-easing="ease-in-sine">What We Do</p>

        <div className='wwdb-menu-wrapper'>
          <div className="wwdb-menu">

            <div className='mainLogo'>
              <img src={companyLogo} />
            </div>

            <div className='m0' data-aos='fade-down' onClick={() => {
              handleClick();
              setIndexVal(0);
              setTopPos(135);
              setLeftPos(709);
            }}>
              <svg width="26" height="27" className='openarrow' viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.68297 24.3611L7.14551 22.8236L16.0664 13.9027L7.14551 4.9819L8.68297 3.44444L19.1413 13.9027L8.68297 24.3611Z" fill="#363636" />
              </svg>
              <p>{names[0]}</p>
              <img className='logoImg' src={logo0} alt='client' />
            </div>

            <div className='m1' data-aos='fade-right' onClick={() => {
              handleClick();
              setIndexVal(1);
              setTopPos(259);
              setLeftPos(336);
            }}
            >
              <svg width="26" height="27" className='openarrow' viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.68297 24.3611L7.14551 22.8236L16.0664 13.9027L7.14551 4.9819L8.68297 3.44444L19.1413 13.9027L8.68297 24.3611Z" fill="#363636" />
              </svg>
              <p>{names[1]}</p>
              <img className='logoImg' src={logo1} alt='client' />
            </div>

            <div className='m2' data-aos='fade-right' onClick={() => {
              handleClick();
              setIndexVal(2);
              setTopPos(379);
              setLeftPos(409);
            }}>
              <svg width="26" height="27" className='openarrow' viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.68297 24.3611L7.14551 22.8236L16.0664 13.9027L7.14551 4.9819L8.68297 3.44444L19.1413 13.9027L8.68297 24.3611Z" fill="#363636" />
              </svg>
              <p>{names[2]}</p>
              <img className='logoImg' src={logo2} alt='client' />
            </div>

            <div className='m3' data-aos='fade-right' onClick={() => {
              handleClick();
              setIndexVal(3);
              setTopPos(490);
              setLeftPos(193);
            }}>
              <svg width="26" height="27" className='openarrow' viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.68297 24.3611L7.14551 22.8236L16.0664 13.9027L7.14551 4.9819L8.68297 3.44444L19.1413 13.9027L8.68297 24.3611Z" fill="#363636" />
              </svg>
              <p>{names[3]}</p>
              <img className='logoImg' src={logo3} alt='client' />
            </div>

            <div className='m4' data-aos='fade-up' onClick={() => {
              handleClick();
              setIndexVal(4);
              setTopPos(565);
              setLeftPos(642);
            }}>

              <img className='logoImg' src={logo4} alt='client' />
              <p>{names[4]}</p>
              <svg width="26" height="27" className='openarrow' viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.68297 24.3611L7.14551 22.8236L16.0664 13.9027L7.14551 4.9819L8.68297 3.44444L19.1413 13.9027L8.68297 24.3611Z" fill="#363636" />
              </svg>
            </div>

            <div className='m5' data-aos='fade-left' onClick={() => {
              handleClick();
              setIndexVal(5);
              setTopPos(490);
              setLeftPos(985);
            }}>

              <img className='logoImg' src={logo5} alt='client' />
              <p>{names[5]}</p>
              <svg width="26" height="27" className='openarrow' viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.68297 24.3611L7.14551 22.8236L16.0664 13.9027L7.14551 4.9819L8.68297 3.44444L19.1413 13.9027L8.68297 24.3611Z" fill="#363636" />
              </svg>
            </div>

            <div className='m6' data-aos='fade-left' onClick={() => {
              handleClick();
              setIndexVal(6);
              setTopPos(379);
              setLeftPos(1034);
            }}>

              <img className='logoImg' src={logo6} alt='client' />
              <p>{names[6]}</p>
              <svg width="26" height="27" className='openarrow' viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.68297 24.3611L7.14551 22.8236L16.0664 13.9027L7.14551 4.9819L8.68297 3.44444L19.1413 13.9027L8.68297 24.3611Z" fill="#363636" />
              </svg>
            </div>

            <div className='m7' data-aos='fade-left' onClick={() => {
              handleClick();
              setIndexVal(7);
              setTopPos(267);
              setLeftPos(985);
            }}>

              <img className='logoImg' src={logo7} alt='client' />
              <p>{names[7]}</p>
              <svg width="26" height="27" className='openarrow' viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.68297 24.3611L7.14551 22.8236L16.0664 13.9027L7.14551 4.9819L8.68297 3.44444L19.1413 13.9027L8.68297 24.3611Z" fill="#363636" />
              </svg>
            </div>


          </div>
        </div>

        <div className="wwdb-learn-more wwdb-learnmore-2">
          <Link to="/services" class="btn btn-primary btn-arrow"><p className='learnMore text-dark'><span>Learn more
            <svg xmlns="http://www.w3.org/2000/svg" className="fas" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
          </span></p></Link>
        </div>
      </div>


    </div>
  );
}
