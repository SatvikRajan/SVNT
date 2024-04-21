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
import '../css/wwdb.css'
import WwdbDetails from './WwdbDetails';

import { motion} from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLeftLong } from '@fortawesome/free-solid-svg-icons';

const ArrowRightIcon = ({ className }) => {
  return <FontAwesomeIcon icon={faArrowRight} className={className} />;
};


export default function WhyWeDoBest() {

    const [showDetails, setShowDetails] = useState(false);
    const [selectedDetails, setSelectedDetails] = useState('');

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

  return (
    <div className="what-we-do-best">
      <WwdbDetails click={clickVal} index={indexVal} setClick={setClickVal} topPos={topPos} leftPos={leftPos}/>
      <div className="wwdb-container">
        <p className="wwdb-head">What We Do Best</p>

        <div className='wwdb-menu-wrapper'>
        <div className="wwdb-menu">

          <div className='mainLogo'>
            <img src={ companyLogo} />
          </div>

            <div className='m0' onClick={() => {
              handleClick();
              setIndexVal(0);
              setTopPos(135);
              setLeftPos(709);
            }}>
            <p>{names[0]}</p>
            <img className='logoImg' src={logo0} />
          </div>

            <div className='m1' onClick={() => {
              handleClick();
              setIndexVal(1);
              setTopPos(259);
              setLeftPos(336);
            }}
            >
            <p>{names[1]}</p>
          <img className='logoImg' src={logo1} />
          </div>
            
          <div className='m2' onClick={() => {
              handleClick();
              setIndexVal(2);
              setTopPos(379);
              setLeftPos(409);
            }}>
            <p>{names[2]}</p>
            <img className='logoImg' src={logo2} />
          </div>

          <div className='m3'onClick={() => {
              handleClick();
              setIndexVal(3);
              setTopPos(490);
              setLeftPos(193);
            }}>
            <p>{names[3]}</p>
            <img className='logoImg' src={logo3} />
            </div>
          
          <div className='m4' onClick={() => {
              handleClick();
              setIndexVal(4);
              setTopPos(565);
              setLeftPos(642);
            }}>
            <img className='logoImg' src={logo4} />
            <p>{names[4]}</p>
          </div>
          
          <div className='m5' onClick={() => {
              handleClick();
              setIndexVal(5);
              setTopPos(490);
              setLeftPos(985);
            }}>
          <img className='logoImg' src={logo5} />
            <p>{names[5]}</p>
          </div>
          
          <div className='m6' onClick={() => {
              handleClick();
              setIndexVal(6);
              setTopPos(379);
              setLeftPos(1034);
            }}>
          <img className='logoImg' src={logo6} />
            <p>{names[6]}</p>
          </div>

          <div className='m7' onClick={() => {
              handleClick();
              setIndexVal(7);
              setTopPos(267);
              setLeftPos(985);
            }}>
            <img className='logoImg' src={logo7} />
            <p>{names[7]}</p>
          </div>

          
          </div>
        </div>

        <div className="wwdb-learn-more">
          <a href="/services" class="btn btn-primary btn-arrow"><p className='learnMore'><span>Learn more Services
     <ArrowRightIcon className="fas"/>
          </span></p></a> 
        </div>
    </div>


    </div>
  );
}
